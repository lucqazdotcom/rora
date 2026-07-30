import { Steps, Button } from "@chakra-ui/react";

function ChangePassButton({ onClick }) {
    return (
        <Button
            onClick={onClick}
            display="flex"
            alignItems="center"
            maxW="fit-content"
            px="20px"
            py="5px"
            color="snow"
            bg="lavenderGrey"
            borderRadius="20px"
            fontFamily="latoB"
            fontSize="fs.labels"
            _hover={{ bg: "deepNavy" }}
        >
            Change Password
        </Button>
    );
}

export default ChangePassButton;
