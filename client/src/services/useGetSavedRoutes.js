import { useEffect, useState } from "react";
import { serverURL } from "./config";

export default function useGetSavedRoutes() {
    const [savedRoutesData, setSavedRoutesData] = useState([]);
    const [savedRoutesLoading, setSavedRoutesLoading] = useState(null);
    const [savedRoutesError, setSavedRoutesError] = useState(null);

    const username = localStorage.getItem("username")

    useEffect(() => {
        setSavedRoutesLoading(true);
        async function fetchSavedRoutes() {
            try {
                let response = await fetch(`${serverURL}/home/savedRoutes`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({username})
                })
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`)
                }
                const data = await response.json()
                setSavedRoutesData(data)
            }
            catch (error) {
                setSavedRoutesError(error);
                console.log(error);
            }
            finally {
                setSavedRoutesLoading(false);
            }
        }
        fetchSavedRoutes()
    }, []);

    return { savedRoutesData, savedRoutesLoading, savedRoutesError };
}
