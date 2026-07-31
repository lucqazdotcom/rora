import { createSystem, defaultConfig } from "@chakra-ui/react";
import Modal from "./components/Modal";

export const config = createSystem(defaultConfig, {
	theme: {
		slotRecipes: {
			dialog: Modal,
		},

		breakpoints: {
			tablet: "768px",
			desktop: "1024px",
			wide: "1440px",
		},

		tokens: {
			fonts: {
				latoR: { value: "latoR, sans-serif" },
				latoSB: { value: "latoSB, sans-serif" },
			},

			colors: {
				// ---- LEGACY (pre-redesign palette) ----
				snow: { value: "#F1F1FF" },
				sapphire: { value: "#3657C0" },
				navy: { value: "#233980" },
				twilight: { value: "#4A4973" },
				lavenderGrey: { value: "#7C7C9F" },
				lavender: { value: "#AEAED4" },
				deepNavy: { value: "#2A2A40" },
				sunrise: { value: "#F3A400" },
				crimson: { value: "#D11547" },
				darkTangerine: { value: "#CF8C00" },
				carmine: { value: "#A00F36" },
				// ---- END LEGACY ----
				accent: {
					tint: { value: "#EAFFC4" },
					primary: { value: "#B3FF37" },
					hover: { value: "#9BE01F" },
					pressed: { value: "#7FB814" },
					on: { value: "#16210A" },
				},
				neutral: {
					background: { value: "#0D0F0B" },
					surface: { value: "#171A14" },
					raised: { value: "#23271F" },
					border: { value: "#33382E" },
					textMuted: { value: "#8A9284" },
					text: { value: "#FFFFFF" },
				},
				status: {
					primary: { value: "#B3FF37" },
					delayed: { value: "#F5A623" },
					cancelled: { value: "#F0435A" },
				},
			},
		},

		textStyles: {
			header: {
				value: {
					fontFamily: "latoSB",
					fontWeight: 600,
					fontSize: { base: "28px", desktop: "40px" },
					lineHeight: { base: "36px", desktop: "48px" },
				},
			},
			subheader: {
				value: {
					fontFamily: "latoSB",
					fontWeight: 600,
					fontSize: { base: "20px", desktop: "28px" },
					lineHeight: { base: "28px", desktop: "36px" },
				},
			},
			labels: {
				value: {
					fontFamily: "latoSB",
					fontWeight: 600,
					fontSize: { base: "13px", desktop: "14px" },
					lineHeight: "20px",
				},
			},
			tableHeader: {
				value: {
					fontFamily: "latoSB",
					fontWeight: 600,
					textTransform: "uppercase",
					letterSpacing: "0.04em",
					fontSize: { base: "11px", desktop: "12px" },
					lineHeight: "16px",
				},
			},
			bodyLarge: {
				value: {
					fontFamily: "latoR",
					fontWeight: 400,
					fontSize: { base: "15px", desktop: "16px" },
					lineHeight: { base: "26px", desktop: "28px" },
				},
			},
			bodyMedium: {
				value: {
					fontFamily: "latoR",
					fontWeight: 400,
					fontSize: { base: "13px", desktop: "14px" },
					lineHeight: { base: "20px", desktop: "22px" },
				},
			},
			bodySmall: {
				value: {
					fontFamily: "latoR",
					fontWeight: 400,
					fontSize: { base: "11px", desktop: "12px" },
					lineHeight: { base: "16px", desktop: "18px" },
				},
			},
		},
	},
});

export default config;
