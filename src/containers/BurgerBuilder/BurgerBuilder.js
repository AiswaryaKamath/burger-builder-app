import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    
    state = {
        ingredient : {
            salad:4,
            bacon:2,
            cheese:3,
            meat:1
        }
    }

    render() {
        return ( 
        <Auxiliary>
            <Burger ingredients={this.state.ingredient}/>
            <div>Burger Controls</div>
        </Auxiliary>

    )}
}


export default BurgerBuilder;