import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { DarkProvider } from "./context/darkContext";
import { MobileProvider } from "./context/mobileContext";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

function App() {
	return (
		<MobileProvider>
			<DarkProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/news" element={<NewsPage />} />
						<Route path="/create-account" element={<CreateAccountPage />} />
						<Route path="/*" element={<h2>Hola</h2>} />
					</Routes>
				</BrowserRouter>
			</DarkProvider>
		</MobileProvider>
	);
}

export default App;

/*

1. Pages (home, galeria de contenido, login(auth0)) 

2. Home (main, footer)

3. gallery (1 - 2 - 3 - 4 - 5 - 6 - 7)

  Gallery 

4.

5.

*/
