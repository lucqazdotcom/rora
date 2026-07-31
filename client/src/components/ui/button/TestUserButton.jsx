import { Button } from "@chakra-ui/react";

function TestUserButton({ innerText, onClick }) {
	return (
		<Button
			onClick={onClick}
			display="flex"
			alignItems="center"
			w="fit-content"
			px="20px"
			py="9px"
			color="neutral.textMuted"
			bg="neutral.surface"
			borderRadius="5px"
			border="1px solid"
			borderColor="neutral.border"
			variant="outline"
			textStyle="labels"
			_hover={{
				bg: "neutral.raised",
				color: "neutral.text",
			}}
		>
			{innerText}
		</Button>
	);
}

export default TestUserButton;

