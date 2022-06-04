import React, { useState } from "react";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import Logo from "../Logo";
import { FaUserAlt } from "react-icons/fa";
import DarkMode from "./DarkMode";

const NavBar = ({ className, navBarSectionClass, setOpenHamburger, setIsOpenHamburger }) => {
	const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

	return (
		<nav className={className}>
			<Logo setIsOpenHamburger={setIsOpenHamburger} setIsOpenSubMenu={setIsOpenSubMenu} />
			<section className={`${navBarSectionClass}`}>
				<NavButton
					setOpenHamburger={setOpenHamburger}
					setIsOpenSubMenu={setIsOpenSubMenu}
					to="/"
					text="Home"
				/>
				<NavButton
					setOpenHamburger={setOpenHamburger}
					setIsOpenSubMenu={setIsOpenSubMenu}
					to="/news"
					text="Noticias"
				/>
				<NavMenu
					setOpenHamburger={setOpenHamburger}
					setIsOpenSubMenu={setIsOpenSubMenu}
					isOpenSubMenu={isOpenSubMenu}
				/>
			</section>
			<div className="flex items-center">
				<DarkMode />
				<FaUserAlt className="bg-gray-200 p-2 rounded-full" size="40px" />
			</div>
		</nav>
	);
};

export default NavBar;
