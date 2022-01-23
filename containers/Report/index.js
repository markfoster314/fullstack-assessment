import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PercentageReport from "../../components/PercentageReport";
import TotalReport from "../../components/TotalReport";
import Wrapper from "./Wrapper";

/**
 *
 * Displays the total amount of money and percentage of money the user
 * spent on Bezos-related businesses
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function Report({ selectedEntities, companyTotals, loading }) {
  // means we don't have any data to visualize
  if (loading || companyTotals.size === 0) {
    return null;
  }

  /**
   * Total transactions for Bezos-related companies
   */
  let bezosTotal = 0;
  /**
   * Total transactions across the board
   */
  let total = 0;

  [...companyTotals.keys()].forEach((company) => {
    const val = companyTotals.get(company);
    if (selectedEntities.includes(company)) {
      bezosTotal += val;
    }
    total += val;
  });

  return (
    <Wrapper>
      <TotalReport
        total={Math.round(bezosTotal * 100 + Number.EPSILON) / 100}
      />
      <PercentageReport
        percentage={
          Math.round((bezosTotal / total) * 10000 + Number.EPSILON) / 100
        }
      />
    </Wrapper>
  );
}

Report.propTypes = {
  /**
   * Companies selected as Bezos related
   */
  selectedEntities: PropTypes.array,
  /**
   * Total transactions per company
   */
  companyTotals: PropTypes.any,
  /**
   * Are we currently pulling transaction data
   */
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  selectedEntities: state.main.selectedEntities,
  companyTotals: state.main.companyTotals,
  loading: state.main.loading,
});

export default connect(mapStateToProps)(Report);
