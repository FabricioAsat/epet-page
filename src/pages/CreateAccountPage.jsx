import React, { useContext } from "react";
import mobileContext from "../context/mobileContext";

const CreateAccountPage = () => {
	return (
		<div className="pt-12 bg-zinc-300">
			<form className="flex flex-col gap-4 py-2 px-8 w-full max-w-4xl mx-auto">
				<InputWithLabel id="name" type="text" option="Nombre" />
				<InputWithLabel id="surname" type="text" option="Apellido" />
				<InputWithLabel id="email" type="email" option="Email" />

				<fieldset className="flex justify-evenly">
					<legend className="font-bold">Género:</legend>
					<div className="flex">
						<div>
							<input type="radio" id="masc" name="gender" value="masc" checked />
							<label for="masc" className="px-1">
								Masculino
							</label>
						</div>

						<div>
							<input type="radio" id="fem" name="gender" value="fem" />
							<label for="fem" className="px-1">
								Femenino
							</label>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

function InputWithLabel({ id, type, option }) {
	const [isMobile] = useContext(mobileContext);

	// Inputs normales
	if (type === "text" || type === "email")
		return (
			<div className="flex gap-2 items-end">
				<label htmlFor={id} className={`${isMobile ? "text-base" : "text-xl"} font-bold w-1/4`}>
					{option}:
				</label>
				<input
					type={type}
					id={id}
					className="bg-inherit border-b-2 border-white focus:outline-none"
					autoComplete="off"
				/>
			</div>
		);
}

export default CreateAccountPage;
