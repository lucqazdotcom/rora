import { Flex, Progress, Text, Dialog, Portal } from "@chakra-ui/react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import { useState } from "react";

function DelayModal({ isOpen, onClose }) {
    const [userInput, setUserInput] = useState(false);

    const handleInteraction = () => {
        setUserInput(true);
    };

    return (
        <Dialog.Root open={isOpen} variant='xs' size='xs' onOpenChange={e => {
            if (!e.open) {
                onClose();
            }
        }}>
            <Portal>

                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content bg="lavenderGrey" color="snow">
                        <Dialog.Header>Update to route:</Dialog.Header>
                        <Dialog.CloseTrigger />
                        <Dialog.Body>
                            <Text>
                                Accident on route. The situation will impact all route
                                schedules until further notice. Please plan accordingly.
                            </Text>
                        </Dialog.Body>
                        {!userInput ? (
                            <Dialog.Footer>
                                <Flex direction="column" m="auto" gap="16px">
                                    <Text>Are you experiencing a delay?</Text>
                                    <Flex gap="8px">
                                        <PrimaryButton
                                            innerText="Yes"
                                            handleButtonClick={handleInteraction}
                                        />
                                        <SecondaryButton
                                            innerText="No"
                                            handleButtonClick={handleInteraction}
                                        />
                                    </Flex>
                                </Flex>
                            </Dialog.Footer>
                        ) : (
                            <Dialog.Footer>
                                <Text>
                                    Within the past 10 min, 80% of users are
                                    experiencing delays
                                </Text>
                                <Progress.Root colorPalette="blue" value={80}>
                                    <Progress.Track>
                                        <Progress.Range />
                                    </Progress.Track>
                                </Progress.Root>
                            </Dialog.Footer>
                        )}
                    </Dialog.Content>
                </Dialog.Positioner>

            </Portal>
        </Dialog.Root>
    );
}

export default DelayModal;
