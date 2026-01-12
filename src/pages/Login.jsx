import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



const Login = () => {

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <section>
            {/* This is login page  */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>

                                {/* This is captcha section  */}
                                <label className="label mt-2">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" className="input" placeholder="Captcha" />

                                <input className="btn btn-neutral mt-4" type="submit" value="Login" />

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;