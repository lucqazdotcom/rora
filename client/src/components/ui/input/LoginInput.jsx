import { Steps, Input } from "@chakra-ui/react";

function LoginInput({
    innerText,
    type,
    placeholderText,
    onChange,
    errorState,
}) {
    return (
        <Input
            textStyle="bodySmall"
            borderRadius="20px"
            bg="neutral.surface"
            border={errorState ? "1px" : "none"}
            borderColor={errorState ? "status.cancelled" : "none"}
            color="neutral.text"
            px="24px"
            placeholder={placeholderText}
            _placeholder={{ color: "neutral.textMuted"}}
            _focus={{ bg: "neutral.raised" }}
            _active={{ bg: "neutral.raised" }}
            required
            type={type}
            onValueChange={onChange}>
            {innerText}
        </Input>
    );
}

export default LoginInput;
