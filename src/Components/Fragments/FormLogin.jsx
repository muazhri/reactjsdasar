import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {

  const HandleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={HandleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="**********"
      ></InputForm>
      <Button style="bg-amber-800 w-full" type="submit" >Login</Button>
    </form>
  );
};

export default FormLogin;
