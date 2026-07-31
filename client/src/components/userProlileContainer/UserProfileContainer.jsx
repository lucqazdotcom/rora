import { Box, Flex, Image } from "@chakra-ui/react";
import dots from "../../assets/images/dots.svg";

function UserProfileContainer({ userImg, handleNavigate }) {
	return (
		<Box
			onClick={handleNavigate}
			position="absolute"
			right="0"
			maxW="55px"
			cursor="pointer"
		>
			<Flex position="relative" direction="column" gap="4px" pb="5px">
				<Image src={dots} maxH="15px" />
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
				{/* <Icon color="lavender" position="absolute" bottom="0" right="0" asChild> */}
				{/* 	<LuSettings /> */}
				{/* </Icon> */}
			</Flex>
		</Box>
	);
}

export default UserProfileContainer;
