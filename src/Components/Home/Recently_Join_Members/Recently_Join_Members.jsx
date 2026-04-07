import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recently_Join_Members = () => {
    const navigate = useNavigate();
    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        const fetchBiodatas = () => {
            fetch("http://localhost:5000/api/biodata")
                .then((res) => res.json())
                .then((data) => {
                    // latest added first
                    const latest = data.reverse().slice(0, 4);
                    setBiodatas(latest);
                })
                .catch((err) => console.error(err));
        };

        fetchBiodatas();

        const interval = setInterval(fetchBiodatas, 5000);

        return () => clearInterval(interval);
    }, []);

    const specialProfessions = ["doctor", "professor", "engineer", "actor", "sportsman"];

    return (
        <section className="pb-8 px-4 md:px-8 lg:px-16">
            <SectionTitle heading={"Recently Join Members"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {biodatas.map((item) => {
                    const isPremium = specialProfessions.includes(
                        item.profession?.toLowerCase()
                    );

                    return (
                        <div
                            key={item._id}
                            className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs flex flex-col hover:shadow-xl transition relative"
                        >
                            {/* Image */}
                            <div className="w-full overflow-hidden rounded-md mb-4 shrink-0">
                                {item.profileImage ? (
                                    <img
                                        src={item.profileImage}
                                        alt={item.name}
                                        className="w-full h-48 object-cover object-[center_25%] rounded-md"
                                    />
                                ) : (
                                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                                        Photo
                                    </div>
                                )}
                            </div>

                            {/* Name + Profession */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold text-gray-800">{item.name || "No Name"}</h2>
                                <p className="text-sm text-gray-600">{item.profession || "N/A"}</p>
                            </div>

                            {/* Premium Badge */}
                            {isPremium && (
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2 w-fit">
                                    Premium
                                </span>
                            )}

                            {/* Description */}
                            <p className="text-xs text-gray-500 mb-2">
                                {item.aboutMe ? item.aboutMe.slice(0, 60) + "..." : "No description"}
                            </p>

                            {/* Location */}
                            <p className="text-xs text-gray-500 mb-2">
                                📍 {item.district || "Unknown"}, {item.country || ""}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">★★★★★</span>
                                <span className="ml-2 text-xs text-gray-600">{isPremium ? "Premium" : "New"}</span>
                            </div>

                            {/* View Profile Button */}
                            <button
                                onClick={() => navigate(`/biodata/${item._id.toString()}`)}
                                className="mt-auto w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 z-10 relative"
                            >
                                View Profile
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Recently_Join_Members;