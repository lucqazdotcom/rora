import { Steps, Box } from "@chakra-ui/react";
import RouteCard from "../../routeCard/RouteCard";
import { useNavigate } from "react-router-dom";

function SearchResultsDrawer({ searchData, isOpen }) {
    const navigate = useNavigate();

    const uniqueDirectionHeadsigns =
        searchData &&
        searchData
            .flatMap((route) =>
                route.itineraries.map(
                    (itinerary) => itinerary.direction_headsign
                )
            )
            .filter((value, index, self) => self.indexOf(value) === index);

    const handleRouteCardClick = (routeId, direction) => {
        localStorage.setItem("direction", JSON.stringify(direction));
        navigate(`/home/${routeId}`);
    };

    if (searchData) {
        return (
            <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                zIndex="10"
            >
                <Box
                transform={isOpen ? "translateY(0%)" : "translateY(100%)"}
                transition="transform 0.3s"
                py="10px"
                >
                    {uniqueDirectionHeadsigns.map((direction, index) => (
                        <Box
                            key={index}
                            mb="5px"
                        >
                            <RouteCard
                                onClick={() =>
                                    handleRouteCardClick(
                                        searchData[0].route.global_route_id,
                                        direction
                                    )
                                }
                                routeNumber={
                                    searchData[0].route.route_short_name
                                }
                                routeHeadsign={direction}
                                routeName={searchData[0].route.route_long_name}
                                routeType={searchData[0].route.route_type}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    }
}

export default SearchResultsDrawer;
