// FIX: undo axios to fetch
const prisma = require('../lib/prisma');
const axios = require("axios");

/*
    SECTION 1: Transit routes
        - external fetch to data provider to return nearby transit info and
        allow user to querry by search input.
*/

//limit stop processing to manage api rate limit
const max_stop_size = 3;

const currentTime = Math.floor(Date.now() / 1000);

exports.getNearbyRoutes = (req, res) => {
    const { lat, lon } = req.body;
    async function fetchNearbyRoutes() {
        try {
            let response = await fetch(`https://external.transitapp.com/v3/public/nearby_stops?lat=${lat}&lon=${lon}&max_distance=350`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "apiKey": `${process.env.LOCAL_TRANSIT_API_KEY}`
                },
            })
            if (!response.ok) {
                throw new Error(`Failed to fetch nearby routes: ${response.status}`)
            }
            let data = await response.json()

            const stops = await data.data.stops
            const sortedStops = stops.sort((a, b) => a.distance - b.distance)
            const closestStops = sortedStops.slice(0, max_stop_size)
            const stopIds = closestStops.map((stop) => stop.global_stop_id)

            const allRoutes = []

            for (let i = 0; i < stopIds.length; i++) {
                let stopId = stopIds[i]
                try {
                    let response = await fetch(`https://external.transitapp.com/v3/public/stop_departures?global_stop_id=${stopId}&time=${currentTime}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "apiKey": `${process.env.LOCAL_TRANSIT_API_KEY}`
                        }
                    })
                    if (!response.ok) {
                        throw new Error(`Failed to process stopId: ${response.status}`)
                    }
                    let data = await response.json()
                    allRoutes.push(data.data)
                }
                catch (error) {
                    console.error(error)
                    res.status(500).send("Internval service error while fetching stopId data.")
                    return
                }
            }
            res.status(200).send(allRoutes)
        }
        catch (error) {
            console.error(error)
            res.status(500).send("Internal service error while fetching nearby routes.")
            return
        }
    }

    fetchNearbyRoutes()
};

exports.searchRoutes = (req, res) => {
    const { searchInput } = req.body;
    async function fetchSearchRoutes() {
        try {
            let response = await fetch(`https://external.transitapp.com/v3/public/routes_for_network?network_id=TTC|Toronto`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "apiKey": `${process.env.LOCAL_TRANSIT_API_KEY}`
                }
            })
            if (!response.ok) {
                throw new Error(`Failed to process search routes: ${response.status}`)
            }
            let data = await response.json()
            const searchResults = data.data
            const closestRoutes = []
            searchResults.routes.forEach((route) => {
                if (route.route_long_name.toLowerCase().includes(searchInput.toLowerCase()) || route.route_short_name.includes(searchInput)) {
                    closestRoutes.push(route)
                }
            })

            const finalRoutes = []
            for (let i = 0; i < closestRoutes.length; i++) {
                let route = closestRoutes[i]
                try {
                    let response = await fetch(`https://external.transitapp.com/v3/public/route_details?global_route_id=${route.global_route_id}&include_next_departure=true`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "apiKey": `${process.env.LOCAL_TRANSIT_API_KEY}`
                        }
                    })
                    if (!response.ok) {
                        throw new Error(`Failed to process closest routes: ${response.status}`)
                    }
                    let data = await response.json()
                    finalRoutes.push(data.data)
                }
                catch (error) {
                    console.error(error)
                    res.status(500).send(`Internal error finding closest route: ${route.global_route_id}`)
                    return
                }
                res.status(200).send(finalRoutes)
            }
        }
        catch (error) {
            console.error(error)
            res.status(500).send("Internal service error searching routes")
            return
        }
    }
    fetchSearchRoutes()
};

/*
    SECTION 2: Route Details
        - Return in-depth details of transit route selected by user from
        external transit data provider.
*/

// const bool = true;

exports.routeDetails = (req, res) => {
    const id = req.params.id;
    async function fetchRouteDetails() {
        try {
            let response = await fetch(`https://external.transitapp.com/v3/public/route_details?global_route_id=${id}&include_next_departure=true`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "apiKey": `${process.env.LOCAL_TRANSIT_API_KEY}`
                }
            })
            if (!response.ok){
                throw new Error(`Failed to process route details: ${response.status}`)
            }
            let data = await response.json()
            res.status(200).send(data.data)
        }
        catch(error){
            console.error(error)
            res.status(500).send(`Internal service error fetching route details for route: ${id}`)
        }
    }
    fetchRouteDetails()
};

/*
    SECTION 3: Saved Routes
    - Save routes to database for future use and retrieval.
*/

exports.getSavedRoutes = async (req, res) => {
    const { username } = req.body;

    try {
        const routes = await prisma.userSavedRoutes.findMany({
            where: {
                username: username,
            },
        });

        if (routes.length === 0) {
            res.status(404).send("No saved routes found for the user.");
        } else {
            res.status(200).json(routes);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.checkSavedRoutes = async (req, res) => {
    const { username, routeId } = req.body;

    try {
        const route = await prisma.userSavedRoutes.findMany({
            where: {
                username: username,
                routeId: routeId,
            },
        });

        if (!route) {
            res.status(404).send("No saved routes found for the user.");
        } else {
            res.status(200).json(route);
        }
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
};

exports.addSavedRoutes = async (req, res) => {
    const {
        username,
        routeNumber,
        routeName,
        routeHeading,
        routeId,
        routeType,
    } = req.body;

    try {
        const newRoute = await prisma.userSavedRoutes.create({
            data: {
                id: uuidv4(),
                username: username,
                routeNumber: routeNumber,
                routeName: routeName,
                routeHeading: routeHeading,
                routeId: routeId,
                routeType: routeType,
            },
        });

        res.status(201).send("Route saved");
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteSavedRoutes = async (req, res) => {
    const { username, routeId } = req.body;

    try {
        const deletedRoute = await prisma.userSavedRoutes.deleteMany({
            where: {
                username: username,
                routeId: routeId,
            },
        });

        if (deletedRoute.count === 0) {
            res.status(404).send("Route not found");
        } else {
            res.status(200).send("Route deleted");
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
