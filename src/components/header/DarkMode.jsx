import React, { useContext, useState } from "react";

import { TiWeatherSunny } from "react-icons/ti";
import { HiMoon } from "react-icons/hi";
import darkContext from "../../context/darkContext";

const DarkMode = () => {
	const [positionRight, setPositionRight] = useState(true);
	const [dark, setDark] = useContext(darkContext);

	const handlePosition = () => {
		setDark(!dark);
		setPositionRight(!positionRight);
	};

	return (
		<button
			className={`
			${!dark ? "bg-sky-200" : "bg-slate-900"} items-center w-16 rounded-3xl h-4 mr-8`}
			onClick={handlePosition}>
			<aside
				className={`h-full w-1/2 flex items-center transition-transform duration-300 ${
					positionRight ? "translate-x-0" : "translate-x-full"
				}`}>
				{positionRight ? (
					<HiMoon size="175%" color="blue" className="rounded-full w-full bg-sky-300" />
				) : (
					<TiWeatherSunny
						size="175%"
						color="yellow"
						className="rounded-full w-full bg-slate-700 "
					/>
				)}
			</aside>
		</button>
	);
};

export default DarkMode;
