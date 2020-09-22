import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addDonation} from '../../redux/reducer';


const Checkout = (props) => {
    const state = useSelector(r => r);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const onToken = async(token) => {
        token.card = void 0;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        await axios.post('/api/payment', {token, amount: props.amount, user_id: state.user.user_id, project_id: props.project_id, date: today, project_name: props.project_name})
        .then(res => {
            console.log(res.data[0])
            dispatch(addDonation(res.data[0]))
            console.log(state)
            console.log(props)
            history.push('/thanks');

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