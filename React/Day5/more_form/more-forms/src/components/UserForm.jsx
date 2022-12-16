import React, { useState } from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 3) {
            setFirstNameError("First Name Must Be At Least 3!");
        } else {
            setFirstNameError("");
            setFirstName(e.target.value);
        }
    };
    const handleLastName = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 3) {
            setLastNameError("Last Name Must Be At Least 3!");
        } else {
            setLastNameError("");
            setLastName(e.target.value);
        }
    };

    const handleEmail = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be at least 5!");
        } else {
            setEmailError("");
            setEmail(e.target.value);
        }
    };

    const handlePassword = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 3!");
        } else {
            setPasswordError("");
            setPassword(e.target.value);
        }
    };

    const handleConfirmPassword = (e) => {
        if (e.target.value != password && e.target.value > 0) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
            setConfirmPassword(e.target.value);
        }
    };

    return (
        <div className="container">
            <form className="formStyle">
                <div>
                    <label> First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {firstNameError ? (
                        <p style={{ color: "red" }}>{firstNameError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label> Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
                </div>
                <div>
                    <label> Email: </label>
                    <input type="text" onChange={handleEmail} />
                    {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
                </div>
                <div>
                    <label> Confirm password: </label>
                    <input type="password" onChange={handleConfirmPassword} />
                    {confirmPasswordError ? (
                        <p style={{ color: "red" }}>{confirmPasswordError}</p>
                    ) : (
                        ""
                    )}
                </div>
            </form>
            <div className="results">
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Passowrd: {password} </p>
                <p>Confirm Password: {confirmPassword} </p>
            </div>
        </div>
    );
};

export default UserForm;