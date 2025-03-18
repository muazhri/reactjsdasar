import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Full Name" name="name" type="text" placeholder="enter your name please.. "></InputForm>
          <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com"></InputForm>
          <InputForm label="Password" name="password" type="password" placeholder="**********"></InputForm>
          <InputForm label="Confirm Password" name="password" type="password" placeholder="**********"></InputForm>
          <Button style="bg-amber-800 w-full">Register</Button>
        </form>
    )
}

export default FormRegister