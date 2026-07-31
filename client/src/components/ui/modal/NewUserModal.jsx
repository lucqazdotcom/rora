import { Text, VStack, useDisclosure, Dialog, Portal } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NewUserModal({ newUserState, onClose: handleParentClose }) {
	const { open, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (newUserState) {
			onOpen();
		}
	}, [newUserState]);

	return (
		<Dialog.Root
			open={open}
			onOpenChange={(e) => {
				if (!e.open) {
					onClose();
					handleParentClose();
				}
			}}
		>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content bg="neutral.raised" color="neutral.text">
						<Dialog.Header>Welcome to the Röra Demo!</Dialog.Header>
						<Dialog.CloseTrigger />
						<Dialog.Body>
							<VStack mt="16px" align="right">
								<Text>
									To experience our transit app demo, please use the below
									credentials to login! Thank you for choosing Röra.
								</Text>
							</VStack>
							<VStack mt="16px" align="right">
								<Text>Username: Rora</Text>
								<Text>Password: futureuser</Text>
							</VStack>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}

export default NewUserModal;
