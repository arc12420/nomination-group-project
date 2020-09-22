import React, {useState, useEffect} from 'react';
import Checkout from './Checkout';
import axios from 'axios';
import './Progress.css';


const DonationsMapped = (props) => {
    const [amount, setAmount] = useState(0);
    // const [donations, setDonations] = useState([])
    const {project} = props;
    
    //progress bar
    // const [progress, setProgress] = useState(0)
    
    // const fiilterDonations = axios.get('/api/donations/total').then((response) => {
    //     console.log(response)

    //     const totals = response.data.map(donation => {donation.project_id === })
        
    // })




    return (
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
                        <div className="project__progress">
                            <div className="meter">
                                <span style={{width: `25%`, maxWidth: '100%'}}></span>
                                {/* {console.log(donations)} */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}

export default DonationsMapped;