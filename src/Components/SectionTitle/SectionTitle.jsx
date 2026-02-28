
const SectionTitle = ({ heading }) => {   //Here heading is props;
    return (
        <div className="p-10">
            <p className="text-2xl font-semibold text-amber-900 text-center pt-10">{heading}</p>
        </div>
    );
};

export default SectionTitle;