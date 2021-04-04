import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Header, Footer} from "../ui";
import { Home, About, Menu, DishDetail, Contact } from "../";
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

        const AboutUsPage = () => {
            return(
                <About
                    leaders={this.state.leaders}
                />
            );
        };

        const DishId = ({match}) => {
            return(
                <DishDetail

                    dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                    comments={this.state.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) }


                />
            );
        };

        return (
            <div>
                <Header/>

                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/aboutus" component={ AboutUsPage } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/> }/>
                    <Route path="/menu/:dishId" component={DishId} />
                    <Route exact path="/contactus" component={Contact } />
                    <Redirect to="/home" />
                </Switch>

                <Footer/>
            </div>
        );

    }

}

export default Main;
