"use client"
/**
 * The ReduxProvider component is a wrapper that provides the Redux store to its children components.
 * @param {props}  - The above code is a React component called "ReduxProvider" that wraps the children
 * components with the Redux Provider component.
 * @returns The ReduxProvider component is returning the Provider component from the react-redux
 * library, which wraps around the children components and provides access to the Redux store.
 */
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

type props = {
    children: React.ReactNode;
}

export function ReduxProvider({children}: props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}