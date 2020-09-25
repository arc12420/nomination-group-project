import React, {useState, useEffect} from 'react';
import Checkout from './Checkout';
import axios from 'axios';
import './Progress.css';


const DonationsMapped = (props) => {
    const [amount, setAmount] = useState(0);
    const {project} = props;
    
    
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    useEffect(() => {
        axios.get(`/api/donations/${project.project_id}`)
        .then(response => {
            const resTotals = response.data.map(x => x.total).reduce((donation, donationTotal) => donation + donationTotal, 0);
            const donationOffset = (resTotals / 100)
            setProgressBarWidth(donationOffset)
            
        }).catch(err => console.log(err))
    }, [])




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
                            <Checkout  amount={amount * 100} project_id={project.project_id} project_name={project.name}/>
                        </div>
                        <div className="project__progress">
                          
                                <div className="meter__info">
                                    <p>
                                        ${progressBarWidth} raised so far!
                                    </p>
                                </div>
                            <div className="meter">
                                <span style={{width: `${(progressBarWidth/project.donation_goal)*100}%`, maxWidth: '100%'}}></span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}

export default DonationsMapped;