import { Steps, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import RouteDetails from "./pages/routeDetails/RouteDetails";
import "../src/assets/fonts/fonts.css";

function App() {
    return (
        <>
            <Provider defaultTheme="dark">
                <Flex
                    justifyContent="center"
                    direction="column"
                    align="center"
                    h="100vh"
                    w="100vw"
                    backgroundColor="neutral.background"
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
                    <Footer />
                </Flex>
            </Provider>
        </>
    );
}

export default App;
