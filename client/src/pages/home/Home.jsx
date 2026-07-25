import UserProfileContainer from "../../components/userProlileContainer/UserProfileContainer";
import user3 from "../../assets/images/user3.jpg";
import { Flex, Img, Box, Drawer } from "@chakra-ui/react";
import MainHeader from "../../components/mainHeader/MainHeader";
import RouteCardList from "../../components/routeCardList/RouteCardList";
import SearchResultsDrawer from "../../components/ui/drawer/SearchResultsDrawer";
import { useState, useEffect, useRef } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../utils/useLoading";
import RoraLogo from "../../assets/logo/rora-secondary.svg";
import { serverURL } from "../../services/config";

function Home() {
    const drawerRef = useRef()
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

    const userFirstName = JSON.parse(localStorage.getItem("first_name"));

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

        if (!isDrawerOpen) return

        const handleClickOutsideDrawer = (event) => {
            if (!drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsDrawerOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutsideDrawer);

        return () => {
            document.removeEventListener("click", handleClickOutsideDrawer);
        };
    }, [isDrawerOpen]);

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
            <Flex
                justifyContent="center"
                direction="column"
                h="50%"

            >
                <Img
                    src={RoraLogo}
                    display={isLoading ? "block" : "none"}
                />
                <MainHeader userFirstName={userFirstName} loaded={isLoading} />
            </Flex>
            <RouteCardList
                ref={drawerRef}
                handleFocus={handleFocus}
                cardListVisible={cardListVisible}
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
