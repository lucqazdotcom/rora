import { SignUp } from "@clerk/react";

export default function SignUpC({
	appearance,
	fallbackRedirectUrl,
	signInUrl,
}) {
	return (
		<SignUp
			appearance={appearance}
			oauthFlow="redirect"
			fallbackRedirectUrl={fallbackRedirectUrl}
			signUpFallbackRedirectUrl={fallbackRedirectUrl}
			signInUrl={signInUrl}
		/>
	);
}
