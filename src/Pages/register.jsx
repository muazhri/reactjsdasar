import Authlayout from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/Formregister";


const RegisterPage = () => {
  return (
    <Authlayout title="Login" type="register">
      <FormRegister></FormRegister>
    </Authlayout>
  );
};

export default RegisterPage;
