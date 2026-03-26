import { useState } from "react";

const UserSetting = () => {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile updated:", profile);
        // Backend call can be added here later
    };

    return (
        <div className="p-6 bg-white min-h-screen text-black">
            <h1 className="text-2xl font-bold mb-6">User Settings</h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-md bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
            >
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 bg-white text-black"
                    />
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 bg-white text-black"
                    />
                </div>

                <div>
                    <label className="block mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 bg-white text-black"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UserSetting;