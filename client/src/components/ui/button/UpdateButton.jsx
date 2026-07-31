import { Button } from "@chakra-ui/react";

function UpdateButton({ innerText, isUpdate, onClick }) {
    return (
        <Button
            display={isUpdate ? "flex" : "none"}
            onClick={onClick}
            justifyContent="center"
            w={isUpdate ? "100%" : "0%"}
            h="36px"
            bg="sunrise"
            color="snow"
            borderRadius="10px"
            alignItems="center"
            fontFamily="latoR"
            fontSize="fs.labels"
            lineHeight="lh.labels"
            _hover={{ bg: "darkTangerine" }}
        >
            {innerText}
        </Button>
    );
}
export default UpdateButton;
