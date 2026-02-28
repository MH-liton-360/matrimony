
const SectionTitle = ({ heading }) => {   //Here heading is props;
    return (
        <div className="mx-auto p-10 md:w-5/12">
            <p className="text-3xl font-semibold text-amber-900 uppercase text-center p-1 pt-6 border-b-2">{heading}</p>
        </div>
    );
};

export default SectionTitle;