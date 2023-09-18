
import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {

    

    return (
        <div>
            <ul className='flex gap-2 items-center'>
            <AiFillCheckCircle></AiFillCheckCircle>
                <li>{feature}</li>
            </ul>
            
        </div>
    );
};

export default Feature;