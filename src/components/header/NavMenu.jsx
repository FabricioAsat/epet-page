import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import NavButton from "./NavButton";

const courses = ["1er", "2do", "3ero", "4to", "5to", "6to", "7mo"];

const NavMenu = ({ setOpenHamburger, setIsOpenSubMenu, isOpenSubMenu }) => {
	return (
		<nav className="desktop:flex">
			<button
				className="flex items-end justify-between"
				onClick={() => {
					setIsOpenSubMenu(!isOpenSubMenu);
				}}>
				<span className="font-bold">Nuestros cursos</span>
				<AiFillCaretDown
					className={`transition-transform duration-300 ${isOpenSubMenu ? "rotate-180" : ""}`}
				/>
			</button>

			{isOpenSubMenu && (
				<div className="flex flex-col items-start gap-2 bg-teal-300 text-black desktop:fixed desktop:w-32 desktop:p-2 desktop:h-auto desktop:translate-y-9">
					{courses.map((curso, index) => (
						<NavButton
							setOpenHamburger={setOpenHamburger}
							to={`/clases/${index + 1}`}
							text={`${curso} año`}
							key={curso}
							setIsOpenSubMenu={setIsOpenSubMenu}
						/>
					))}
				</div>
			)}
		</nav>
	);
};

export default NavMenu;
