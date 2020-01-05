/*
Note I got this off the internet and have had it for some time 
that I no longer know where I got this from.
Thank you to the person who made this!!!
*/

import React from "react";
const StoreContext = React.createContext();
const createStore = WrappedComponent => {
  return class extends React.Component {
    state = {
      get: key => {
        return this.state[key];
      },
      set: (key, value) => {
        const state = this.state;
        state[key] = value;
        this.setState(state);
      },
      remove: key => {
        const state = this.state;
        delete state[key];
        this.setState(state);
      }
    };
    render() {
      return (
        <StoreContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      );
    }
  };
};
const withStore = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <StoreContext.Consumer>
          {context => <WrappedComponent store={context} {...this.props} />}
        </StoreContext.Consumer>
      );
    }
  };
};
export { createStore, withStore };
