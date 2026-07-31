import { Button, Input, InputGroup } from "@chakra-ui/react";

function SearchInput({ onClick, handleChange, handleEnter }) {
	return (
		<InputGroup
			gap="4px"
			endElement={
				<Button
					onClick={handleEnter}
					bg="lavenderGrey"
					_hover={{ bg: "twilight" }}
				></Button>
			}
		>
			<Input
				onClick={onClick}
				onChange={handleChange}
				cursor="pointer"
				fontFamily="latoB"
				fontSize="fs.body.lg"
				lineHeight="fs.body.lg"
				color="snow"
				bg="twilight"
				borderRadius="10px"
				borderColor="lavenderGrey"
				placeholder="Search..."
				_placeholder={{ color: "lavender", fontSize: "fs.labels" }}
				_focus={{ bg: "lavenderGrey" }}
			></Input>
		</InputGroup>
	);
}

export default SearchInput;
