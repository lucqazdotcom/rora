import roraLogo from "../../assets/logo/rora-main.svg";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import { Flex, Box, Image } from "@chakra-ui/react";
import LoginForm from "../../components/ui/form/LoginForm";
import TestUserButton from "../../components/ui/button/TestUserButton";
import NewUserModal from "../../components/ui/modal/NewUserModal";
import { useState } from "react";

function Login() {
	const navigate = useNavigate();
	let { location, locationError } = useLocation();
	const [newUser, setNewUser] = useState(false);

	const handleVerifyUser = () => {
		if (!location) {
			alert(locationError);
		} else {
			navigate("/home");
		}
	};

	const handleNewUserClick = () => {
		setNewUser(!newUser);
	};

	return (
		<Box
			h="100%"
			px={{ base: "16px", tablet: "24px" }}
			backgroundColor="neutral.surface"
		>
			<Flex
				direction="column"
				h="100%"
				justifyContent="center"
				mx="auto"
				w={{ base: "90%" }}
				align="center"
				gap="60px"
			>
				<Image src={roraLogo} />
				<LoginForm handleVerifyUser={handleVerifyUser} />
				<TestUserButton
					innerText="Not a user yet?"
					onClick={handleNewUserClick}
				/>
				<NewUserModal
					newUserState={newUser}
					onClose={() => setNewUser(false)}
				/>
			</Flex>
		</Box>
	);
}

export default Login;
