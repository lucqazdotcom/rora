import { Card, Heading, Image, VStack, Text, Icon } from "@chakra-ui/react";
import tramIcon from "../../assets/icons/tram.svg";
import subwayIcon from "../../assets/icons/subway.svg";
import trainIcon from "../../assets/icons/train.svg";
import busIcon from "../../assets/icons/bus.svg";
import trimDirectionHeading from "../../utils/trimDirectionHeading";
import { LuArrowLeft, LuStar } from 'react-icons/lu';

function RouteDetailsCard({
    routeNumber,
    routeHeadsign,
    routeName,
    routeType,
    handleBack,
    handleUpdate,
    isSaved,
}) {
    const routeIcons = {
        0: tramIcon,
        1: subwayIcon,
        2: trainIcon,
        3: busIcon,
    };
    return (
        <Card.Root
            display="flex"
            direction="row"
            align="center"
            w="100%"
            gap="4px"
            py="8px"
            px="16px"
            bg="twilight"
            _active={{ bg: "deepNavy" }}
            cursor="pointer"
        >
            <Icon boxSize={6} color="snow" asChild><LuArrowLeft onClick={handleBack} /></Icon>
            <Image
                src={routeIcons[routeType]}
                maxH="100%"
                maxW="40px"
                color="snow"
            />
            <VStack gap="0" align="start" w="100%" color="snow">
                <Card.Header p="0">
                    <Heading
                        fontFamily="latoB"
                        fontSize="fs.subheader"
                        lineHeight="lh.subheader"
                    >
                        {`${routeNumber} ${trimDirectionHeading(
                            routeHeadsign
                        )}`}
                    </Heading>
                </Card.Header>
                <Card.Body p="0">
                    <Text
                        fontFamily="latoR"
                        fontSize="fs.body.lg"
                        lineHeight="lh.body.lg"
                    >
                        {routeName}
                    </Text>
                </Card.Body>
            </VStack>
            <Icon boxSize={6} color={isSaved ? "sunrise" : "lavenderGrey"} asChild><LuStar onClick={handleUpdate} /></Icon>
        </Card.Root>
    );
}

export default RouteDetailsCard;
