import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElemenet = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElemenet = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElemenet = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElemenet = (
        <select
          onChange={props.changed}
          className={inputClasses.join(" ")}
          value={props.value}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElemenet = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  let validationError = null;

  if (props.invalid && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>{props.errorMessage}</p>
    );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElemenet}
      {validationError}
    </div>
  );
};

export default input;
