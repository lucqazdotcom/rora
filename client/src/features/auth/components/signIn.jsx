import { SignIn } from "@clerk/react";

export default function SignInC({
	appearance,
	fallbackRedirectUrl,
	signUpUrl,
}) {
	return (
		<SignIn
			appearance={appearance}
			oauthFlow="redirect"
			fallbackRedirectUrl={fallbackRedirectUrl}
			signUpUrl={signUpUrl}
		/>
	);
}
