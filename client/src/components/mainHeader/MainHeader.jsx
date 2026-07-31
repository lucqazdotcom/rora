import { Box, Center, Text } from "@chakra-ui/react";

function MainHeader({ userFirstName, loaded }) {
    return (
        <Center
            data-state={loaded ? "closed" : "open"}
            _open={{
                animationName: "scale-in",
                animationDuration: "300ms"
            }}
            _closed={{
                animationName: "scale-out",
                animationDuration: "120ms"
            }}
            position="absolute"
            top="100px"
            maxW="100%"
            mx="24px"
        >
            <Box
                borderRadius="20px"
                border="2px"
                boxShadow="inset 1px 1px 4px lavender"
                color="lavender"
                align="center"
                py="8px"
                px="16px"
            >
                <Text color="snow" fontFamily="latoB" fontSize="fs.header">
                    Hi, {userFirstName}! Where are you off tö?
                </Text>
            </Box>
        </Center>
    );
}

export default MainHeader;
