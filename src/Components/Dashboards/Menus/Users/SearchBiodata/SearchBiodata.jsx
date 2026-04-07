import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBiodata = () => {
    const navigate = useNavigate();

    const [biodatas, setBiodatas] = useState([]);
    const [filters, setFilters] = useState({
        age: "",
        profession: "",
        district: "",
        gender: "",
        religion: ""
    });
    const [loading, setLoading] = useState(false);

    // 🔹 Load all biodata on mount
    useEffect(() => {
        fetchAllBiodata();
    }, []);

    const fetchAllBiodata = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/biodata")
            .then(res => res.json())
            .then(data => {
                setBiodatas(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    // 🔹 Search function
    const handleSearch = () => {
        setLoading(true);
        const query = new URLSearchParams(filters).toString();
        fetch(`http://localhost:5000/api/biodata/search?${query}`)
            .then(res => res.json())
            .then(data => {
                setBiodatas(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    // 🔹 Reset filter
    const handleReset = () => {
        setFilters({ age: "", profession: "", district: "", gender: "", religion: "" });
        fetchAllBiodata();
    };

    return (
        <section className="p-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-6">🔍 Search Biodata</h2>

            {/* 🔹 Filter Box */}
            <div className="bg-amber-200 shadow-md rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-6 gap-4">

                <input type="number" placeholder="Age" value={filters.age}
                    onChange={(e) => setFilters({ ...filters, age: e.target.value })}
                    className="border p-2 rounded" />

                <input type="text" placeholder="Profession" value={filters.profession}
                    onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
                    className="border p-2 rounded" />

                <input type="text" placeholder="District" value={filters.district}
                    onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                    className="border p-2 rounded" />

                <select value={filters.gender}
                    onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                    className="border p-2 rounded">
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <input type="text" placeholder="Religion" value={filters.religion}
                    onChange={(e) => setFilters({ ...filters, religion: e.target.value })}
                    className="border p-2 rounded" />

                <div className="flex gap-2 col-span-1 md:col-span-1">
                    <button onClick={handleSearch} className="bg-green-600 text-white px-4 py-2 rounded w-full">Search</button>
                    <button onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded w-full">Reset</button>
                </div>
            </div>

            {/* 🔹 Loading */}
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            {/* 🔹 Result Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {!loading && biodatas.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">No biodata found 😢</p>
                )}

                {biodatas.map((item) => (
                    <div key={item._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition">

                        {/* Image */}
                        <div className="w-full mb-3">
                            {item.profileImage ? (
                                <img src={item.profileImage} alt={item.name} className="w-full h-44 object-cover rounded" />
                            ) : (
                                <div className="h-44 bg-gray-200 flex items-center justify-center text-gray-500 rounded">Photo</div>
                            )}
                        </div>

                        {/* Name */}
                        <h3 className="font-semibold text-lg text-gray-800">{item.name || "No Name"}</h3>

                        {/* Info */}
                        <p className="text-sm text-gray-600">💼 {item.profession || "N/A"}</p>
                        <p className="text-sm text-gray-600">🎂 Age: {item.age || "N/A"}</p>
                        <p className="text-sm text-gray-600">📍 {item.district || "Unknown"}, {item.country || ""}</p>
                        <p className="text-sm text-gray-600">⚧ {item.gender || "N/A"}</p>
                        <p className="text-sm text-gray-600">✝ {item.religion || "N/A"}</p>

                        {/* About */}
                        <p className="text-xs text-gray-500 mt-2 flex-1">{item.aboutMe ? item.aboutMe.slice(0, 60) + "..." : "No description"}</p>

                        {/* Button */}
                        <button onClick={() => navigate(`/biodata/${item._id}`)}
                            className="mt-3 bg-green-600 text-white py-2 rounded hover:bg-green-700">View Profile</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SearchBiodata;