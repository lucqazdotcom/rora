import { Input } from "@chakra-ui/react";

function LoginInput({
	innerText,
	type,
	placeholderText,
	onChange,
	errorState,
}) {
	return (
		<Input
			textStyle={{
				base: "bodySmall",
				tablet: "bodyMedium",
				desktop: "bodyLarge",
			}}
			borderRadius="20px"
			bg="neutral.raised"
			border={errorState ? "1px" : "none"}
			borderColor={errorState ? "status.cancelled" : "neutral.border"}
			color="neutral.text"
			px="24px"
			placeholder={placeholderText}
			_placeholder={{ color: "neutral.textMuted" }}
			_focus={{ bg: "neutral.raised" }}
			_active={{ bg: "neutral.raised" }}
			required
			type={type}
			onChange={onChange}
		>
			{innerText}
		</Input>
	);
}

export default LoginInput;
