

const Story = ({ story }) => {
    const { description } = story;

    return (

        <div className="card border-2">
            <p>Description: {description}</p>
        </div>
    );
};

export default Story;