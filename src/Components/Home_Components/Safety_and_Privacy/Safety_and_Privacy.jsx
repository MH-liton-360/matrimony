import couple1Bg from "../../../assets/bg-image/Safe-bg.jpg";
import couple2Bg from "../../../assets/bg-image/Safe-Bg0.jpg";
import safetyCouple from "../../../assets/Safety_&_privacy/couple-01.png"
import safety_Couple from "../../../assets/Safety_&_privacy/couple-02.jpg"
import SectionTitle from "../SectionTitle/SectionTitle";

const Safety_and_Privacy = () => {
    return (
        <section>
            {/* Section Heading  */}
            <SectionTitle
                heading={"Safety & Privacy"}
            ></SectionTitle>

            {/* Main content start  */}
            <div className="relative gap-2 grid sm:grid-cols-1 md:grid-cols-1 lg:flex">
                {/* Content number Data Encryption .................................... */}
                <div className="relative w-full flex items-center justify-between bg-linear-to-br from-green-900 via-green-700 to-green-300 rounded-lg shadow-lg overflow-hidden">

                    {/* Optional background image behind gradient */}
                    <img
                        src={couple1Bg}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />

                    {/* Text Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-white text-4xl font-bold flex items-center justify-center gap-2">
                            <span role="img" aria-label="shield">🛡️</span> Data Encryption
                        </h2>
                        <p className="text-gray-200 mt-4 text-lg">
                            Your information is secure
                        </p>
                    </div>

                    <img src={safetyCouple} alt="" className="h-40 w-40 object-cover rounded-full" />
                </div>

                {/* Divider  */}
                <div className="divider divider-horizontal"></div>

                {/* Content number Safe and Secure .................................... */}
                <div
                    className="relative w-full flex items-center justify-between rounded-lg shadow-lg overflow-hidden bg-linear-to-br"
                    style={{ background: "linear-gradient(to bottom right, #000E24, #000E24)" }}
                >
                    {/* Optional background image behind gradient */}
                    <img
                        src={couple2Bg}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />

                    {/* Text Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-white text-4xl font-bold flex items-center justify-center gap-2">
                            <span role="img" aria-label="shield">🛡️</span> Safe and Secure
                        </h2>
                        <p className="text-gray-200 mt-4 text-lg">
                            Trusted and Confidential
                        </p>
                    </div>

                    <img src={safety_Couple} alt="" className="h-40 w-40 object-cover rounded-full" />
                </div>
            </div>
        </section>


    );
}
export default Safety_and_Privacy;