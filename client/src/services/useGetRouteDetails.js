// FIX: undo axios to fetch
import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useGetRouteDetails(id) {
    const [routeDetailsData, setRouteDetailsData] = useState(null);
    const [routeDetailsLoading, setRouteDetailsLoading] = useState(null);
    const [routeDetailsError, setRouteDetailsError] = useState(null);

    useEffect(() => {
        setRouteDetailsLoading(true);
        axios
            .get(`${serverURL}/home/${id}`)
            .then((response) => {
                setRouteDetailsData(response.data);
            })
            .catch((error) => {
                setRouteDetailsError(error);
                console.log(error)
            })
            .finally(() => {
                setRouteDetailsLoading(false);
            });
    }, [id]);

    return { routeDetailsData, routeDetailsLoading, routeDetailsError };
}
export default useGetRouteDetails;
