import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Link with google and facebook 
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignUp = () => {
    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Onsubmit Multiline system
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">

            <title>SignUp - Our Matrimony</title>

            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>

                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: true })} className="input input-bordered" placeholder="Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered" placeholder="Email" />
                    {errors.email && <span className="text-red-600">Email is required</span>}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="input input-bordered" placeholder="Password" />
                    {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                    {errors.password?.type === "minLength" && (<p className="text-red-600">Password must be at least 6 characters</p>)}
                    {errors.password?.type === "maxLength" && (<p className="text-red-600">Password must not exceed 20 characters</p>)}

                    {/* Forgot password */}
                    <div><a className="link link-hover">Forgot password?</a></div>

                    {/* Sign Up Button */}
                    <input className="btn btn-neutral mt-4 w-full" type="submit" value="Sign Up" />

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-2">
                        <button type="button" className="btn btn-outline btn-neutral flex items-center justify-center gap-2">
                            <FcGoogle size={20} /> Continue with Google
                        </button>
                        <button type="button" className="btn btn-outline btn-primary flex items-center justify-center gap-2">
                            <FaFacebookF size={20} /> Continue with Facebook
                        </button>
                    </div>

                </form>

                {/* Link to login */}
                <p className='text-center mt-4'>
                    <small>
                        <Link to="/login" className="hover:underline">Already have an account?</Link>
                    </small>
                </p>

            </div>
        </div>
    );
};

export default SignUp;