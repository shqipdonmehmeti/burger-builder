import React from 'react'
import Auxx from '../../../../hoc/Auxx'
import Button from '../../../UI/Button/Button'

const orderSummary = (props) => {
    const orderSummaryIngredients = Object.keys(props.ingredients).map(igKey => {
    return <li key = {igKey}>
        <span style = {{textTransform : 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
    </li>
    })
    return (
<div>
        <p>Total price: <strong>{props.displayPrice.toFixed(2)}</strong></p>
    <p>Here are your ingredients:</p>
    <Auxx>
        <ul>
        {orderSummaryIngredients}
        </ul>
        <p>Continue to Checkout?</p>
        
        <Button btnType = "Success" clicked = {props.orderCancelled}>Cancel</Button>
        <Button btnType = "Danger" clicked = {props.orderContinued}>Continue</Button>
    </Auxx>
    
</div>
    )
}

export default orderSummary