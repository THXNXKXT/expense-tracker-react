import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Salary", amount: 2000 },
    { id: 2, text: "Over Time", amount: 600 },
    { id: 3, text: "Coffee", amount: -5 },
    { id: 4, text: "Book", amount: -15 },
    { id: 5, text: "Phone", amount: -800 },
    { id: 6, text: "Headphones", amount: -50 },
    { id: 7, text: "Gift Card", amount: 30 },
    { id: 8, text: "Shoes", amount: -40 },
    { id: 9, text: "Restaurant", amount: -60 },
    { id: 10, text: "Desk", amount: -120 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
