import React from "react";
import PropTypes from 'prop-types';
import {
  TransactionHistoryContainer,
  TransactionHistoryTitle,
  TransactionHistoryBody,
} from './TransactionHistory.styled';


export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryContainer>
      <TransactionHistoryTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryTitle>

      <TransactionHistoryBody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </TransactionHistoryBody>
    </TransactionHistoryContainer>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}