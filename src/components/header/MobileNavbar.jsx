import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";

const MobileNavbar = () => {
	const [isOpenHamburger, setIsOpenHamburger] = useState(true);

	const setOpenHamburger = () => {
		setIsOpenHamburger(!isOpenHamburger);
	};
	return (
		<>
			<NavBar
				setOpenHamburger={setOpenHamburger}
				navBarSectionClass={`fixed flex flex-col items-start gap-4 top-12 left-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-1000 h-[calc(100%_-_3rem)] ${
					isOpenHamburger ? "translate-x-full" : "translate-x-0"
				}`}
				className="flex w-full justify-between items-center mr-8"
				setIsOpenHamburger={setIsOpenHamburger}
			/>

			{isOpenHamburger ? (
				<GiHamburgerMenu className="" size="40px" onClick={setOpenHamburger} />
			) : (
				<CgCloseO className="" size="40px" onClick={setOpenHamburger} />
			)}
		</>
	);
};

export default MobileNavbar;
