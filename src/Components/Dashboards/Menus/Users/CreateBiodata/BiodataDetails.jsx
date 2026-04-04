import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BiodataDetails = () => {
    const { id } = useParams(); // URL theke id neya
    const [biodata, setBiodata] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/biodata/${id}`)
            .then(res => res.json())
            .then(data => setBiodata(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!biodata) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{biodata.name}</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={biodata.profileImage}
                    alt={biodata.name}
                    className="w-full md:w-1/3 h-72 object-cover rounded-md"
                />

                <div className="flex-1 space-y-2">
                    <p><strong>Profession:</strong> {biodata.profession}</p>
                    <p><strong>Age:</strong> {biodata.age}</p>
                    <p><strong>Marital Status:</strong> {biodata.maritalStatus}</p>
                    <p><strong>About:</strong> {biodata.aboutMe}</p>
                    <p><strong>Location:</strong> {biodata.district}, {biodata.country}</p>
                    <p><strong>Family Status:</strong> {biodata.familyStatus}</p>
                    <p><strong>Education:</strong> {biodata.highestEducation}</p>
                    <p><strong>Expected Partner:</strong> {biodata.partnerPreferences}</p>
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;