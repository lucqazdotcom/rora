import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useNearbyRoutes() {
    const [nearbyData, setNearbyData] = useState(null);
    const [nearbyLoading, setNearbyLoading] = useState(null);
    const [nearbyError, setNearbyError] = useState(null);

    const userLocation = JSON.parse(localStorage.getItem("location"));

    useEffect(() => {
        setNearbyLoading(true);
        async function fetchNearbyRoutes() {
            try {
                let response = await fetch(`${serverURL}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ lat: userLocation.latitude, lon: userLocation.longitude }),
                })
                if (!response.ok){
                    throw new Error(`Failed request: ${response.status}`)
                }
                let data = await response.json()
                setNearbyData(data)
            }
            catch (error) {
                setNearbyError(error)
            }
            finally {
                setNearbyLoading(false)
            }
        }
        fetchNearbyRoutes()
    }, []);

    return { nearbyData, nearbyLoading, nearbyError };
}
export default useNearbyRoutes;
