import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import List from "../../components/List";
import ListItem from "../../components/ListItem";
import LoadingIndicator from "../../components/LoadingIndicator";
import TransactionListItem from "../TransactionListItem";

/**
 *
 * Highest level component for our transaction list. Displays appropriate
 * component based on the application state
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function TransactionsList({ loading, error, transactions }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (transactions !== false) {
    return <List items={transactions} component={TransactionListItem} />;
  }

  return null;
}

TransactionsList.propTypes = {
  /**
   * Are we currently pulling transaction data
   */
  loading: PropTypes.bool,
  /**
   * Error when pulling transaction data
   */
  error: PropTypes.any,
  /**
   * User's transaction data, array of objects with the following schema:
   */
  transactions: PropTypes.any,
};

const mapStateToProps = (state) => ({
  loading: state.main.loading,
  error: state.main.error,
  transactions: state.main.transactions,
});

export default connect(mapStateToProps)(TransactionsList);
