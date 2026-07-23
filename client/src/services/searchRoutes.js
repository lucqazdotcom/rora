import { serverURL } from "./config";

export async function searchRoutes(searchInput) {
    try {
        let response = await fetch(`${serverURL}/home/search`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({searchInput})
        })
        return response.data
    }
    catch (error) {
        throw new Error("Failed to search route.")
    }
}
