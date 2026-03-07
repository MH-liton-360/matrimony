import couple1Bg from "../../../assets/bg-image/Safe-bg.jpg";
import safetyCouple from "../../../assets/Safety_&_privacy/couple-01.png"
const Safety_and_Privacy = () => {
    return (
        <section className="relative flex">

            {/* Content number Data Encryption .................................... */}
            <div className="relative w-full flex items-center justify-between bg-linear-to-br from-green-900 via-green-700 to-green-200 rounded-lg shadow-lg overflow-hidden">

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
            <div className="relative w-full flex items-center justify-between bg-linear-to-br from-green-500 via-green-400 to-green-200 rounded-lg shadow-lg overflow-hidden">

                {/* Optional background image behind gradient */}
                <img
                    src={couple1Bg}
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

                <img src={safetyCouple} alt="" className="h-40 w-40 object-cover rounded-full" />
            </div>
        </section>
    );
}
export default Safety_and_Privacy;