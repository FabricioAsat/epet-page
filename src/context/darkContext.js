import { createContext, useState } from "react";

const darkContext = createContext();

const initialState = false;

const DarkProvider = ({ children }) => {
	const [dark, setDark] = useState(initialState);
	const data = [dark, setDark];

	return <darkContext.Provider value={data}>{children}</darkContext.Provider>;
};

export { DarkProvider };
export default darkContext;
