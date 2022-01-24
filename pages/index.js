import { useEffect } from "react";
import { connect } from "react-redux";
import { initTransactions, pollTransactions } from "../redux/actions/main";
import styled from "styled-components";
import PropTypes from "prop-types";

import TransactionsList from "../containers/TransactionsList";
import Report from "../containers/Report";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageContainer = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
`;

const Section = styled.div`
  padding: 4rem 6rem;
  @media (max-width: 700px) {
    padding: 4rem;
  }
  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

const Transactions = styled.h1`
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
`;

const Subheader = styled.h3`
  color: #81afdd;
`;

const ReportHeader = styled.h1`
  color: #81afdd;
  font-size: 42px;
`;

/**
 *
 * Homepage for our application. Initializes transaction data, polls for
 * updates to transaction data, and handles highest level structuring for
 * our components
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function Home({ transactions, initTransactions, pollTransactions }) {
  // we poll api every 10 seconds to check for updates
  const RELOAD_MS = 10000;

  useEffect(() => {
    initTransactions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (transactions.length > 0) {
        // start polling after initialization
        pollTransactions(transactions);
      }
    }, RELOAD_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  return (
    <PageContainer>
      <Navbar />
      <Section style={{ paddingTop: "0px" }}>
        <Transactions id="transactions">
          Your Transactions for <br /> the Month of January
        </Transactions>
        <Subheader>Select all Bezos-related Companies</Subheader>
        <TransactionsList />
      </Section>
      <Section>
        <ReportHeader id="report">The Jeff Bezos Report</ReportHeader>
        <Report />
      </Section>
      <Section
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "0px",
        }}
      >
        <Footer />
      </Section>
    </PageContainer>
  );
}

Home.propTypes = {
  /**
   * User's transaction data, array of objects with the following schema:
   */
  transactions: PropTypes.any,
  /**
   * Initializes transaction data
   */
  initTransactions: PropTypes.any,
  /**
   * Checks to see if any transactions were added.
   */
  pollTransactions: PropTypes.any,
};

const mapStateToProps = (state) => ({
  transactions: state.main.transactions,
});

const mapDispatchToProps = {
  initTransactions: initTransactions,
  pollTransactions: pollTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
