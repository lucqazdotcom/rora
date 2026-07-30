import { Steps, Box } from "@chakra-ui/react";
import { LuCheck } from 'react-icons/lu';
import { useSteps } from "@chakra-ui/react";

function RouteStopList({ data }) {
    const stepsApi = useSteps({
        defaultStep: 1,
        count: data.length
    });

    return (
        <Steps.RootProvider
            orientation="vertical"
            gap="4px"
            color="snow"
            colorPalette="red"
            size="sm"
            value={stepsApi}
        >
            {data.map((stop, index) => (
                <Steps.Item
                    display="flex"
                    alignItems="center"
                    key={index}
                    borderRadius="10px"
                    minH="60px"
                    gap="16px"
                    w="100%"
                    px="16px"
                    bg="twilight"
                >
                    <Steps.Indicator>
                        <Steps.Status complete={<LuCheck />} />
                    </Steps.Indicator>
                    <Box flexShrink="0">
                        <Steps.Title
                            fontFamily="latoB"
                            fontSize="fs.body.lg"
                            lineHeight="lh.body.lg"
                        >
                            {stop.stop_name}
                        </Steps.Title>
                    </Box>
                </Steps.Item>
            ))}
        </Steps.RootProvider>
    );
}

export default RouteStopList;
