import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import overrides from "./styles/theme";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import RouteDetails from "./pages/routeDetails/RouteDetails";
import PhoneBorder from "./components/phoneBorder/PhoneBorder";
import "../src/assets/fonts/fonts.css";

function App() {
    return (
        <>
            <ChakraProvider theme={overrides}>
                <Flex
                    justifyContent="center"
                    align="center"
                    h="100vh"
                    w="100vw"
                    backgroundColor="deepNavy"
                >
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={<Login />}
                            />
                            <Route
                                path="/home"
                                element={<Home />}
                            />
                            <Route
                                path="/home/user"
                                element={<UserProfile />}
                            />
                            <Route
                                path="/home/:id"
                                element={<RouteDetails />}
                            />
                        </Routes>
                    </BrowserRouter>
                    {/* <PhoneBorder */}
                    {/*     children={ */}
                    {/*         <> */}
                    {/*             <Box */}
                    {/*                 bg="deepNavy" */}
                    {/*                 boxSizing="border-box" */}
                    {/*                 h="90%" */}
                    {/*                 px="24px" */}
                    {/*                 pt="24px" */}
                    {/*             > */}
                    {/*                 <BrowserRouter> */}
                    {/*                     <Routes> */}
                    {/*                         <Route */}
                    {/*                             path="/" */}
                    {/*                             element={<Login />} */}
                    {/*                         /> */}
                    {/*                         <Route */}
                    {/*                             path="/home" */}
                    {/*                             element={<Home />} */}
                    {/*                         /> */}
                    {/*                         <Route */}
                    {/*                             path="/home/user" */}
                    {/*                             element={<UserProfile />} */}
                    {/*                         /> */}
                    {/*                         <Route */}
                    {/*                             path="/home/:id" */}
                    {/*                             element={<RouteDetails />} */}
                    {/*                         /> */}
                    {/*                     </Routes> */}
                    {/*                 </BrowserRouter> */}
                    {/*             </Box> */}
                    {/*             <Footer /> */}
                    {/*         </> */}
                    {/*     } */}
                    {/* /> */}
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default App;
