import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../context/AuthContext";

const divisions = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
];

const biodataTypes = ["Male", "Female"];
const maritalStatuses = ["Unmarried", "Divorced", "Widowed"];
const familyStatuses = [
    "Lower Middle Class",
    "Middle Class",
    "Upper Middle Class",
    "Rich",
];
const familyTypes = ["Nuclear", "Joint"];

const CreateBiodata = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        biodataType: "",
        profileImage: "",
        dateOfBirth: "",
        age: "",
        height: "",
        weight: "",
        maritalStatus: "",
        profession: "",
        monthlyIncome: "",
        fatherName: "",
        motherName: "",
        fatherProfession: "",
        motherProfession: "",
        familyStatus: "",
        familyType: "",
        division: "",
        district: "",
        presentAddress: "",
        permanentAddress: "",
        highestEducation: "",
        institutionName: "",
        passingYear: "",
        aboutMe: "",
        expectedAge: "",
        expectedHeight: "",
        expectedEducation: "",
        expectedDistrict: "",
        expectedProfession: "",
        partnerPreferences: "",
    });

    useEffect(() => {
        if (!formData.dateOfBirth) {
            setFormData((prev) => ({ ...prev, age: "" }));
            return;
        }

        const birthDate = new Date(formData.dateOfBirth);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        setFormData((prev) => ({
            ...prev,
            age: age > 0 ? age : "",
        }));
    }, [formData.dateOfBirth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const biodataInfo = {
            ...formData,
            name: user?.displayName || "",
            email: user?.email || "",
        };

        console.log(biodataInfo);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <div className="bg-black rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
                <h2 className="text-3xl font-bold text-center mb-2">Create Biodata</h2>
                <p className="text-center text-gray-500 mb-8">
                    Fill in your biodata information carefully
                </p>

                <form onSubmit={handleSubmit} className="space-y-10">
                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Account Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    value={user?.displayName || ""}
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-100 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-100 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Basic Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Biodata Type</label>
                                <select
                                    name="biodataType"
                                    value={formData.biodataType}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                >
                                    <option value="">Select Type</option>
                                    {biodataTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Profile Image URL</label>
                                <input
                                    type="text"
                                    name="profileImage"
                                    value={formData.profileImage}
                                    onChange={handleChange}
                                    placeholder="Enter profile image URL"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-100 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Height</label>
                                <input
                                    type="text"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    placeholder={`e.g. 5'6"`}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Weight</label>
                                <input
                                    type="text"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Enter weight"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Marital Status</label>
                                <select
                                    name="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                >
                                    <option value="">Select Status</option>
                                    {maritalStatuses.map((status) => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Profession</label>
                                <input
                                    type="text"
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    placeholder="Enter profession"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Monthly Income</label>
                                <input
                                    type="text"
                                    name="monthlyIncome"
                                    value={formData.monthlyIncome}
                                    onChange={handleChange}
                                    placeholder="Enter monthly income"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Family Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Father Name</label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    placeholder="Enter father name"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Mother Name</label>
                                <input
                                    type="text"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    placeholder="Enter mother name"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Father Profession</label>
                                <input
                                    type="text"
                                    name="fatherProfession"
                                    value={formData.fatherProfession}
                                    onChange={handleChange}
                                    placeholder="Enter father profession"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Mother Profession</label>
                                <input
                                    type="text"
                                    name="motherProfession"
                                    value={formData.motherProfession}
                                    onChange={handleChange}
                                    placeholder="Enter mother profession"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Family Status</label>
                                <select
                                    name="familyStatus"
                                    value={formData.familyStatus}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                >
                                    <option value="">Select Family Status</option>
                                    {familyStatuses.map((status) => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Family Type</label>
                                <select
                                    name="familyType"
                                    value={formData.familyType}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                >
                                    <option value="">Select Family Type</option>
                                    {familyTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Address Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Division</label>
                                <select
                                    name="division"
                                    value={formData.division}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                >
                                    <option value="">Select Division</option>
                                    {divisions.map((division) => (
                                        <option key={division} value={division}>
                                            {division}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">District</label>
                                <input
                                    type="text"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    placeholder="Enter district"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Present Address</label>
                                <input
                                    type="text"
                                    name="presentAddress"
                                    value={formData.presentAddress}
                                    onChange={handleChange}
                                    placeholder="Enter present address"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Permanent Address</label>
                                <input
                                    type="text"
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleChange}
                                    placeholder="Enter permanent address"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Education Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Highest Education</label>
                                <input
                                    type="text"
                                    name="highestEducation"
                                    value={formData.highestEducation}
                                    onChange={handleChange}
                                    placeholder="Enter highest education"
                                    required
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Institution Name</label>
                                <input
                                    type="text"
                                    name="institutionName"
                                    value={formData.institutionName}
                                    onChange={handleChange}
                                    placeholder="Enter institution name"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Passing Year</label>
                                <input
                                    type="text"
                                    name="passingYear"
                                    value={formData.passingYear}
                                    onChange={handleChange}
                                    placeholder="Enter passing year"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            About Me
                        </h3>
                        <textarea
                            name="aboutMe"
                            value={formData.aboutMe}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Write something about yourself"
                            required
                            className="w-full border rounded-lg px-4 py-3 outline-none"
                        />
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            Expected Partner Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-1 font-medium">Expected Age</label>
                                <input
                                    type="text"
                                    name="expectedAge"
                                    value={formData.expectedAge}
                                    onChange={handleChange}
                                    placeholder="Enter expected age"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Expected Height</label>
                                <input
                                    type="text"
                                    name="expectedHeight"
                                    value={formData.expectedHeight}
                                    onChange={handleChange}
                                    placeholder="Enter expected height"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Expected Education</label>
                                <input
                                    type="text"
                                    name="expectedEducation"
                                    value={formData.expectedEducation}
                                    onChange={handleChange}
                                    placeholder="Enter expected education"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Expected District</label>
                                <input
                                    type="text"
                                    name="expectedDistrict"
                                    value={formData.expectedDistrict}
                                    onChange={handleChange}
                                    placeholder="Enter expected district"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Expected Profession</label>
                                <input
                                    type="text"
                                    name="expectedProfession"
                                    value={formData.expectedProfession}
                                    onChange={handleChange}
                                    placeholder="Enter expected profession"
                                    className="w-full border rounded-lg px-4 py-2.5 outline-none"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="block mb-1 font-medium">Partner Preferences</label>
                            <textarea
                                name="partnerPreferences"
                                value={formData.partnerPreferences}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Describe your expected partner"
                                className="w-full border rounded-lg px-4 py-3 outline-none"
                            />
                        </div>
                    </section>

                    <div className="text-center pt-2">
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
                        >
                            Submit Biodata
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBiodata;