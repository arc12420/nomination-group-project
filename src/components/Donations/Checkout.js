import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


const Checkout = (props) => {
    const state = useSelector(r => r);
    const history = useHistory();
    
    const onToken = async(token) => {
        token.card = void 0;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        await axios.post('/api/payment', {token, amount: props.amount, user_id: state.user.user_id, project_id: props.project_id ,date: today})
        .then(res => {
            props.setAmount(0);
            alert('Payment Complete! You will receive an email receipt shortly.')
            console.log(res.data)
            history.push('/');

        })
    }

    
    return(
            <div className='stripe'>
                <StripeCheckout 
                    label="Proceed to Payment"
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    amount={props.amount}
                    />
            </div>
        )
    
}

export default Checkout;