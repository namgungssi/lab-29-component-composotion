import { combineReducers } from 'redux';


import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTION_GRID_FIELDS,
  REQUEST_SUM,
} from 'actions';


import {
  defaultTransactions,
  defaultTransactionGridFields,
  defaultSummary
} from './defaults';


/**
* add a new transaction.
* helper function for reducer
* @param {Object} state
* @param {Object} action
*/

function addTransaction(state, action) {
  const { description, value } = action.transaction;
  const newState = [...state, {
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +1,
    description: description,
    value: value
  }];

  return newState;
}


/**
* Main transaction reducer
* @param {Object} state Current state
* @param {Object} action Dispatched action
* @return {Object}       Default state
*/

function transactions(state=defaultTransactions, action) {
  let newState;
  switch (action.type) {
    case ADD_TRANSACTION:
      return addTransaction(state, action);

    case DELETE_TRANSACTION:
      newState = state.filter(todo => todo.id !== action.id);
      return newState;
    default:
      return state;
  }
}


/**
* Reserverd for future use.
* Intended for dynamic grid column setup
* @param {Object} state Current state
* @param {Object} action Dispatched action
* @param {Object}        Default state
*/

function summary(state=defaultSummary, action) {
  switch (action.type) {
    case REQUEST_SUM:
      let sum = action.data.reduce((prev, current) => {
        return {value: prev.value + current.value };
      });


      sum = {value: Math.round(sum.value * 100) / 100};

      return Object.assign({}, state, sum);
    default:
      return state;
  }
}


export default combineReducers({
  transactionsGrid,
  transactions,
  summary
});
