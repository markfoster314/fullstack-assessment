import * as t from "../types";

/**
 *
 * Creates a Map containing transaction totals for each company
 *
 * @param   {Array}  transactions User Transactions
 * @return  {Map}                 Transaction totals by company
 *
 */
function calculateTotals(transactions) {
  var totalMap = new Map();
  transactions.forEach((transaction) => {
    var total = transaction.amount;
    if (totalMap.has(transaction.merchant_name)) {
      total += totalMap.get(transaction.merchant_name);
    }
    totalMap.set(
      transaction.merchant_name,
      Math.round(total * 100 + Number.EPSILON) / 100
    );
  });
  return totalMap;
}

/**
 *
 * Initializes transaction data
 *
 */
export const initTransactions = () => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const apiResponse = await fetch(
      // "https://61b3dea5af5ff70017ca20bf.mockapi.io/transactions"
      "https://61ecac49f3011500174d21d7.mockapi.io/transactions"
    );

    const transactions = await apiResponse.json();

    dispatch({
      type: t.UPDATE_TRANSACTIONS,
      payload: transactions,
    });
    dispatch({
      type: t.UPDATE_COMPANY_TOTALS,
      payload: calculateTotals(transactions),
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: false,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: error,
    });
  }
};

/**
 *
 * Checks to see if any transactions were added. Updates the redux store if new
 * transactions are found
 *
 * @param   {Array}  prevTransactions Last polled user transaction data
 *
 */
export const pollTransactions = (prevTransactions) => async (dispatch) => {
  try {
    const apiResponse = await fetch(
      // "https://61b3dea5af5ff70017ca20bf.mockapi.io/transactions"
      "https://61ecac49f3011500174d21d7.mockapi.io/transactions"
    );

    const transactions = await apiResponse.json();

    // transactions are immutable, so either there are more transactions
    // than previous or there wasn't an update
    if (transactions.length > prevTransactions.length) {
      dispatch({
        type: t.UPDATE_TRANSACTIONS,
        payload: transactions,
      });
      dispatch({
        type: t.UPDATE_COMPANY_TOTALS,
        payload: calculateTotals(transactions),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * Adds company to our store of selected entities
 *
 * @param   {String}  name  Company name
 *
 */
export const addEntity = (name) => (dispatch) =>
  dispatch({
    type: t.ADD_ENTITY,
    payload: name,
  });

/**
 *
 * Removes company from our store of selected entities
 *
 * @param   {String}  name  Company name
 *
 */
export const removeEntity = (name) => (dispatch) =>
  dispatch({
    type: t.REMOVE_ENTITY,
    payload: name,
  });
