import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import Modal from "./components/Modal";

const overrides = extendTheme({
	...styles,
	components: {
		Modal,
	},
});

export default overrides;
