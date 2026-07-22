// FIX: undo axios to fetch
import axios from "axios";
import { serverURL } from "./config";

export function savedRouteChecker(username, routeId) {
    axios
        .post(`${serverURL}/home/checkSavedRoutes`, {
            username: username,
            routeId: routeId,
        })
        .then((response) => {
            return true;
        })
        .catch((error) => {
            return false;
        });
}

export function saveNewRoute(data) {
    axios.post(`${serverURL}/home/saveRoutes`, data);
}

export function deleteSavedRoute(username, routeId) {
    axios.post(`${serverURL}/home/deleteRoutes`, {
        username: username,
        routeId: routeId,
    });
}
