import { Box, Flex, Img } from "@chakra-ui/react";
import dots from "../../assets/images/dots.svg";
import { SettingsIcon } from "@chakra-ui/icons";

function UserProfileContainer({ userImg, handleNavigate }) {
    return (
        <Box onClick={handleNavigate} position="absolute" right="0" top="20px" maxW="55px" cursor="pointer">
            <Flex position="relative" direction="column" gap="4px" pb="5px">
                <Img src={dots} maxH="15px" />
                <Box
                    border="1px"
                    borderColor="lavender"
                    borderRadius="50%"
                    h="55px"
                    w="55px"
                    pb="10px"
                    backgroundImage={userImg}
                    backgroundPosition="center"
                    backgroundSize="cover"
                ></Box>
                <SettingsIcon
                    color="lavender"
                    position="absolute"
                    bottom="0"
                    right="0"
                />
            </Flex>
        </Box>
    );
}

export default UserProfileContainer;
