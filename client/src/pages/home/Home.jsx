import UserProfileContainer from "../../components/userProlileContainer/UserProfileContainer";
import user3 from "../../assets/images/user3.jpg";
import { Flex, Img, Box } from "@chakra-ui/react";
import MainHeader from "../../components/mainHeader/MainHeader";
import RouteCardList from "../../components/routeCardList/RouteCardList";
import SearchResultsDrawer from "../../components/ui/drawer/SearchResultsDrawer";
import { useState, useEffect } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../utils/useLoading";
import RoraLogo from "../../assets/logo/rora-secondary.svg";
import { serverURL } from "../../services/config";

function Home() {
    const isLoading = useLoading();
    const navigate = useNavigate();


    const [cardListVisible, setCardListVisible] = useState(false);
    const [data, setData] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [userInput, setUserInput] = useState(null);

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleEnter = (event) => {
        if (userInput !== "") {
            // axios
            //     .post(`${serverURL}/home/search`, {
            //         searchInput: userInput,
            //     })
            //     .then((response) => {
            //         setData(response.data);
            //         setCardListVisible(true);
            //         setIsDrawerOpen(true);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
    };

    const userFirstName = localStorage.getItem("first_name")

    const handleFocus = () => {
        setCardListVisible(!cardListVisible);
    };

    const handleReset = () => {
        if (cardListVisible) {
            setCardListVisible(false);
            setIsDrawerOpen(false);
        }
    };

    const handleNavigate = () => {
        navigate("/home/user");
    };

    useEffect(() => {
        const handleClickOutsideDrawer = (event) => {
            if (!event.target.closest("#outside-box-target")) {
                setIsDrawerOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutsideDrawer);

        return () => {
            window.removeEventListener("click", handleClickOutsideDrawer);
        };
    }, []);

    return (
        <Flex
            position="relative"
            direction="column"
            h="100%"
            zIndex="1"
        >
            <UserProfileContainer
                userImg={user3}
                handleNavigate={handleNavigate}
            />
            <Img
                src={RoraLogo}
                position="absolute"
                display={isLoading ? "block" : "none"}
                left="0"
                top="17%"
            />
            <MainHeader userFirstName={userFirstName} loaded={isLoading} />
            <Box
                position="absolute"
                id="outside-box-target"
                onClick={handleReset}
                display={cardListVisible ? "block" : "none"}
                w="85%"
                h="10vh"
                p="8px"
            >
                <CloseIcon color="snow" />
            </Box>
            <RouteCardList
                handleFocus={handleFocus}
                cardListVisible={cardListVisible}
                isDrawerOpen={isDrawerOpen}
                isLoaded={isLoading}
                userInput={userInput}
                handleChange={handleChange}
                handleEnter={handleEnter}
            />
            <SearchResultsDrawer
                searchData={data}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </Flex>
    );
}

export default Home;
