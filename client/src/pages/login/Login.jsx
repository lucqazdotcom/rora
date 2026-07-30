import { Steps, Flex, Image } from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import { useDelayedValue } from "../../utils/useDelayedValue"
import TestUserButton from "../../components/ui/button/TestUserButton";
import { useState } from "react";
import NewUserModal from "../../components/ui/modal/NewUserModal";

function Login() {
    const navigate = useNavigate();
    let { location, locationError } = useLocation();

    const handleVerifyUser = () => {
        if(!location){
            alert(locationError);
        }
        else{
            navigate("/home");
        }
    };

    //Delayed time for new user button to show to user
    const delay = useDelayedValue(false, 4000);

    //New user test account details launch
    const [newUserDetails, SetNewUserDetails] = useState(delay);

    const handleNewUserClick = () =>{
        SetNewUserDetails(!newUserDetails);
    }

    return (
        <Flex
        direction="column"
        gap="60px"
        pt="72px"
        px="24px"
        align="center"
        h="100%"
        >
            <Image src={roraLogo} />
            <LoginForm handleVerifyUser={handleVerifyUser} />
            <TestUserButton
                innerText="Not a user yet?"
                onClick={handleNewUserClick}
                />
            { delay && (
                <NewUserModal delay={delay}/>
            )}
        </Flex>
    );
}

export default Login;
