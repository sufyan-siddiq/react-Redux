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
  const getDimensions = (file) => {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onerror = function () {
        fileReader.abort();
        reject(new Error("Failed to load image"));
      };
      fileReader.onload = function () {
        const image = new Image();
        image.src = fileReader.result;
        image.onload = function () {
          resolve({ width: image.width, height: image.height });
        };
      };

      fileReader.readAsDataURL(file);
    });
  };
  return (
    <div className="register-container">
      <div className="title-main">
        <h1 className="title">Registration Form using React Hook Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            accept="image/*"
            {...register("profilePicture", {
              required: "this feild is required",
              validate: async (value) => {
                const fileType = ["jpg", "png", "svg", "jpeg"];
                const type = value[0].name.split(".")[1];
                console.log(value[0].name.split(".")[1]);
                if (!fileType.includes(type)) {
                  return `please upload a valid file format (${fileType})`;
                }
                const sizes = await getDimensions(value[0]);
                if (sizes.width > 1000 && sizes.height > 1000) {
                  return "Image width and height must be less than or equal 1000px";
                }
              },
            })}
          />
          {errors.profilePicture && (
            <small className="small-error">
              {errors.profilePicture.message}
            </small>
          )}
        </div>
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
              pattern: {
                value:
                  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message:
                  "(UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
              },
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
            placeholder="Enter Your Phone Number"
            type="text"
            {...register("phone", {
              required: "this feild is required",
              pattern: {
                value: /^\d{10}$/,
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
                {...register("gender", { required: "this feild is required" })}
              />
            </label>
            <label>
              Female
              <input
                name="gender"
                value="female"
                type="radio"
                {...register("gender", { required: "this feild is required" })}
              />
            </label>
            <label>
              Other
              <input
                className="input2"
                name="gender"
                value="other"
                type="radio"
                {...register("gender", { required: "this feild is required" })}
              />
            </label>
            {errors.gender && (
              <small className="small-error">{errors.gender.message}</small>
            )}
          </div>
        </div>
        {/* nested object */}
        <div className="form-group">
          <label>Address 1</label>
          <input
            name="address.state"
            type="text"
            {...register("address.state", {
              required: "this feild is required",
            })}
          />
        </div>

        {errors?.address?.state && (
          <small className="small-error">{errors.address.message}</small>
        )}

        <div className="form-group">
          <label>Address 2</label>
          <input
            name="address.state2"
            type="text"
            {...register("address.state", {
              required: "this feild is required",
            })}
          />
        </div>
        {errors?.address?.state2 && (
          <small className="small-error">{errors.address.message}</small>
        )} 
        {/* nested object end*/}
        {/* array */}
        <div className="form-group">
          <label>Address line 1</label>
          <input
            name="address.[0]"
            type="text"
            {...register("addline.[0]", {
              required: "this feild is required",
            })}
          />
        </div>
        {errors.addline && (
          <small className="small-error">{errors.addline.message}</small>
        )}
        <div className="form-group">
          <label>Address line 2</label>
          <input
            name="address.[1]"
            type="text"
            {...register("addline.[1]", { required: "this feild is required" })}
          />
        </div>
        {errors.addline && (
          <small className="small-error">{errors.addline.message}</small>
        )}
        {/* array */}
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
            {...register("tnc", {
              required: "this feild is required",
            })}
          />
          <label htmlFor="checkbox">i agree all terms and conditions</label>
          {errors.tnc && (
            <small className="small-error">{errors.tnc.message}</small>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
