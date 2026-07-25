import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useGetRouteDetails(id) {
    const [routeDetailsData, setRouteDetailsData] = useState(null);
    const [routeDetailsLoading, setRouteDetailsLoading] = useState(null);
    const [routeDetailsError, setRouteDetailsError] = useState(null);

    useEffect(() => {
        setRouteDetailsLoading(true);
        async function fetchRouteDetails() {
            try {
                let response = await fetch(`${serverURL}/home/${id}`, {
                    method: "GET",
                })
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`)
                }
                const data = await response.json()
                setRouteDetailsData(data)
            }
            catch (error) {
                setRouteDetailsError(error);
                console.log(error);
            }
            finally {
                setRouteDetailsLoading(false);
            }
        }
        fetchRouteDetails()
    }, [id]);

    return { routeDetailsData, routeDetailsLoading, routeDetailsError };
}
export default useGetRouteDetails;
