import { FieldError, useForm } from "react-hook-form";
import "./AddForm.css";

import { useState, useEffect, useRef } from "react";

function AddForm() {
    const [formData, setFormData] = useState<IEmployee[]>([]);
    let id = useRef(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        const storedData = localStorage.getItem("employees");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    const formSubmit = (data: any) => {
        console.log("Data Received", data);
        const newEmployee = { ...data, id: id.current };

        // Increment the ID after assigning it
        id.current++;
        const updatedFormData = [...formData, newEmployee];
        setFormData(updatedFormData);
        localStorage.setItem("employees", JSON.stringify(updatedFormData));
        reset();
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)} className="custom-form">
                <h4>
                    <span>Employee management system</span>
                </h4>
                {/* input and error for first name  */}
                <div className="errors">
                    {errors.firstname && (
                        <span>{(errors.firstname as FieldError).message}</span>
                    )}
                </div>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter First Name"
                    {...register("firstname", {
                        required: { value: true, message: "*First name is required." },
                        minLength: { value: 4, message: "*First name must contain a minimum of 4 letters." },
                        maxLength: { value: 10, message: "*First name must contain a maximum of 10 letters." },
                    })}
                />
                {/* input and error message for the last name */}
                <div className="errors">
                    {errors.lastname && (
                        <span>{(errors.lastname as FieldError).message}</span>
                    )}
                </div>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter Last Name"
                    {...register("lastname", {
                        required: { value: true, message: "*Last name is required." },
                        minLength: {
                            value: 2,
                            message: "*Last name must contain a minimum of 2 letters.",
                        },
                        maxLength: {
                            value: 6,
                            message: "*last name must contain a maximum of 6 letters.",
                        },
                    })}
                />

                {/* input for the email */}
                <div className="errors">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <input
                    type="email"
                    className="custom-input"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: { value: true, message: "email required" },
                    })}
                />

                {/* input and error for the age  */}
                <div className="errors">
                    {errors.age && <span>{(errors.age as FieldError).message}</span>}
                </div>
                <input
                    type="number"
                    className="custom-input"
                    placeholder=" Enter Your Age"
                    {...register("age", {
                        required: { value: true, message: "*Age is required" },
                        min: { value: 18, message: "*Age must be greater than 18 years" },
                        max: { value: 40, message: "*Age must be less than 40" },
                    })}
                />
                {/* select tag for gender */}
                <div className="errors">
                    {errors.gender && <span>*Gender is required</span>}
                </div>
                <select
                    className="custom-input"
                    {...register("gender", { required: true })}
                >
                    <option value="" selected disabled>
                        Select gender{" "}
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                {/* input and error for the address */}
                <div className="errors">
                    {errors.address && <span>{errors.address.message}</span>}
                </div>
                <textarea
                    className="custom-input"
                    placeholder="Enter Your Address"
                    {...register("address", {
                        required: { value: true, message: "Address is required" },
                        minLength: {
                            value: 20,
                            message: "*Address must contain a minimum of 10 character.",
                        },
                        maxLength: {
                            value: 50,
                            message: "*address must contain a maximum of 50 letters",
                        },
                    })}
                />

                <button type="submit" className="custom-btn">submit</button>
            </form>
        </div>
    );
}
export default AddForm;
export interface IEmployee {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    gender: string;
    address: string;
}
