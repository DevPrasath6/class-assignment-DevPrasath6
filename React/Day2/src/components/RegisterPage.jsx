import {useState} from 'react';
import React from 'react';

function RegisterPage() {
    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, seterrors] = useState({});

    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let errorMessage = {};
        if(!formData.username.trim()){
            errorMessage.username = "Username is required";
        }
        if(!formData.email.trim()){
            errorMessage.email = "Email is required";
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
            errorMessage.email = "Email is invalid";
        }
        if(!formData.password.trim()){
            errorMessage.password = "Password is required";
        }
        else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(formData.password)){
            errorMessage.password = "Password is invalid";
        }
        if(formData.confirmPassword !== formData.password){
            errorMessage.confirmPassword = "Passwords do not match";
        }
        return errorMessage;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if(Object.keys(errors).length > 0){
            seterrors(errors);
        }
        else{
            seterrors({});
            setformData({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            alert("Form submitted successfully");
        }
    };

    console.log("Errors:", errors);

    return (
        <div>
            <h1>Register Page</h1>
            <form action="">
                <div className="">
                    <label htmlFor="">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <p><style color="red">{errors.username}</style></p>
                </div>
                <div className="">
                    <label htmlFor="">Email :</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p><style color="red">{errors.email}</style></p>
                </div>
                <div className="">
                    <label htmlFor="">Password :</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p><style color="red">{errors.password}</style></p>
                </div>
                <div className="">
                    <label htmlFor="">Confirm Password :</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <p><style color="red">{errors.confirmPassword}</style></p>
                </div>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}
