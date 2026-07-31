import { Button } from "@chakra-ui/react";

function LoginButton({ innerText, onClick, isLoading }) {
	return (
		<Button
			textStyle="labels"
			onClick={onClick}
			display="flex"
			alignItems="center"
			px="40px"
			py="9px"
			color="black"
			bg="accent.primary"
			borderRadius="20px"
			loading={isLoading}
			_hover={{ bg: "accent.hover" }}
			_active={{ bg: "accent.pressed" }}
		>
			{innerText}
		</Button>
	);
}

export default LoginButton;
