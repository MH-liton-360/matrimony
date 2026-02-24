import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-2">Login Now!</h1>

                    {/* Email  */}
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input input-bordered" placeholder="Email" />

                    {/* Password  */}
                    <label className="label">Password</label>
                    <input type="password" ame="password" className="input input-bordered" placeholder="Password" />

                    <div className="text-right">
                        <a className="link link-hover text-sm">Forgot password?</a>
                    </div>

                    {/* Captcha */}
                    <label className="label mt-2">
                        <LoadCanvasTemplate />
                    </label>
                    <input type="text" name="captcha" className="input input-bordered" placeholder="Captcha" />

                    <input className="btn btn-neutral mt-4 w-full" type="submit" value="Login" />
                </form>

                <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
            </div>
        </section>
    );
};

export default Login;
