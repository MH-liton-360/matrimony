const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-16 px-4">

            {/* Small Top Label */}
            {subHeading && (
                <p className="text-sm tracking-widest uppercase text-green-600 font-semibold mb-3">
                    {subHeading}
                </p>
            )}

            {/* Main Gradient Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold 
                bg-gradient-to-r from-yellow-500 via-orange-500 to-green-600 
                bg-clip-text text-transparent inline-block">

                ---{heading}---

            </h2>

        </div>
    );
};

export default SectionTitle;