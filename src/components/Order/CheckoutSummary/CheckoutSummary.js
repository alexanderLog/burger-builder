import React from "react";
import Burger from "../../Burger/Burger";
import Buttom from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummaryComponent = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tests well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Buttom clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Buttom>
      <Buttom clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Buttom>
    </div>
  );
};

export default checkoutSummaryComponent;
