import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"
import LabeledInput from "../Elements/LabeledInput"

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="email"
          type="email"
          placeholder="Hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="password"
          type="password"
          placeholder="********"
          name="password"
        />
      </div>
      <div className="mb-3">
        <Checkbox />
        <label htmlFor="status" className="text-sm text-gray-01 ms-6">
          Keep me signed in
        </label>
      </div>
      <Link to="/" >
        <Button variant="h-12 rounded-md text-sm bg-primary w-full text-white" type="submit">
          Login
        </Button>
      </Link>
    </form>
  )
}

export default FormSignIn