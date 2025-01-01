import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm()

  return (
    <form onSubmit={handleSubmit()}>
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
          register={
            register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z\s.'-]{3,50}$/,
                message: "Invalid name format"
              }
            })
          }
        />
        {errors?.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address format"
            }
          })
          }
        />
        {errors?.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={
            register("password", {
              required: "Password is required",
            })
          }
        />
        {errors?.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      {/* <Link to="/login"> */}
      <Button
        variant={`
        ${isValid ? 'bg-primary' : 'bg-gray-400'}
        h-12 rounded-md text-sm w-full text-white
        `} type="submit">
        Register
      </Button>
      {/* </Link> */}
    </form>
  );
};

export default FormSignUp;
