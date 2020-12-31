import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Checkout extends React.Component {
    onCheckoutCancelHandler = () => {
        this.props.history.goBack();
    };

    onCheckoutContinueHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        let summary = <Redirect to="/"/>

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div> {purchasedRedirect}
                    <CheckoutSummary ingredients={
                            this.props.ings
                        }
                        checkoutCancelled={
                            this.onCheckoutCancelHandler
                        }
                        checkoutContinued={
                            this.onCheckoutContinueHandler
                        }/>
                    <Route path={
                            this.props.match.path + "/contact-data"
                        }
                        component={ContactData}/>
                </div>
            );
        }

        return (
            <div> {summary} </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {ings: state.burgerBuilder.ingredients, purchased: state.orders.purchased};
};


export default connect(mapStateToProps)(Checkout);
