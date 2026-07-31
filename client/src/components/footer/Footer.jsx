import { Flex, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Flex
            bg="deepNavy"
            h="10%"
            color="lavenderGrey"
            fontSize="11px"
            align="center"
            w="100%"
        >
            <Text align="center" w="100%">© Röra Inc. All Rights Reserved.</Text>
        </Flex>
    );
}

export default Footer;
