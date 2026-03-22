import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../../context/AuthContext";

const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
const biodataTypes = ["Male", "Female"];
const maritalStatuses = ["Unmarried", "Divorced", "Widowed"];
const familyStatuses = ["Lower Middle Class", "Middle Class", "Upper Middle Class", "Rich"];
const familyTypes = ["Nuclear", "Joint"];

const CreateBiodata = () => {
    const { user } = useContext(AuthContext);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        biodataType: "", profileImage: "", dateOfBirth: "", age: "",
        height: "", weight: "", maritalStatus: "", profession: "", monthlyIncome: "",
        fatherName: "", motherName: "", fatherProfession: "", motherProfession: "",
        familyStatus: "", familyType: "", division: "", district: "",
        presentAddress: "", permanentAddress: "", highestEducation: "",
        institutionName: "", passingYear: "", aboutMe: "",
        expectedAge: "", expectedHeight: "", expectedEducation: "",
        expectedDistrict: "", expectedProfession: "", partnerPreferences: "",
    });

    // Age auto-calc
    useEffect(() => {
        if (!formData.dateOfBirth) return setFormData(prev => ({ ...prev, age: "" }));
        const birthDate = new Date(formData.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
        setFormData(prev => ({ ...prev, age: age > 0 ? age : "" }));
    }, [formData.dateOfBirth]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = e => {
        e.preventDefault();
        const biodataInfo = { ...formData, name: user?.displayName || "", email: user?.email || "" };
        console.log(biodataInfo);
    }

    // Progress calculation
    const progress = (step / 5) * 100;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Create Biodata</h2>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 text-right">{step} / 5</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold">Basic Information</h3>
                            <select name="biodataType" value={formData.biodataType} onChange={handleChange} required className="w-full border p-2 rounded">
                                <option value="">Select Type</option>
                                {biodataTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} placeholder="Profile Image URL" className="w-full border p-2 rounded" />
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full border p-2 rounded" />
                            <input type="number" name="age" value={formData.age} readOnly className="w-full border p-2 rounded bg-gray-100" />
                            <input type="text" name="height" value={formData.height} onChange={handleChange} placeholder="Height" className="w-full border p-2 rounded" />
                            <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" className="w-full border p-2 rounded" />
                        </div>
                    )}

                    {/* Step 2: Family Info */}
                    {step === 2 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold">Family Information</h3>
                            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father Name" className="w-full border p-2 rounded" />
                            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother Name" className="w-full border p-2 rounded" />
                            <input type="text" name="fatherProfession" value={formData.fatherProfession} onChange={handleChange} placeholder="Father Profession" className="w-full border p-2 rounded" />
                            <input type="text" name="motherProfession" value={formData.motherProfession} onChange={handleChange} placeholder="Mother Profession" className="w-full border p-2 rounded" />
                            <select name="familyStatus" value={formData.familyStatus} onChange={handleChange} className="w-full border p-2 rounded">
                                <option value="">Family Status</option>
                                {familyStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <select name="familyType" value={formData.familyType} onChange={handleChange} className="w-full border p-2 rounded">
                                <option value="">Family Type</option>
                                {familyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    )}

                    {/* Step 3: Address Info */}
                    {step === 3 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold">Address Information</h3>
                            <select name="division" value={formData.division} onChange={handleChange} className="w-full border p-2 rounded">
                                <option value="">Division</option>
                                {divisions.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                            <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="w-full border p-2 rounded" />
                            <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Present Address" className="w-full border p-2 rounded" />
                            <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className="w-full border p-2 rounded" />
                        </div>
                    )}

                    {/* Step 4: Education & About Me */}
                    {step === 4 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold">Education & About Me</h3>
                            <input type="text" name="highestEducation" value={formData.highestEducation} onChange={handleChange} placeholder="Highest Education" className="w-full border p-2 rounded" />
                            <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} placeholder="Institution Name" className="w-full border p-2 rounded" />
                            <input type="text" name="passingYear" value={formData.passingYear} onChange={handleChange} placeholder="Passing Year" className="w-full border p-2 rounded" />
                            <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChange} rows="4" placeholder="About Me" className="w-full border p-2 rounded" />
                        </div>
                    )}

                    {/* Step 5: Partner Preferences */}
                    {step === 5 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold">Partner Preferences</h3>
                            <input type="text" name="expectedAge" value={formData.expectedAge} onChange={handleChange} placeholder="Expected Age" className="w-full border p-2 rounded" />
                            <input type="text" name="expectedHeight" value={formData.expectedHeight} onChange={handleChange} placeholder="Expected Height" className="w-full border p-2 rounded" />
                            <input type="text" name="expectedEducation" value={formData.expectedEducation} onChange={handleChange} placeholder="Expected Education" className="w-full border p-2 rounded" />
                            <input type="text" name="expectedDistrict" value={formData.expectedDistrict} onChange={handleChange} placeholder="Expected District" className="w-full border p-2 rounded" />
                            <input type="text" name="expectedProfession" value={formData.expectedProfession} onChange={handleChange} placeholder="Expected Profession" className="w-full border p-2 rounded" />
                            <textarea name="partnerPreferences" value={formData.partnerPreferences} onChange={handleChange} rows="3" placeholder="Partner Preferences" className="w-full border p-2 rounded" />
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        {step > 1 && <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Previous</button>}
                        {step < 5 && <button type="button" onClick={nextStep} className="bg-black text-white px-4 py-2 rounded">Next</button>}
                        {step === 5 && <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBiodata;