// FIX: undo axios to fetch
import axios from "axios";
import { serverURL } from "./config";

export function editUserDetails(username, data) {
    axios
        .post(`${serverURL}/user/editUserDetails`, {
            username: username,
            data: data,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
