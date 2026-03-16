// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../../context/AuthContext";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../../../firebase/Firebase.config";

const Profile = () => {
    // const { user } = useContext(AuthContext);
    // const [biodata, setBiodata] = useState({});
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (!user) return;

    //     const fetchBiodata = async () => {
    //         const docRef = doc(db, "users", user.uid);
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.exists()) {
    //             setBiodata(docSnap.data());
    //         }
    //         setLoading(false);
    //     };

    //     fetchBiodata();
    // }, [user]);

    // if (loading) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>

            <div className="flex gap-4 items-center">
                <img
                    src={user?.photoURL || "/defaultAvatar.png"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user.displayName}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold">Biodata</h3>
                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(biodata, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Profile;