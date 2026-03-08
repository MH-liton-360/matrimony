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
        </section>
    );
};

export default Featured_Premium;