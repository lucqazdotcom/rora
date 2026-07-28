import { serverURL } from "./config";

// NOTE: roll real auth out of demo
export default async function fetchLogin(username, password){
    try {
        let response = await fetch(`${serverURL}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        if(!response.ok){
            throw new Error(`Failed to login with credentials: ${response.status}`)
        }
        let data = await response.json()
        console.log(data)
        return data
    }
    catch(error){
        if(error.response.data.error === "USER_NOT_FOUND"){
            return
        }
    }
}
