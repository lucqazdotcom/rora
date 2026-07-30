import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px",
  },

  fonts: {
    latoR: "latoR, sans-serif",
    latoSB: "latoSB, sans-serif",
  },
  textStyles: {
    header: {
      fontFamily: "latoSB",
      fontWeight: 600,
      fontSize:   { base: "28px", desktop: "40px" },
      lineHeight: { base: "36px", desktop: "48px" },
    },
    subheader: {
      fontFamily: "latoSB",
      fontWeight: 600,
      fontSize:   { base: "20px", desktop: "28px" },
      lineHeight: { base: "28px", desktop: "36px" },
    },
    labels: {
      fontFamily: "latoSB",
      fontWeight: 600,
      fontSize:   { base: "13px", desktop: "14px" },
      lineHeight: "20px",
    },
    tableHeader: {
      fontFamily: "latoSB",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontSize:   { base: "11px", desktop: "12px" },
      lineHeight: "16px",
    },
    bodyLarge: {
      fontFamily: "latoR",
      fontWeight: 400,
      fontSize:   { base: "15px", desktop: "16px" },
      lineHeight: { base: "26px", desktop: "28px" },
    },
    bodyMedium: {
      fontFamily: "latoR",
      fontWeight: 400,
      fontSize:   { base: "13px", desktop: "14px" },
      lineHeight: { base: "20px", desktop: "22px" },
    },
    bodySmall: {
      fontFamily: "latoR",
      fontWeight: 400,
      fontSize:   { base: "11px", desktop: "12px" },
      lineHeight: { base: "16px", desktop: "18px" },
    },
  },

  colors: {
    // ---- LEGACY (pre-redesign palette) ----
    snow: "#F1F1FF",
    sapphire: "#3657C0",
    navy: "#233980",
    twilight: "#4A4973",
    lavenderGrey: "#7C7C9F",
    lavender: "#AEAED4",
    deepNavy: "#2A2A40",
    sunrise: "#F3A400",
    crimson: "#D11547",
    darkTangerine: "#CF8C00",
    carmine: "#A00F36",
    // ---- END LEGACY ----
    accent: {
      tint: "#EAFFC4",
      primary: "#B3FF37",
      hover: "#9BE01F",
      pressed: "#7FB814",
      on: "#16210A",
    },
    neutral: {
      background: "#0D0F0B",
      surface: "#171A14",
      raised: "#23271F",
      border: "#33382E",
      "text-muted": "#8A9284",
      "text-primary": "#FFFFFF",
    },
    status: {
      "on-time": "#B3FF37",
      delayed: "#F5A623",
      cancelled: "#F0435A",
    },
  },
});

export default theme;
