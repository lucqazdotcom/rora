import { serverURL } from "./config";

export default async function fetchLogin(username, password){
    const loginData = {
        "username": "",
        "password":"",
        "data": null

    }
    try {
        let reponse = await fetch(`${serverURL}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        if(!response.ok){
            throw new Error(`Failed to login with credentials: ${response.status}`)
        }
        let data = await response.json()
        loginData["username"] = data.data
        return data
    }
    catch(error){
        if(error.response.data.error === "USER_NOT_FOUND"){
            return
        }
    }
}
