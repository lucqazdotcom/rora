import { serverURL } from "./config";

export async function savedRouteChecker(username, routeId) {
    try {
        await fetch(`${serverURL}/home/checkSavedRoutes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, routeId }),
        })
        return true
    }
    catch (error) {
        throw new Error("Failed to find saved route.")
    }
}

export async function saveNewRoute(data) {
    try {
        await fetch(`${serverURL}/home/saveRoutes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        })
        return true
    }
    catch (error) {
        throw new Error("Failed to save route.")
    }

}

export async function deleteSavedRoute(username, routeId) {
    try {
        await fetch(`${serverURL}/home/deleteRoutes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, routeId }),
        })
        return true
    }
    catch (error) {
        throw new Error("Failed to delete route.")
    }
}
