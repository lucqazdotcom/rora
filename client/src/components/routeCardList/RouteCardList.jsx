import { Flex, Skeleton, } from "@chakra-ui/react";
import RouteSearchPanel from "../routeSearchPanel/RouteSearchPanel";
import RouteCard from "../routeCard/RouteCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNearbyRoutes from "../../services/useNearbyRoutes";
import useGetSavedRoutes from "../../services/useGetSavedRoutes";

function RouteCardList({
    handleFocus,
    cardListVisible,
    isDrawerOpen,
    isLoaded,
    handleChange,
    handleEnter,
    userInput,
}) {
    const navigate = useNavigate();

    const { nearbyData } = useNearbyRoutes();
    const { savedRoutesData } = useGetSavedRoutes();

    const [listType, setListType] = useState("nearby");

    //Variants for transitions
    const cardListVariants = {
        visible: { y: "15%", transition: { duration: 0.3 } },
        hidden: { y: "50%" },
    };

    const onFocus = () => {
        handleFocus();
    };

    const handleButtonClick = (type) => {
        switch (type) {
            case "nearby":
                setListType(type);
                break;
            case "saved":
                setListType(type);
                break;
            default:
                setListType("nearby");
        }
    };

    const handleRouteCardClick = (routeId, direction) => {
        localStorage.setItem("direction", JSON.stringify(direction));
        navigate(`/home/${routeId}`);
    };

    return (
        <Flex
            direction="column"
            as={motion.div}
            variants={cardListVariants}
            initial={cardListVisible ? "visible" : "hidden"}
            animate={cardListVisible ? "visible" : "hidden"}
            h="100%"
        >
            <RouteSearchPanel
                onClick={onFocus}
                handleButtonClick={handleButtonClick}
                listType={listType}
                userInput={userInput}
                handleChange={handleChange}
                handleEnter={handleEnter}
            />
            <Skeleton
                startColor="darkNavy"
                mt="16px"
                endColor="twilight"
                isLoaded={isLoaded}
            >
                <Flex
                    direction="column"
                    gap="5px"
                    w="100%"
                    py="8px"
                    h={cardListVisible ? "100%" : "175px"}
                    overflowY="auto"
                    sx={{
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    {listType === "nearby"
                        ? nearbyData &&
                          nearbyData.filter(Boolean).map((route, index) => {
                              const departure = route.route_departures[0];
                              const itinerary =
                                  departure.merged_itineraries[0]
                                      ?.itineraries[0];
                              const isSaved = () => {
                                  return (
                                      savedRoutesData.find(
                                          (savedRoute) =>
                                              savedRoute.routeId ===
                                              departure.global_route_id
                                      ) !== undefined
                                  );
                              };
                              return (
                                  <RouteCard
                                      key={index}
                                      isFocused={isDrawerOpen}
                                      onClick={() =>
                                          handleRouteCardClick(
                                              departure.global_route_id,
                                              itinerary?.direction_headsign
                                          )
                                      }
                                      routeNumber={departure.route_short_name}
                                      routeHeadsign={
                                          itinerary?.direction_headsign
                                      }
                                      routeName={departure.route_long_name}
                                      routeType={departure.route_type}
                                      isSaved={isSaved()}
                                  />
                              );
                          })
                        : listType === "saved"
                        ? savedRoutesData &&
                          savedRoutesData.map((route, index) => {
                              return (
                                  <RouteCard
                                      key={index}
                                      isFocused={isDrawerOpen}
                                      onClick={() =>
                                          handleRouteCardClick(
                                              route.routeId,
                                              route.routeHeading
                                          )
                                      }
                                      routeNumber={route.routeNumber}
                                      routeHeadsign={route.routeHeading}
                                      routeName={route.routeName}
                                      routeType={route.routeType}
                                      isSaved={true}
                                  />
                              );
                          })
                        : null}
                </Flex>
            </Skeleton>
        </Flex>
    );
}

export default RouteCardList;
