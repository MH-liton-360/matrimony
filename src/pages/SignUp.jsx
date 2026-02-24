import { useForm } from "react-hook-form";

const SignUp = () => {

    // React Hook Form........................................!
    const { register, handleSubmit, formState: { errors }, } = useForm()


    // Onsubmit Multiline system..............................!
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">

                            <h1 className="text-3xl font-bold text-center mb-2">SignUp</h1>

                            <label className="label">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" className="input input-bordered" placeholder="Name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}

                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} name="email" className="input input-bordered" placeholder="Email" />
                            {errors.email && <span className="text-red-600">Email is required</span>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" className="input input-bordered" placeholder="Password" />
                            {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className="text-red-600">Password must be at least 6 characters</p>)}
                            {errors.password?.type === "maxLength" && (<p className="text-red-600">Password must not exceed 20 characters</p>)}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;