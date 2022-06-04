import React, { useContext } from "react";
import { Link } from "react-router-dom";
import homeLogo from "../assets/onlineLearning.svg";
import darkContext from "../context/darkContext";
import mobileContext from "../context/mobileContext";

const HomePage = () => {
	const [dark] = useContext(darkContext);

	const [isMobile] = useContext(mobileContext);

	return (
		<main className={`${!dark ? "bg-slate-800" : "bg-cyan-300"} pt-16`}>
			{/* Se encarga de la invitación a unirse a la Escuela */}
			<article
				// La picture
				className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2 items-center"}`}>
				<picture className={`${isMobile ? "order-first mx-auto" : "order-last"}`}>
					<img src={homeLogo} alt="HomeImage" />
				</picture>

				{/* Titulos, y el contenido introdctorio de la página */}
				<div className={`w-9/12 mx-auto ${dark ? "text-gray-900" : "text-zinc-200"}`}>
					<h2
						className={`${
							dark ? "text-gray-900" : "text-zinc-200"
						} text-4xl font-bold text-center`}>
						Escuela Técnica
					</h2>
					<p className="text-sm py-2 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo blanditiis
						animi, magnam deleniti nisi, velit quidem pariatur eveniet veniam dolores consequatur
						vitae odio ipsum reprehenderit voluptatibus! Quia, fugit corrupti.
					</p>
					<aside className={`flex ${isMobile ? "flex-col" : "flex-row justify-between"} `}>
						<Link
							to="/create-account"
							className={`font-bold text-center text-lg px-4 py-2 my-2 rounded-xl ${
								dark ? "bg-sky-500" : "bg-gray-900"
							}`}>
							Crear una cuenta
						</Link>

						<button
							className={`font-bold text-lg px-4 py-2 my-2 rounded-xl ${
								dark ? "bg-sky-500" : "bg-gray-900"
							}`}>
							Iniciar Sesión
						</button>
					</aside>
				</div>

				{/* Separa los botones del resto del contenido, mejor manejo de responsividad */}
			</article>
		</main>
	);
};

export default HomePage;
