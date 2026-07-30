import { Steps, Button } from "@chakra-ui/react";

function TestUserButton({ innerText, onClick }) {
    return (
        <Button
            onClick={onClick}
            display="flex"
            alignItems="center"
            w="fit-content"
            px="20px"
            py="9px"
            color="lavender"
            bg="deepNavy"
            borderRadius="5px"
            variant="outline"
            colorPalette="lavenderGrey"
            fontFamily="latoB"
            fontSize="fs.body.sm"
            _hover={{ 
                bg: "lavenderGrey",
                textColor: "snow"
            }}
        >
            {innerText}
        </Button>
    );
}

export default TestUserButton;