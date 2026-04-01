import SectionTitle from "../SectionTitle/SectionTitle";

const Featured_Premium = () => {
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


            <div className="bg-white rounded-lg shadow-md p-4 w-64">
                {/* Image placeholder */}
                <div className="h-32 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                </div>

                {/* Name & Title */}
                <h2 className="text-lg font-semibold text-gray-800">Seheba Khan</h2>
                <p className="text-sm text-gray-600">Fieldder</p>

                {/* Description */}
                <p className="text-xs text-gray-500 mt-2">Introducer Fielders</p>

                {/* Location */}
                <p className="text-xs text-gray-500 mt-1">📍 Dhaka, Bangladesh</p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-2 text-xs text-gray-600">18 items</span>
                </div>

                {/* Button */}
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                    View Profile
                </button>
            </div>
        </section>
    );
};

export default Featured_Premium;