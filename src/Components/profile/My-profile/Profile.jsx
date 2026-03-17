const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">

                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/4pDNDk1/avatar.png"
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400"
                        />
                        <button className="absolute bottom-0 right-0 bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition">
                            Change
                        </button>
                    </div>

                    {/* Basic Info */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold">John Doe</h2>
                        <p className="text-gray-600">john@email.com</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                            Premium Member
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-6"></div>

                {/* Biodata Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Biodata</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-500 text-sm">Age</p>
                            <p className="font-semibold">25</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-500 text-sm">Gender</p>
                            <p className="font-semibold">Male</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-500 text-sm">Religion</p>
                            <p className="font-semibold">Islam</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-500 text-sm">Location</p>
                            <p className="font-semibold">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm mb-1">About Me</p>
                        <p>
                            I am a simple and family-oriented person looking for a life partner who is caring and understanding.
                        </p>
                    </div>
                </div>

                {/* Edit Button */}
                <div className="mt-6 text-center">
                    <button className="btn btn-primary px-8">
                        Edit Profile
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;