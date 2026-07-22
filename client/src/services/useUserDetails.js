// FIX: undo axios to fetch
import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useUserDetails() {
    const [userDetailsData, setUserDetailsData] = useState(null);
    const [userDetailsLoading, setUserDetailsLoading] = useState(null);
    const [userDetailsError, setUserDetailsError] = useState(null);

    const username = JSON.parse(localStorage.getItem("username"));

    useEffect(() => {
        setUserDetailsLoading(true);
        axios
            .post(`${serverURL}/user/userDetails`, {
                username: username,
            })
            .then((response) => {
                setUserDetailsData(response.data);
            })
            .catch((error) => {
                setUserDetailsError(error);
            })
            .finally(() => {
                setUserDetailsLoading(false);
            });
    }, []);

    return { userDetailsData, userDetailsLoading, userDetailsError };
}
export default useUserDetails;
