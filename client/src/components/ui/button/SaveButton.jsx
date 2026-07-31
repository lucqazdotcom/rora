import { Button } from "@chakra-ui/react";

function SaveButton({ onClick }) {
    return (
        <Button
            onClick={onClick}
            display="flex"
            alignItems="center"
            px="40px"
            py="9px"
            mx="auto"
            borderRadius="20px"
            fontFamily="latoB"
            fontSize="fs.labels"
            bg="crimson"
            color="snow"
            _hover={{ bg: "carmine" }}
        >
            Save
        </Button>
    );
}

export default SaveButton;
