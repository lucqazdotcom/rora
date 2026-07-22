// FIX: undo axios to fetch
import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useGetSavedRoutes() {
    const [savedRoutesData, setSavedRoutesData] = useState([]);
    const [savedRoutesLoading, setSavedRoutesLoading] = useState(null);
    const [savedRoutesError, setSavedRoutesError] = useState(null);

    const username = JSON.parse(localStorage.getItem("username"));

    useEffect(() => {
        setSavedRoutesLoading(true);
        axios
            .post(`${serverURL}/home/savedRoutes`, {
                username: username,
            })
            .then((response) => {
                setSavedRoutesData(response.data);
            })
            .catch((error) => {
                setSavedRoutesError(error);
            })
            .finally(() => {
                setSavedRoutesLoading(false);
            });
    }, []);

    return { savedRoutesData, savedRoutesLoading, savedRoutesError };
}
export default useGetSavedRoutes;
