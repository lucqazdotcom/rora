import { Flex } from "@chakra-ui/react";
import SignInC from "../../features/auth/components/signIn";
import { signInAppearance } from "../../features/auth/appearance";

const fallback_url = import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL;
const signUp_page_url = import.meta.env.VITE_CLERK_SIGN_UP_URL;

export default function SignInPage() {
	return (
		<Flex direction="column" pt="72px" align="center" h="100%">
			<SignInC
				appearance={signInAppearance}
				fallbackRedirectUrl={fallback_url}
				signUpUrl={signUp_page_url}
			/>
		</Flex>
	);
}
