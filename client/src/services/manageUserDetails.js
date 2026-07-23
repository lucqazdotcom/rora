import { serverURL } from "./config";

export async function editUserDetails(username, data) {
    try {
        await fetch(`${serverURL}/user/editUserDetails`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, data }),
        })
        return true
    }
    catch (error) {
        throw new Error("Failed to save user details.")
    }
}
