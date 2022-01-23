import * as t from "../types";

const main = (
  state = {
    /**
     * Are we currently pulling transaction data
     */
    loading: true,
    /**
     * Error when pulling transaction data
     */
    error: false,
    /**
     * User's transaction data, array of objects with the following schema:
     *
     * {
     *   amount: Number,
     *   category: Array of Strings,
     *   date: String,
     *   merchant_name: String,
     *   id: Integer
     * }
     */
    transactions: [],
    /**
     * Companies selected as Bezos related
     */
    selectedEntities: [
      "Amazon",
      "Washington Post",
      "Whole Foods",
      "Blue Origin",
    ],
    /**
     * Total transactions per company
     */
    companyTotals: {},
  },
  action
) => {
  switch (action.type) {
    case t.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case t.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case t.UPDATE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.sort((a, b) =>
          Date.parse(a.date) > Date.parse(b.date) ? -1 : 1
        ),
      };
    case t.ADD_ENTITY:
      return {
        ...state,
        selectedEntities: state.selectedEntities.concat(action.payload),
      };
    case t.REMOVE_ENTITY:
      return {
        ...state,
        selectedEntities: state.selectedEntities.filter(
          (e) => e !== action.payload
        ),
      };
    case t.UPDATE_COMPANY_TOTALS:
      return {
        ...state,
        companyTotals: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
