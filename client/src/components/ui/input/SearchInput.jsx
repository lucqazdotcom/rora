import { Steps, Button, Image, Input, InputGroup, Icon } from "@chakra-ui/react";
import { LuSearch } from 'react-icons/lu';

function SearchInput({ onClick, handleChange, handleEnter }) {
    return (
        <InputGroup gap="4px">
            <Input
                onClick={onClick}
                onValueChange={handleChange}
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
                _focus={{ bg: "lavenderGrey" }}></Input>
            <Button
                onClick={handleEnter}
                bg="lavenderGrey"
                _hover={{ bg: "twilight" }}
            >
            </Button>
        </InputGroup>
    );
}

export default SearchInput;
