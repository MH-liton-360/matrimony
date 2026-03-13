import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (!validateCaptcha(captcha)) {
            alert("Captcha does not match!");
            return;
        }

        console.log(email, password);
        navigate("/home");
    };

    const handleGoogleLogin = () => {
        alert("Google login clicked!");
        // ekhane apni firebase/google oauth implement korben
    };

    const handleFacebookLogin = () => {
        alert("Facebook login clicked!");
        // ekhane apni firebase/facebook oauth implement korben
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200 p-24">
            <title>Login - Our Matrimony</title>

            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-2">Login Now!</h1>

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input input-bordered" placeholder="Email" />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input input-bordered" placeholder="Password" />

                    <div className="flex justify-end mb-2">
                        <a className="link link-hover text-sm">Forgot password?</a>
                    </div>

                    {/* Captcha */}
                    <label className="label mt-2">
                        <LoadCanvasTemplate />
                    </label>
                    <input type="text" name="captcha" className="input input-bordered" placeholder="Captcha" />

                    <input className="btn btn-neutral mt-4 w-full" type="submit" value="Login" />

                    {/* OR Divider */}
                    <div className="divider">OR</div>

                    {/* Social Buttons */}
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

                {/* Link add signup */}
                <p className='text-center mt-4'><small>New Here? <Link to="/signup" className="hover:underline">Create an account</Link> </small></p>
            </div>
        </section>
    );
};

export default Login;