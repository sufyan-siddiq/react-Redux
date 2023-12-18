import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data, errors);
  };
  return (
    <div className="register-container">
      <div className="title-main">
        <h1 className="title">Registration Form using React Hook Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-contol"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            {...register("firstName", {
              required: "this feild is required",
              minLength: {
                value: 4,
                message: "please enter firstName minimum 4 characters",
              },
            })}
          />
        </div>
        {errors.firstName && (
          <small className="small-error">{errors.firstName.message}</small>
        )}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: "this feild is required",
              minLength: {
                value: 4,
                message: "please enter lastName minimum 4 characters",
              },
            })}
          />
        </div>
        {errors.lastName && (
          <small className="small-error">{errors.lastName.message}</small>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "this feild is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "please enter a valid email address",
              },
            })}
          />
        </div>
        {errors.email && (
          <small className="small-error">{errors.email.message}</small>
        )}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "this feild is required",
              minLength: 6,
            })}
          />
        </div>
        {errors.password && (
          <small className="small-error">{errors.password.message}</small>
        )}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            name="phone"
            id="phone"
            placeholder="phone"
            type="text"
            {...register("phone", {
              required: "this feild is required",
              pattern: {
                value:
                  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message: "please enter a valid 10-digit phone number",
              },
            })}
          />
        </div>
        {errors.phone && (
          <small className="small-error">{errors.phone.message}</small>
        )}
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              Male
              <input
                name="gender"
                value="male"
                type="radio"
                {...register("gender")}
              />
            </label>
            <label>
              Female
              <input
                name="gender"
                value="female"
                type="radio"
                {...register("gender")}
              />
            </label>
            <label>
              Other
              <input
                className="input2"
                name="gender"
                value="other"
                type="radio"
                {...register("gender")}
              />
            </label>
          </div>
        </div>
        {/* nested object */}
        <label>
          Address 1
          <input
            name="address.state"
            type="text"
            {...register("address.state", {
              required: "this feild is required",
            })}
          />
        </label>
        {errors?.address?.state && (
          <small className="small-error">{errors.address.message}</small>
        )}
        <label>
          Address 2
          <input
            name="address.state2"
            type="text"
            {...register("address.state", {
              required: "this feild is required",
            })}
          />
        </label>
        {errors?.address?.state2 && (
          <small className="small-error">{errors.address.message}</small>
        )}
        {/* nested object end*/}
        {/* array */}
        <label>
          Address line 1
          <input
            name="address.[0]"
            type="text"
            {...register("addline.[0]", { required: "this feild is required" })}
          />
        </label>
        {errors.address && (
          <small className="small-error">This field is required</small>
        )}

        <label>
          Address line 2
          <input
            name="address.[1]"
            type="text"
            {...register("addline.[1]", { required: "this feild is required" })}
          />
        </label>
        {errors.address && (
          <small className="small-error">This field is required</small>
        )}
        {/* array*/}
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            {...register("category", {
              required: "this feild is required",
            })}
          >
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
            <option value="C">Category C</option>
          </select>
        </div>

        {errors.category && (
          <small className="small-error">{errors.category.message}</small>
        )}
        <div className="form-group2">
          <input
            className="input-box"
            type="checkbox"
            name="checkbox"
            {...register("termsandconditions", {
              required: "this feild is required",
            })}
          />
          <label htmlFor="checkbox">i agree all terms and conditions</label>
        </div>
        {errors.termsandconditions && (
          <small className="small-error">
            {errors.termsandconditions.message}
          </small>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
