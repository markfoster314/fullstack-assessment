import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addEntity, removeEntity } from "../../redux/actions/main";
import ListItem from "../../components/ListItem";
import Wrapper from "./Wrapper";
import H4 from "./H4";

/**
 *
 * Displays a transaction in our list component
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
export function TransactionListItem({
  item,
  selectedEntities,
  addEntity,
  removeEntity,
}) {
  const [isSelected, setIsSelected] = useState(
    selectedEntities.includes(item.merchant_name)
  );

  useEffect(() => {
    if (selectedEntities.includes(item.merchant_name) && !isSelected) {
      setIsSelected(true);
    } else if (!selectedEntities.includes(item.merchant_name) && isSelected) {
      setIsSelected(false);
    }
  }, [selectedEntities]);

  const handleChange = () => {
    if (isSelected) {
      removeEntity(item.merchant_name);
    } else {
      addEntity(item.merchant_name);
    }
  };

  const content = (
    <Wrapper style={{ backgroundColor: isSelected ? "#FF9900" : "inherit" }}>
      <input
        style={{ marginLeft: "10px" }}
        type="checkbox"
        checked={isSelected}
        onChange={handleChange}
      />
      <Wrapper>
        <H4>{item.merchant_name}</H4>
      </Wrapper>
      <Wrapper>
        <H4>{"$" + item.amount}</H4>
      </Wrapper>
      <Wrapper>
        <H4>{item.date}</H4>
      </Wrapper>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`transaction-list-item-${item.id}`} item={content} />;
}

TransactionListItem.propTypes = {
  /**
   * One transaction item
   */
  item: PropTypes.object,
  /**
   * Companies selected as Bezos related
   */
  selectedEntities: PropTypes.array,
  /**
   * Adds company to selectedEntities
   */
  addEntity: PropTypes.any,
  /**
   * Removes company from selectedEntities
   */
  removeEntity: PropTypes.any,
};

const mapStateToProps = (state) => ({
  selectedEntities: state.main.selectedEntities,
});

const mapDispatchToProps = {
  addEntity: addEntity,
  removeEntity: removeEntity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionListItem);
