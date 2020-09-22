import React from 'react';
import {useSelector} from 'react-redux';


const ThankYou = () => {
    const state = useSelector(r => r);
    console.log(state.donation);

    return(
        <div className='thanks'>
            <h1>Thank you for your generous donation! </h1>
            <p>You'll receive an emailed receipt shortly.</p>
            
            <p>{(state.donation.date).slice(0, 10)}</p>
            <p>{state.donation.project_name}</p>
            <p>${state.donation.total}</p>
            

        </div>
    )
}

export default ThankYou;
