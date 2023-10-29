export interface CellInfo {
  getValue(): any;
  rowIndex: number;
  columnIndex: number;
  row: {
    index: number;
    original: {
      id: string;
    };
  };
  column: {
    id: string;
  };
}
