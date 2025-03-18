const AuthLayout = (props) => {
    const {children, title} = props
    return (
        <div className=" w-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-amber-800">{title}</h1>
        <p className="text-slate-500 font-medium mb-8">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    )
}

export default AuthLayout