export const defaultTransactions = [
  {
    id: 1,
    description: 'Safeway',
    value: -123
  },

  {
    id: 2,
    description: 'Gas',
    value: -65.77
  },

  {
    id: 3,
    description: 'Guitar',
    value: 100
  }
];


export const defaultTransactionGridFields = [
  {
    name: 'Description',
    className: 'flex',
    mapping: 'description'
  },

  {
    name: 'Value',
    className: 'align-right',
    mapping: 'value'
  }
];


export const defaultSummary = {
  description: 'Balance'
};
