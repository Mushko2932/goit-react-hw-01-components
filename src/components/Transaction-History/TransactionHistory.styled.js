import styled from "@emotion/styled";

export const TransactionContainer = styled.table`
  width: 720px;
  padding: 20px;
  margin: 10px;
  border: thick double #32a1ce;
`;

export const TransactionHeader = styled.thead`
  margin: 0;
  text-align: center;
`;

export const TransactionTitle = styled.tr`
  background-color: tail;
`;

export const TransactionItem = styled.th`
  padding: 20px;
  background-color: teal;
`

export const TransactionBody = styled.tbody`
  margin: 20px;
  text-align: center;
`;

export const TransactionValue = styled.td`
  padding: 20px;
  border: 1px solid grey;
`;

export const TransactionLine = styled.tr`
  background-color: #ffffff;

  &:nth-of-type(even) {
    background-color: lightyellow;
  }
`;



