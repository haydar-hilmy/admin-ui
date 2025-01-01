import { Link, useNavigate } from "react-router-dom"
import Button from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"
import LabeledInput from "../Elements/LabeledInput"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import CustomizedSnackbars from "../Elements/Snackbar"
import { jwtDecode } from "jwt-decode"

const FormSignIn = () => {
  const [msg, setMsg] = useState("")
  const [open, setOpen] = useState(true)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm()
  const onFormSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      const decoded = jwtDecode(response.data.refreshToken)
      console.log("Decoded Token: ", decoded)
  
      setOpen(true)
      setMsg({severity: "Success", desc: "Login Success"})

      localStorage.setItem("refreshToken", response.data.refreshToken)
      navigate('/')

      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        setOpen(true)
        setMsg({severity: "Error", desc: `Login Failed: ${error.response.data.msg}`})
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} >
      <div className="mb-6">
        <LabeledInput
          label="email"
          type="email"
          placeholder="Hello@example.com"
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
          label="password"
          type="password"
          placeholder="********"
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
      <div className="mb-3">
        <Checkbox />
        <label htmlFor="status" className="text-sm text-gray-01 ms-6">
          Keep me signed in
        </label>
      </div>

      {/* <Link to="/" > */}
      <Button 
      disabled={isValid ? false : true}
      variant={`
        ${isValid ? 'bg-primary' : 'bg-gray-400'}
        h-12 rounded-md text-sm w-full text-white
        `} type="submit">
        Login
      </Button>
      {/* <p className="text-sm text-center py-3 text-red-600">{msg}</p> */}
      {
        msg && (
          <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
          />
        )
      }
      {/* </Link> */}
    </form >
  )
}

export default FormSignIn