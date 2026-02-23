import { useForm } from "react-hook-form";



const SignUp = () => {

    // React Hook Form 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    // Onsubmit Multiline
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">

                            <h1 className="text-3xl font-bold text-center mb-2">SignUp</h1>

                            <label className="label">Name</label>
                            <input type="name" name="name" className="input input-bordered" placeholder="Name" />

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input input-bordered" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name="password" className="input input-bordered" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;