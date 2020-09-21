import React, {useState} from 'react';
import Checkout from './Checkout';



const DonationsMapped = (props) => {
    const [amount, setAmount] = useState(0);
    const {project} = props;
    return(
        
            <div className='project'>
                <p>{project.name}</p>
                <p>${project.donation_goal}</p>
                <p>{project.donation_pitch}</p>
                <input type='number' placeholder='Donation Amount' onChange={(e) => setAmount(e.target.value)}/>
                <Checkout amount={amount * 100} project_id={project.project_id} setAmount={setAmount}/>
            </div>
        
    )
}

export default DonationsMapped;