import { Flex } from "@chakra-ui/react";
import SignUpC from "../../features/auth/components/signUp";
import { signInAppearance } from "../../features/auth/appearance";

const fallback_url = import.meta.env.VITE_CLERK_FALLBACK_REDIRECT_SIGN_UP_URL;
const signIn_page_url = import.meta.env.VITE_CLERK_SIGN_IN_URL;

export default function SignUpPage() {
	return (
		<Flex direction="column" pt="72px" align="center" h="100%">
			<SignUpC
				appearance={signInAppearance}
				fallbackRedirectUrl={fallback_url}
				signInUrl={signIn_page_url}
			/>
		</Flex>
	);
}
