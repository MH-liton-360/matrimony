import SectionTitle from "../SectionTitle/SectionTitle";
import couple1 from "../../../assets/Safety_&_privacy/couple-01.png"

const Safety_and_Privacy = () => {
    return (
        <div>
            <SectionTitle
                heading={"Safety & Privacy"}
            ></SectionTitle>


            <div className="bg">
                <img src={couple1} alt="" />
            </div>

            <div>

            </div>
        </div>
    );
};

export default Safety_and_Privacy;