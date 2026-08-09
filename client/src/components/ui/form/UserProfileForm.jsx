import { Divider, Flex, FormControl, VStack, Box } from "@chakra-ui/react";
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
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});

	// Handle error states
	const [formErrors, setFormErrors] = useState({
		firstName: false,
		lastName: false,
		email: false,
		phone: false,
	});

	useEffect(() => {
		if (userDetailsData) {
			const { firstName, lastName, email, phone } = userDetailsData[0];

			setFormData({
				firstName: firstName ?? "",
				lastName: lastName ?? "",
				email: email ?? "",
				phone: phone ?? "",
			});
		}
	}, [userDetailsData]);

	const username = localStorage.getItem("username");

	const handleSave = () => {
		editUserDetails(username, formData);
	};

	if (userDetailsData) {
		return (
			<FormControl
				overflowY="scroll"
				h="100%"
				sx={{
					overflowY: "scroll",
					scrollbarWidth: "thin",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				<VStack gap="1">
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
				<Divider borderColor="darkNavy" m="16px" />
				<SaveButton onClick={handleSave} />
			</FormControl>
		);
	}
}
export default UserProfileForm;
