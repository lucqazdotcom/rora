import { Steps, Flex, Text, VStack, useDisclosure, Dialog, Portal } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NewUserModal({delay}) {

    const { open, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if(delay){
            onOpen();
        }
    }, [delay])

    return (
        <Dialog.Root open={onOpen} onOpenChange={e => {
            if (!e.open) {
                onClose();
            }
        }}>
            <Portal>

                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content bg="lavenderGrey" color="snow">
                        <Dialog.Header>Welcome to the Röra Demo!</Dialog.Header>
                        <Dialog.CloseTrigger />
                        <Dialog.Body>
                            <VStack mt="16px" align="right">
                                <Text>
                                    To experience our transit app demo, please continue to our sign up page by selecting the new user button at the bottom of the login page.
                                </Text>
                                <Text>
                                    Alternatively, you may also login in using the below credentials which may limit your user experience as they are intended for test purposes only.
                                </Text>
                            </VStack>
                            <VStack mt="16px" align="right">
                                <Text>
                                    Username: Rora
                                </Text>
                                <Text>
                                    Password: futureuser
                                </Text>
                            </VStack>
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>

            </Portal>
        </Dialog.Root>
    );
}

export default NewUserModal;

