import { useState, useEffect } from "react";

const useScrollPosition = () => {
	const [yPosition, setYPosition] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleResize);

		return () => {
			window.removeEventListener("scroll", handleResize);
		};
	}, []);

	const handleResize = () => {
		setYPosition(window.scrollY);
	};

	return { yPosition };
};

export default useScrollPosition;
