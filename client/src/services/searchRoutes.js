// FIX: undo axios to fetch
import axios from "axios";
import { serverURL } from "./config";

export default function searchRoutes(searchInput) {
    axios
        .post(`${serverURL}/home/search`, {
            searchInput: searchInput,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}
