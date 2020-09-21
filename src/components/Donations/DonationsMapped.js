import React, {useState} from 'react';
import Checkout from './Checkout';



const DonationsMapped = (props) => {
    const [amount, setAmount] = useState(0);
    const {project} = props;
    return(
        
            <div className='project'>
                <div className='boxes'>
                    <div className='left'>
                        <img src={project.photo}/>
                        <p className='project-name'>{project.name.toUpperCase()}</p>
                    </div>
                    <div className='right'>
                        <p className='goal'>Fundraising Goal: ${project.donation_goal}</p>
                        <p className='pitch'>{project.donation_pitch}</p>
                        <div className='checkout'>
                            <input type='number' placeholder='Donation Amount' onChange={(e) => setAmount(e.target.value)}/>
                            <Checkout  amount={amount * 100} project_id={project.project_id} setAmount={setAmount}/>
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}

export default DonationsMapped;