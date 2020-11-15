import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'},
    {label: 'Bacon' , type: 'bacon'},

]
const buildControls = (props) => (
   
    <div className ={styles.BuildControls}>
        <p>Total price: <strong>{props.displayPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (  
          <BuildControl  
          label = {ctrl.label} 
          key = {ctrl.label} 
          added = {() => props.ingredientsAdded(ctrl.type)}
          removed = {()=> props.ingredientsRemoved(ctrl.type)}
          disabled = {props.disabled[ctrl.type]}
          />
        ))}
        <button className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >Order Now</button>
    </div>

    )
export default buildControls;