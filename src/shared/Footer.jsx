const Footer = () => {
    return (
        <section>
            <div>
                <footer class="bg-base-200 text-base-content rounded-t-xl p-10">
                    <div class="max-w-6xl mx-auto flex flex-col items-center gap-6">

                        {/* Navigation Links */}
                        <nav class="flex flex-wrap justify-center gap-6">
                            <a class="link link-hover">About us</a>
                            <a class="link link-hover">Contact</a>
                            <a class="link link-hover">Jobs</a>
                            <a class="link link-hover">Press kit</a>
                        </nav>

                        {/* Matrimony Summary */}
                        <p class="text-center text-sm text-gray-500 max-w-md">
                            Matrimony is a lifelong partnership built on love, trust, and mutual respect.
                            It helps create strong families and meaningful relationships in society.
                        </p>

                        {/* Divider */}
                        <hr class="w-full border-gray-300 opacity-30 my-6" />

                        {/* Copyright */}
                        <div class="text-center text-xs text-gray-400">
                            Copyright © {new Date().getFullYear()} - Global Matrimony Ltd. All Rights Reserved
                        </div>

                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;