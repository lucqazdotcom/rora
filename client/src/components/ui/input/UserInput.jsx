import { Steps, Box, Input, Text } from "@chakra-ui/react";

function UserInput({ inputHeader, type, placeholder, value, onChange }) {
    return (
        <Box fontFamily="latoR" w="100%">
            <Field.Label
                m="0"
                color="lavenderGrey"
                fontSize="fs.body.sm"
                lineHeight="lh.body.sm"
            >
                {inputHeader}
            </Field.Label>
            <Input
                placeholder={placeholder}
                value={value}
                onValueChange={onChange}
                type={type}
                // h="35px"
                fontSize="fs.body.md"
                lineHeight="lh.body.md"
                bg="lavenderGrey"
                color="snow"
                borderColor="lavenderGrey"
                _placeholder={{ color: "lavender", fontSize: "fs.labels" }}
                _focus={{ bg: "lavenderGrey" }}></Input>
        </Box>
    );
}

export default UserInput;
