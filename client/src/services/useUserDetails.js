import { useEffect, useState } from "react";
import { serverURL } from "./config";

function useUserDetails() {
    const [userDetailsData, setUserDetailsData] = useState(null);
    const [userDetailsLoading, setUserDetailsLoading] = useState(null);
    const [userDetailsError, setUserDetailsError] = useState(null);

    const username = localStorage.getItem("username")

    useEffect(() => {
        setUserDetailsLoading(true);
        async function fetchUserDetails() {
            try {
                let response = await fetch(`${serverURL}/user/userDetails`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username })
                })
                if (!response.ok) {
                    throw new Error(`Failed request for user details: ${response.status}`)
                }
                let data = await response.json()
                setUserDetailsData(data)
            }
            catch (error) {
                setUserDetailsError(error)
            }
            finally {
                setUserDetailsLoading(false)
            }
        }
        fetchUserDetails()
    }, []);

    return { userDetailsData, userDetailsLoading, userDetailsError };
}
export default useUserDetails;
