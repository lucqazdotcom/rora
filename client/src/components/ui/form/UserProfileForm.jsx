import { Flex, VStack, Box, Separator, Field } from "@chakra-ui/react";
import UserInput from "../input/UserInput";
import RoraCard from "../../../assets/images/roraCard.svg";
import SaveButton from "../button/SaveButton";
import useUserDetails from "../../../services/useUserDetails";
import { useState, useEffect } from "react";
import { editUserDetails } from "../../../services/manageUserDetails";

function UserProfileForm() {
    const { userDetailsData, userDetailsLoading } = useUserDetails();

    // Handle form states
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardNumber: '',
        exDate: '',
        cvc: '',
        zip: '',
    });

    // Handle error states
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        cardNumber: false,
        exDate: false,
        cvc: false,
        zip: false,
    });

    useEffect(() => {
        if (userDetailsData) {
            const {
                firstName,
                lastName,
                email,
                phone,
                cardNumber,
                exDate,
                cvc,
                zip,
            } = userDetailsData[0];

            setFormData({
                firstName: firstName ?? '',
                lastName: lastName ?? '',
                email: email ?? '',
                phone: phone ?? '',
                cardNumber: cardNumber ?? '',
                exDate: exDate ?? '',
                cvc: cvc ?? '',
                zip: zip ?? '',
            });
        }
    }, [userDetailsData]);

    const username = localStorage.getItem("username")

    const handleSave = () => {
        editUserDetails(username, formData);
    };

    if (userDetailsData) {
        return (
            <Field.Root
                overflowY="scroll"
                h="100%"
                css={{
                    overflowY: "scroll",
                    scrollbarWidth: "thin",

                    '& &::-webkit-scrollbar': {
                        display: "none",
                    }
                }}
            >
                <VStack
                    gap="1"
                >
                    <Flex gap="16px">
                        <UserInput
                            inputHeader="First Name:"
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    firstName: e.target.value,
                                })
                            }
                        />
                        <UserInput
                            inputHeader="Last Name:"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </Flex>
                    <UserInput
                        inputHeader="Email:"
                        type="email"
                        placeholder="John.Doe@Rora.com"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <UserInput
                        inputHeader="Phone Number"
                        type="number"
                        placeholder="416-123-1234"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                    />
                </VStack>
                <Separator borderColor="darkNavy" m="16px" />
                <VStack gap="1">
                    <UserInput
                        inputHeader="Card Number"
                        type="number"
                        placeholder="1234-1234-1234-1234"
                        value={formData.cardNumber}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                cardNumber: e.target.value,
                            })
                        }
                    />
                    <Flex gap="16px">
                        <UserInput
                            inputHeader="Ex. Date"
                            type="text"
                            placeholder="01/01"
                            value={formData.exDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    exDate: e.target.value,
                                })
                            }
                        />
                        <UserInput
                            inputHeader="CVC"
                            type="number"
                            placeholder="000"
                            value={formData.cvc}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    cvc: e.target.value,
                                })
                            }
                        />
                        <UserInput
                            inputHeader="Zip"
                            type="text"
                            placeholder="a1a1a1"
                            value={formData.zip}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    zip: e.target.value,
                                })
                            }
                        />
                    </Flex>
                    <Box
                        backgroundImage={`url(${RoraCard})`}
                        backgroundSize="contain"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        w="100%"
                        h="175px"
                    />
                </VStack>
                <SaveButton onClick={handleSave} />
            </Field.Root>
        );
    }
}
export default UserProfileForm;
