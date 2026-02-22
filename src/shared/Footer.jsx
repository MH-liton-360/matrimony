const Footer = () => {
    return (
        <section>
            <div>
                <footer class="bg-amber-50 text-emerald-950 rounded-t-xl pt-10">
                    <div class="max-w-6xl mx-auto flex flex-col items-center gap-6">

                        {/* Navigation Links */}
                        <nav class="flex flex-wrap justify-center gap-6">
                            <a class="link link-hover">About us</a>
                            <a class="link link-hover">Terms of Use</a>
                            <a class="link link-hover">Privacy Statement</a>
                            <a class="link link-hover">Dating Safety</a>
                        </nav>

                        {/* Matrimony Summary */}
                        <p class="text-center text-sm text-emerald-950 max-w-md">
                            Matrimony is a lifelong partnership built on love, trust, and mutual respect.
                            It helps create strong families and meaningful relationships in society.
                        </p>

                        {/* Divider */}
                        <hr class="w-full border-emerald-950 opacity-30" />

                        {/* Copyright */}
                        <div class="text-center text-xs text-emerald-950 pb-3">
                            Copyright © {new Date().getFullYear()} - Global Matrimony Ltd. All Rights Reserved
                        </div>

                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;