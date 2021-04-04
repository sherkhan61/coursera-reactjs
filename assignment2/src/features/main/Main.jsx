import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Header, Footer} from "../ui";
import {Home} from "../";
import { COMMENTS, DISHES, LEADERS, PROMOTIONS } from '../../lib/store/store'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: COMMENTS,
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    dish={ this.state.dishes.filter( (dish)=>dish.featured )[0] }
                    promotion={this.state.promotions.filter( (promotion)=>promotion.featured )[0] }
                    leader={this.state.leaders.filter( (leader)=>leader.featured )[0] }
                />
            );
        };

        return (
            <div>
                <Header/>

                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Redirect to="/home" />
                </Switch>

                <Footer/>
            </div>
        );

    }

}

export default Main;
