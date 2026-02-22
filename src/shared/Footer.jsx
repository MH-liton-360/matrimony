import F_logo from "../assets/logo/Interlocked hands forming a heart.png"


const Footer = () => {
    return (
        <section>
            <div>
                <footer className="footer sm:footer-horizontal bg-white text-black p-10">
                    <aside>
                        <img className="h-12 w-12 rounded-xl" src={F_logo} alt="matrimony" />
                        <p>
                            Global Matrimony Ltd.
                            <br />
                            Providing reliable tech since 2026
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Term of Use</h6>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                    </nav>
                </footer>
            </div>
        </section>
    );
};

export default Footer;