import React, { Component } from 'react'
import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.5,
    bacon: 0.8
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0, 
            cheese: 0, 
            salad: 0, 
            bacon: 0 
        },
        totalPrice: 0,
        purchasable : false,
        purchasing : false
    }

    updatePurchase = (ingredients) => {

        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey]
        }).reduce((prev, el)=>{
            return prev + el
        },0)

        this.setState({purchasable: sum > 0})
        }

    

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newTotalPrice = oldPrice + priceAddition
        this.setState({
            ingredients:updatedIngredients,
            totalPrice: newTotalPrice
        })
        this.updatePurchase(updatedIngredients)
    }

        removeIngredient = (type) => {
            const oldCount = this.state.ingredients[type]
            if (oldCount <= 0) {
                return;
            }
            const newCount = oldCount - 1
            const updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = newCount
            const priceDeduction = INGREDIENT_PRICES[type]
            const oldPrice = this.state.totalPrice
            const newTotalPrice = oldPrice - priceDeduction
            this.setState({
                ingredients:updatedIngredients,
                totalPrice: newTotalPrice
            })
            this.updatePurchase(updatedIngredients)

            
    }

    purchaseHandler = () => {
        this.setState({
            purchasing : true
        })
    }

    purchaseClosedHandler = () => {
        this.setState({
            purchasing : false
        })
    }

    purchaseContinuedHandler = () => {
        alert("You continued!")
    }
render() {

    const disabledInfo = {
        ...this.state.ingredients
    }

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
        
    }
    return(
        <Auxx>
            <Modal show = {this.state.purchasing} modalClosed = {this.purchaseClosedHandler}>
                <OrderSummary ingredients={this.state.ingredients} 
                orderCancelled = {this.purchaseClosedHandler}
                orderContinued = {this.purchaseContinuedHandler}
                displayPrice={this.state.totalPrice}
                />
            </Modal>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls ingredientsAdded={this.addIngredient} 
            ingredientsRemoved={this.removeIngredient}
            disabled={disabledInfo}
            displayPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            ></BuildControls>
            

        </Auxx>
    );
}
}

export default BurgerBuilder;