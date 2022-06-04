import { useContext } from "react";
import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import darkContext from "../../context/darkContext";

// import sol from "../"

const Header = () => {
	let [isMobile] = useContext(mobileContext);
	let [dark] = useContext(darkContext);

	return (
		<header
			className={`fixed w-full flex justify-between items-center h-12 px-4 ${
				!dark ? "bg-slate-900 text-sky-300" : " bg-sky-300 text-slte-900"
			}`}>
			<div className={`flex items-center w-full justify-between ${!isMobile && "flex-row"}`}>
				{isMobile ? <MobileNavbar /> : <DesktopNavbar />}
			</div>
		</header>
	);
};

export default Header;
