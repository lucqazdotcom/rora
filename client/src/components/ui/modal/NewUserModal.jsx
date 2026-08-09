import {
	Flex,
	Modal,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NewUserModal({ delay }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (delay) {
			onOpen();
		}
	}, [delay]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent bg="lavenderGrey" color="snow">
				<ModalHeader>Welcome to the Röra Demo!</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack mt="16px" align="right">
						<Text>
							To experience our transit app demo, please continue to our sign up
							page by selecting the new user button at the bottom of the login
							page.
						</Text>
						<Text>
							Alternatively, you may also login in using the below credentials
							which may limit your user experience as they are intended for test
							purposes only.
						</Text>
					</VStack>
					<VStack mt="16px" align="right">
						<Text>Username: Rora</Text>
						<Text>Password: futureuser</Text>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}

export default NewUserModal;
