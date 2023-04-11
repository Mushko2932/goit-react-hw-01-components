import React from "react";
import PropTypes from 'prop-types';
import {
  TransactionContainer,
  TransactionHeader,
  TransactionTitle,
  TransactionItem,
  TransactionBody,
  TransactionLine,
  TransactionValue,
} from './TransactionHistory.styled';


export function TransactionHistory({ items }) {
  return (
    <TransactionContainer>
      <TransactionHeader>
        <TransactionTitle>
          <TransactionItem>Type</TransactionItem>
          <TransactionItem>Amount</TransactionItem>
          <TransactionItem>Currency</TransactionItem>
        </TransactionTitle>
      </TransactionHeader>

      <TransactionBody>
        {items.map(item => {
          return (
            <TransactionLine key={item.id}>
              <TransactionValue>{item.type}</TransactionValue>
              <TransactionValue>{item.amount}</TransactionValue>
              <TransactionValue>{item.currency}</TransactionValue>
            </TransactionLine>
          );
        })}
      </TransactionBody>
    </TransactionContainer>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
}