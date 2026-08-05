import theme from "../../styles/theme/styles";

const { colors, fonts } = theme;

export const signInAppearance = {
	variables: {
		colorPrimary: colors.sapphire,
		colorBackground: colors.deepNavy,
		colorInputBackground: colors.twilight,
		colorInputText: colors.snow,
		colorText: colors.snow,
		colorTextSecondary: colors.lavender,
		colorNeutral: colors.lavenderGrey,
		borderRadius: "12px",
		fontFamily: `${fonts.latoR}, sans-serif`,
		fontFamilyButtons: "latoB, sans-serif",
	},
	elements: {
		rootBox: {
			width: "100%",
		},
		card: {
			width: "100%",
			padding: "0px",
			backgroundColor: "transparent",
			boxShadow: "none",
		},
		headerTitle: {
			color: colors.snow,
			fontFamily: "latoB, sans-serif",
			fontSize: "28px",
			lineHeight: "36px",
		},
		headerSubtitle: {
			color: colors.lavender,
		},
		formFieldLabel: {
			color: colors.snow,
			fontFamily: "latoB, sans-serif",
			fontSize: "13px",
		},
		formFieldInput: {
			backgroundColor: colors.twilight,
			borderColor: colors.lavenderGrey,
			color: colors.snow,
			boxShadow: "none",
		},
		formButtonPrimary: {
			backgroundColor: colors.sapphire,
			borderRadius: "12px",
			color: colors.snow,
			fontFamily: "latoB, sans-serif",
			boxShadow: "none",
		},
		formFieldAction: {
			color: colors.snow,
		},
		footerActionText: {
			color: colors.lavender,
		},
		footerActionLink: {
			color: colors.snow,
			fontFamily: "latoB, sans-serif",
		},
		dividerLine: {
			backgroundColor: colors.lavenderGrey,
		},
		dividerText: {
			color: colors.lavender,
		},
		alertText: {
			color: colors.snow,
		},
	},
};
