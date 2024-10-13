export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 68000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Groceries',
      amount: 12000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid3',
      source: 'Pocket Money',
      amount: 10000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at?: Date;
    type: ReportType;
  }[];
}
