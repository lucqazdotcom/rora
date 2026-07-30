import { Steps, defineSlotRecipe } from "@chakra-ui/react";
import { dialogAnatomy } from "@chakra-ui/react/anatomy";
const Modal = defineSlotRecipe({
    slots: dialogAnatomy.keys(),
    base: {
        backdrop: {
            bg: "blackAlpha.600",
        },
        content: {
            bg: "neutral.surface",
            color: "neutral.text",
            borderRadius: "20px",
        },
    },
});

export default Modal;
