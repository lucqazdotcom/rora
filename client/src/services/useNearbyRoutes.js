// FIX: undo axios to fetch
import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useNearbyRoutes() {
    const [nearbyData, setNearbyData] = useState(null);
    const [nearbyLoading, setNearbyLoading] = useState(null);
    const [nearbyError, setNearbyError] = useState(null);

    const userLocation = JSON.parse(localStorage.getItem("location"));

    useEffect(() => {
        setNearbyLoading(true);
        axios
            .post(`${serverURL}/home`, {
                lat: userLocation.latitude,
                lon: userLocation.longitude,
            })
            .then((response) => {
                setNearbyData(response.data);
            })
            .catch((error) => {
                setNearbyError(error);
            })
            .finally(() => {
                setNearbyLoading(false);
            });
    }, []);

    return { nearbyData, nearbyLoading, nearbyError };
}
export default useNearbyRoutes;
