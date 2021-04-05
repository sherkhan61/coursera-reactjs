import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {Header, Footer} from "../ui";
import { Home, About, Menu, DishDetail, Contact } from "./";
import {connect} from "react-redux";




const mapStateToProps = state => {

    return {
        comments: state.comments,
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
    }
}



class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    dish={ this.props.dishes.filter( (dish)=>dish.featured )[0] }
                    promotion={this.props.promotions.filter( (promotion)=>promotion.featured )[0] }
                    leader={this.props.leaders.filter( (leader)=>leader.featured )[0] }
                />
            );
        };

        const AboutUsPage = () => {
            return(
                <About
                    leaders={this.props.leaders}
                />
            );
        };


        const DishId = ({match}) => {
            return(
                <DishDetail

                    dish={this.props.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                    comments={this.props.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) }


                />
            );
        };

        return (
            <div>
                <Header/>

                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/aboutus" component={ AboutUsPage } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>
                    <Route path="/menu/:dishId" component={DishId} />
                    <Route exact path="/contactus" component={Contact } />
                    <Redirect to="/home" />
                </Switch>

                <Footer/>
            </div>
        );

    }

}

export default withRouter(connect(mapStateToProps)(Main));
