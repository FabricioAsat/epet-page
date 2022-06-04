import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import mobileContext from "../../context/mobileContext";

const NavButton = ({ setOpenHamburger, setIsOpenSubMenu, to, text }) => {
	const [isMobile] = useContext(mobileContext);

	return (
		<button
			onClick={() => {
				//He aqui el error, isMobile es igual tanto en desktop como mobile. nunca cambia .

				//GG SOLUCIONADO
				if (isMobile) setOpenHamburger();
				setIsOpenSubMenu(false);
			}}>
			<NavLink className={"font-bold text-white "} to={to}>
				{text}
			</NavLink>
		</button>
	);
};

export default NavButton;
