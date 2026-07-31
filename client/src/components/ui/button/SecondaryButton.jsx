import { Button } from "@chakra-ui/react";

function SecondaryButton({ innerText, handleButtonClick, listType }) {
    const handleClick = () => {
        handleButtonClick("saved");
    };

    return (
        <Button
            onClick={handleClick}
            display="flex"
            alignItems="center"
            w="100%"
            px="40px"
            py="9px"
            borderRadius="20px"
            fontFamily="latoB"
            fontSize="fs.labels"
            bg={listType === "saved" ? "sunrise" : "deepNavy"}
            color={listType === "saved" ? "snow" : "lavender"}
            border={listType === "saved" ? "none" : "1px"}
            borderColor="lavender"
            _hover={
                listType === "saved"
                    ? { bg: "darkTangerine" }
                    : { bg: "lavenderGrey" }
            }
        >
            {innerText}
        </Button>
    );
}

export default SecondaryButton;
