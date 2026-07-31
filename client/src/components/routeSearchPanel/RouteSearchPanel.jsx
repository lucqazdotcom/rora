import { Flex } from "@chakra-ui/react";
import SearchInput from "../ui/input/SearchInput";
import PrimaryButton from "../ui/button/PrimaryButton";
import SecondaryButton from "../ui/button/SecondaryButton";
import locationIcon from "../../assets/icons/location.svg";

function RouteSearchPanel({ onClick, handleButtonClick, listType, handleChange, handleEnter, userInput }) {


    return (
        <Flex direction="column" gap="16px" w="100%">
            <SearchInput
                onClick={onClick}
                handleChange={handleChange}
                handleEnter={handleEnter}
                value={userInput}
            />
            <Flex gap="16px" px="24px">
                <PrimaryButton
                    innerText="Nearby"
                    icon={locationIcon}
                    handleButtonClick={handleButtonClick}
                    listType={listType}
                />
                <SecondaryButton
                    innerText="Favourites"
                    handleButtonClick={handleButtonClick}
                    listType={listType}
                />
            </Flex>
        </Flex>
    );
}

export default RouteSearchPanel;
