
import { use } from 'react';
import Story from './Story';

const Success_Story = ({ storyPromise }) => {
    const success_Story = use(storyPromise);
    console.log(success_Story);

    return (

        <div className="card">
            <h3>success_Story:{success_Story.length} </h3>
            {
                success_Story.map(story => <Story story={story}></Story>)
            }
        </div>

    );
};

export default Success_Story;