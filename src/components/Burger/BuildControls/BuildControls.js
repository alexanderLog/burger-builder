import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((cntrl) => {
      return (
        <BuildControl
          key={cntrl.label}
          label={cntrl.label}
          type={cntrl.type}
          disabled={props.disabled[cntrl.type]}
          added={() => props.ingredientAdded(cntrl.type)}
          removed={() => props.ingredientRemoved(cntrl.type)}
        />
      );
    })}
    <button
      disabled={!props.purchaseble}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
    </button>
  </div>
);

export default buildControls;
