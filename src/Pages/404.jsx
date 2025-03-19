import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
                <h1 className="text-3xl font-bold">Oops!</h1>
                <p className="text-slate-500">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
        </div>
    )

}

export default ErrorPage