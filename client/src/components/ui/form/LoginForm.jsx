import { FormControl, Box } from "@chakra-ui/react";
import LoginInput from "../input/LoginInput";
import { useState } from "react";
import LoginButton from "../button/LoginButton";
import fetchLogin from "../../../services/manageLogin"

function LoginForm({ handleVerifyUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError(false);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(false);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        // FIX: verify this error logic
        event.preventDefault();
        setIsLoading(true)
        try {
            let data = await fetchLogin(username, password)
            localStorage.setItem("username", data.username)
            localStorage.setItem("first_name", data.first_name)
            localStorage.setItem("password", data.password)
        }
        finally {
            handleVerifyUser()
            setIsLoading(false)
        }
    };
    return (
        <FormControl
            display="flex"
            flexDirection="column"
            gap="16px"
            fontFamily="latoR"
        >
            <LoginInput
                placeholderText="Username"
                type="text"
                onChange={handleUsernameChange}
                errorState={usernameError}
            />
            <LoginInput
                placeholderText="Password"
                type="password"
                onChange={handlePasswordChange}
                errorState={passwordError}
            />
            <Box my="16px" mx="auto">
                <LoginButton
                    innerText="Log In"
                    isLoading={isLoading}
                    onClick={handleSubmit}
                />
            </Box>
        </FormControl>
    );
}

export default LoginForm;
