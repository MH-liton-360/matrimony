import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Featured_Premium = () => {

    //  state e data rakha hobe
    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        // backend theke data ana
        fetch('http://localhost:5000/api/biodata')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setBiodatas(data.slice(0, 4));
            })
    }, []);

    return (
        <section>
            <SectionTitle
                heading={
                    <>
                        <span className="font-semibold text-white ">Featured</span> Premium Numbers
                    </>
                }
                className="text-center text-4xl"
            />

            {/*  grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/*  dynamic map */}
                {biodatas.map(item => (

                    <div key={item._id} className="bg-white rounded-lg shadow-md p-4">

                        {/*  image */}
                        <div className="h-32 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                            <img
                                src={item.profileImage}
                                alt=""
                                className="h-full w-full object-cover rounded-md"
                            />
                        </div>

                        {/*  name + profession */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {item.profession}
                            </p>
                        </div>

                        {/*  about */}
                        <p className="text-xs text-gray-500 mt-2">
                            {item.aboutMe?.slice(0, 40)}...
                        </p>

                        {/*  location */}
                        <p className="text-xs text-gray-500 mt-1">
                            📍 {item.district}, {item.country}
                        </p>

                        {/*  button */}
                        <button
                            onClick={() => {
                                //  details page e jawar jonno (later use)
                                console.log(item._id);
                            }}
                            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        >
                            View Profile
                        </button>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Featured_Premium;