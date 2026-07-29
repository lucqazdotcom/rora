import { serverURL } from "./config";

export default async function searchRoutes(searchInput) {
    try {
        let response = await fetch(`${serverURL}/home/search`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({searchInput})
        })
        let data = await response.json()
        return data
    }
    catch (error) {
        throw new Error("Failed to search route.")
    }
}
