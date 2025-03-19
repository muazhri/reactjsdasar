import { Link } from "react-router-dom"

const AuthLayout = (props) => {
    const {children, title, type, } = props
    return (
      <div className="flex items-center justify-center h-screen">
        <div className=" w-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-amber-800">{title}</h1>
        <p className="text-slate-500 font-medium mb-8">
          Welcome, Please enter your details
        </p>
        {children}


        <p className="text-slate-500 mt-4 text-center">
        {type === "login" ? "Don't have an account? " : "Already have an account?"}
        {type === "login" &&  (
          <Link to="/register" className="text-amber-800 font-semibold">
            Register
          </Link>
        )}    
        {type === "register" &&  (
          <Link to="/login" className="text-amber-800 font-semibold">
            Login
          </Link>
        )}    
      </p>
      </div>
      </div>
    )
}

export default AuthLayout