import { Text, Dialog, Portal } from "@chakra-ui/react";

function DelayModal({ onOpen, onClose }) {
	return (
		<Dialog.Root
			open={onOpen}
			onOpenChange={(e) => {
				if (!e.open) {
					onClose();
				}
			}}
		>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Header>Service Update:</Dialog.Header>
						<Dialog.CloseTrigger />
						<Dialog.Body>
							<Text>
								This route has temporarily changed due to city planning. Please
								refer to your service provider’s website for more information.
							</Text>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}

export default DelayModal;
