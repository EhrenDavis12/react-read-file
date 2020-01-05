import React from "react";
import { withStore } from "./Store";

// /*
// Notes here TODO:
// */
// const withOnChange = WrappedComponent => {
//   const onChange = (resultName, valueChanged) => {
//     //store.set(resultName, valueChanged.currentTarget.value);
//     console.log(`ran with: ${resultName}: ${valueChanged.currentTarget.value}`);
//   };

//   return <WrappedComponent onChange={onChange} />;
// };

const withOnChange2 = WrappedComponent => {
  return class extends React.Component {
    onChange2 = (resultName, valueChanged) => {
      //what if i wanted a function that would decided what to pass to child.
      //store.set(resultName, valueChanged.currentTarget.value);
      debugger;
      console.log(
        `ran2 with: ${resultName}: ${valueChanged.currentTarget.value}`
      );
    };
    render() {
      return <WrappedComponent onChange2={this.onChange2} {...this.props} />;
    }
  };
};

const withOnChange = WrappedComponent => {
  return class extends React.Component {
    onChange = (resultName, valueChanged) => {
      //what if i wanted a function that would decided what to pass to child.
      //props.store.set(resultName, valueChanged.currentTarget.value);
      debugger;
      console.log(
        `ran with: ${resultName}: ${valueChanged.currentTarget.value}`
      );
    };

    render() {
      return <WrappedComponent onChange={this.onChange} {...this.props} />;
    }
  };
};

export { withOnChange, withOnChange2 };
