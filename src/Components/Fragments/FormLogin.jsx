import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
          <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com"></InputForm>
          <InputForm label="Password" name="password" type="password" placeholder="**********"></InputForm>
          <Button style="bg-amber-800 w-full">Login</Button>
        </form>
    )
}

export default FormLogin