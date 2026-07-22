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
    axios
        .get(
            `https://external.transitapp.com/v3/public/nearby_stops?lat=${lat}&lon=${lon}&max_distance=350`,
            {
                headers: {
                    apiKey:
                        process.env.LOCAL_TRANSIT_API_KEY,
                },
            }
        )
        .then((response) => {
            const stops = response.data.stops;
            const sortedStops = stops.sort((a, b) => a.distance - b.distance);
            const closestStops = sortedStops.slice(0, max_stop_size);
            const stopIds = closestStops.map((stop) => stop.global_stop_id);

            const allRoutes = [];

            const stopRoutes = stopIds.map((stopId) => {
                return axios
                    .get(
                        `https://external.transitapp.com/v3/public/stop_departures?global_stop_id=${stopId}&time=${currentTime}`,
                        {
                            headers: {
                                apiKey:
                                process.env.LOCAL_TRANSIT_API_KEY,
                            },
                        }
                    )
                    .then((response) => {
                        allRoutes.push(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).send(
                            "An error occurred while fetching stop routes."
                        );
                    });
            });
            Promise.all(stopRoutes)
                .then(() => {
                    res.send(allRoutes);
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send(
                        "An error occurred while fetching stop routes."
                    );
                });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send(
                "An error occurred while fetching nearby stops."
            );
        });
};

exports.searchRoutes = (req, res) => {
    const { searchInput } = req.body;
    axios
        .get(
            `https://external.transitapp.com/v3/public/routes_for_network?network_id=TTC|Toronto`,
            {
                headers: {
                    apiKey:
                        process.env.LOCAL_TRANSIT_API_KEY,
                },
            }
        )
        .then((response) => {
            const searchResults = response.data;
            const closestRoutes = [];
            searchResults.routes.forEach((route) => {
                if (
                    route.route_long_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                    route.route_short_name.includes(searchInput)
                ) {
                    closestRoutes.push(route);
                }
            });

            const finalRoutes = [];
            const bool = true;
            const errorResponses = [];

            const querryClosestRoutes = closestRoutes.map((route) => {
                return axios
                    .get(
                        `https://external.transitapp.com/v3/public/route_details?global_route_id=${route.global_route_id}&include_next_departure=${bool}`,
                        {
                            headers: {
                                apiKey:
                                    process.env.LOCAL_TRANSIT_API_KEY,
                            },
                        }
                    )
                    .then((response) => {
                        finalRoutes.push(response.data);
                    })
                    .catch((err) => {
                        errorResponses.push(err);
                    });
            });

            Promise.all(querryClosestRoutes)
                .then(() => {
                    if (errorResponses.length > 0) {
                        res.status(500).send(errorResponses);
                    } else {
                        res.status(200).send(finalRoutes);
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

/*
    SECTION 2: Route Details
        - Return in-depth details of transit route selected by user from
        external transit data provider.
*/

// const bool = true;

exports.routeDetails = (req, res) => {
    const id = req.params.id;
    return axios
        .get(
            `https://external.transitapp.com/v3/public/route_details?global_route_id=${id}&include_next_departure=true`,
            {
                headers: {
                    apiKey:
                        process.env.LOCAL_TRANSIT_API_KEY,
                },
            }
        )
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
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
