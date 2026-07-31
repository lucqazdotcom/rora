import { Box, Flex, Icon } from "@chakra-ui/react";
import SaveButton from "../../components/ui/button/SaveButton";
import UserProfileForm from "../../components/ui/form/UserProfileForm";
import { useNavigate } from "react-router-dom";
import { LuChevronLeft } from 'react-icons/lu';

function UserProfile() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <Flex
            position="relative"
            direction="column"
            bg="twilight"
            p="16px"
            gap="16px"
            h="100%"
        >
            <Flex justify="space-between">
                <Icon boxSize="32px" color="snow" cursor="pointer" asChild><LuChevronLeft onClick={handleClick} /></Icon>
            </Flex>
            <UserProfileForm />
        </Flex>
    );
}

export default UserProfile;
