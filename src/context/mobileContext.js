import { createContext, useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const mobileContext = createContext();

const initialValue = false;

const MobileProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(initialValue);

	let { width } = useScreenSize();

	useEffect(() => {
		setIsMobile(width < 1024);
	}, [width]);

	const data = [isMobile];

	return <mobileContext.Provider value={data}>{children}</mobileContext.Provider>;
};

export { MobileProvider };
export default mobileContext;
