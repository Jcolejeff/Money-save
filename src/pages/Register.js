import React from "react";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";
import { toast } from "react-toastify";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({ ...value, [name]: value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password(!isMember && !name)) {
			toast.error("Please Fill Out All Fields");
			return;
		}
	};
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};
	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo></Logo>
				<h3>{values.isMember ? "Login" : "Register"} </h3>
				{/* name field */}
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				{/* email field */}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				{/*passward field */}
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button type="submit" className="btn btn-block">
					{values.isMember ? "Login" : "Register"}
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
