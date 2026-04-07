import { useEffect, useState } from "react";

const SearchBiodata = () => {
    const [biodatas, setBiodatas] = useState([]);
    const [filters, setFilters] = useState({
        age: "",
        profession: "",
        district: ""
    });

    // প্রথমে সব data show
    useEffect(() => {
        fetch("http://localhost:5000/api/biodata")
            .then(res => res.json())
            .then(data => setBiodatas(data));
    }, []);

    const handleSearch = () => {
        const query = new URLSearchParams(filters).toString();

        fetch(`http://localhost:5000/api/biodata/search?${query}`)
            .then(res => res.json())
            .then(data => setBiodatas(data));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Search Biodata</h2>

            <div className="flex gap-3 mb-4">
                <input
                    type="number"
                    placeholder="Age"
                    className="border p-2"
                    onChange={(e) => setFilters({ ...filters, age: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Profession"
                    className="border p-2"
                    onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="District"
                    className="border p-2"
                    onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                />

                <button onClick={handleSearch} className="bg-green-600 text-white px-4">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {biodatas.map(item => (
                    <div key={item._id} className="border p-3 rounded">
                        <h3 className="font-bold">{item.name}</h3>
                        <p>{item.profession}</p>
                        <p>{item.district}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBiodata;