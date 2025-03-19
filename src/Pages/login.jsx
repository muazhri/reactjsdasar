import Authlayout from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";


const LoginPage = () => {
  return (
    <Authlayout title="Login" type="login">
      <FormLogin></FormLogin>      
    </Authlayout>
  );
};

export default LoginPage;
