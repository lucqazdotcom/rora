import { Flex, Skeleton, useDisclosure, Box } from "@chakra-ui/react";
import RouteStopList from "../../components/routeStopList/RouteStopList";
import TimeBadge from "../../components/ui/badge/TimeBadge";
import UpdateButton from "../../components/ui/button/UpdateButton";
import ServiceChangeModal from "../../components/ui/modal/ServiceChangeModal";
import DelayModal from "../../components/ui/modal/DelayModal";
import useGetRouteDetails from "../../services/useGetRouteDetails";
import { useNavigate, useParams } from "react-router-dom";
import RouteDetailsCard from "../../components/routeDetailsCard/RouteDetailsCard";
import {
    savedRouteChecker,
    saveNewRoute,
    deleteSavedRoute,
} from "../../services/manageSavedRoutes";
import { useState } from "react";
import { useLoading } from "../../utils/useLoading";
import getStopsAfterCurrentLocation from "../../utils/getStopsAfterCurrentLocation";
import timeConverter from "../../utils/timeConverter";

function RouteDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/home");
    };

    const isLoaded = useLoading();

    const { routeDetailsData } = useGetRouteDetails(id);

    const username = localStorage.getItem("username")
    const direction = JSON.parse(localStorage.getItem("direction"));

    const [isSaved, setIsSaved] = useState(async function verifySave() {
        return await savedRouteChecker(username, id);
    });

    // Toggle route updates
    const [isUpdate, setIsUpdate] = useState(false);

    const [modalType, setModalType] = useState("Service Delay");

    const toggleUpdate = (type) => {
        if (type === "Service Delay") {
            return <DelayModal isOpen={isOpen} onClose={onClose} />;
        }
        if (type === "Service Update") {
            return <ServiceChangeModal isOpen={isOpen} onClose={onClose} />;
        }
        return null;
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    // Mimics if an update were to be received from a service provider
    const incomingUpdate = () => {
        setTimeout(() => {
            setIsUpdate(true);
        }, 9000);
    };

    incomingUpdate();

    const handleUpdate = async () => {
        if (isSaved) {
            await deleteSavedRoute(username, id);
            setIsSaved(false);
        } else {
            const data = {
                username: username,
                routeNumber: routeDetailsData.route.route_short_name,
                routeName: routeDetailsData.route.route_long_name,
                routeHeading: direction,
                routeId: id,
                routeType: routeDetailsData.route.route_type,
            };
            await saveNewRoute(data);
            setIsSaved(true);
        }
        //Toggle between service update type randomly
        const randomType =
            Math.random() < 0.5 ? "Service Delay" : "Service Update";
        setModalType(randomType);
    };

    if (routeDetailsData) {
        // BUG: render UI breaks if user is not near location of fav route
        const routeDetailsDataSliced = getStopsAfterCurrentLocation(
            routeDetailsData
        );
        let nextDeparture = null;
        let formattedTime = null;

        if(routeDetailsDataSliced && routeDetailsDataSliced.length > 0){
            nextDeparture = routeDetailsDataSliced[0].next_departure?.departure_time
            formattedTime = timeConverter(nextDeparture)
        }
        if(routeDetailsDataSliced && nextDeparture){
        return (
            <Flex
                position="relative"
                overflow="hidden"
                direction="column"
                gap="8px"
                zIndex="1"
                py="16px"
                h="100%"
            >
                <Flex h="25%" direction="column" gap="16px">
                    <Skeleton
                        startColor="darkNavy"
                        endColor="twilight"
                        isLoaded={isLoaded}
                    >
                        <RouteDetailsCard
                            routeNumber={
                                routeDetailsData.route.route_short_name
                            }
                            routeName={routeDetailsData.route.route_long_name}
                            routeType={routeDetailsData.route.route_type}
                            routeHeadsign={JSON.parse(
                                localStorage.getItem("direction")
                            )}
                            isSaved={isSaved}
                            handleBack={handleBack}
                            handleUpdate={handleUpdate}
                        />
                    </Skeleton>
                    <Skeleton
                        startColor="darkNavy"
                        endColor="twilight"
                        isLoaded={isLoaded}
                    >
                        <Flex
                            align="center"
                            gap="16px"
                            px="16px"
                            justifyContent="center"
                        >
                            <TimeBadge innerText={5} />
                            <UpdateButton
                                isUpdate={isUpdate}
                                onClick={onOpen}
                                innerText={modalType}
                            />
                            {toggleUpdate(modalType)}
                        </Flex>
                    </Skeleton>
                </Flex>
                <Box
                    h="75%"
                    overflowY="scroll"
                    sx={{
                        overflowY: "scroll",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <Skeleton
                        startColor="darkNavy"
                        endColor="twilight"
                        isLoaded={isLoaded}
                    >
                        <RouteStopList
                            direction={direction}
                            data={routeDetailsDataSliced}
                        />
                    </Skeleton>
                </Box>
            </Flex>
        );
        }
    }
}

export default RouteDetails;
