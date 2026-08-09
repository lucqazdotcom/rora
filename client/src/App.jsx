import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import overrides from "./styles/theme";
import Home from "./pages/home/Home";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import RouteDetails from "./pages/routeDetails/RouteDetails";
import "../src/assets/fonts/fonts.css";

const signIn_page_url = import.meta.env.VITE_CLERK_SIGN_IN_URL;
const signUp_page_url = import.meta.env.VITE_CLERK_SIGN_UP_URL;

// NOTE: move to app folder
function App() {
	return (
		<>
			<ChakraProvider theme={overrides}>
				<Flex
					justifyContent="center"
					align="center"
					direction="column"
					h="100vh"
					w="100vw"
					backgroundColor="lavender"
				>
					<Box
						bg="deepNavy"
						boxSizing="border-box"
						h="90%"
						w="100%"
						px="24px"
						pt="24px"
					>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<Navigate to="/home" replace />} />
								<Route path={"/home"} element={<Home />} />
								<Route path="/home/user" element={<UserProfile />} />
								<Route path="/home/:id" element={<RouteDetails />} />
								<Route path={signIn_page_url} element={<SignInPage />} />
								<Route path={signUp_page_url} element={<SignUpPage />} />
							</Routes>
						</BrowserRouter>
					</Box>
					<Footer />
				</Flex>
			</ChakraProvider>
		</>
	);
}

export default App;
