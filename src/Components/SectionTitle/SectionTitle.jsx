
const SectionTitle = ({ heading }) => {   //Here heading is props;
    return (
        <div className="mx-auto p-10 md:w-5/12">
            <p className="text-4xl font-bold text-center p-1 pt-6 border-b-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                ---{heading}---
            </p>
        </div>
    );
};

export default SectionTitle;