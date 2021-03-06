import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getDateString, isValidDate } from "../helper/global";
import { ColumnType } from "../types/data-table-types";

interface DataTableProps<TableType extends {name: string}> {
    columns: ColumnType[];
    rows: TableType[];
    containerClassName: string;
}

const DataTableComponent = <TableType extends { name: string },>(props: DataTableProps<TableType>) => (
    <TableContainer component={Paper} className={props.containerClassName}>
        <Table>
        <TableHead>
            <TableRow>
                { props.columns.map((column) => <TableCell key={column.id} align="center">{column.columnHeader}</TableCell>) }
            </TableRow>
        </TableHead>
        <TableBody>
            {props.rows.map((row, index) => (
            <TableRow key={row.name}>
                { Object.values(row).map((dataRow) => dataRow ?
                    <TableCell key={`${dataRow.toString()}_${index}`} align="center">{ isValidDate(dataRow) ? getDateString(dataRow as unknown as Date) : dataRow }</TableCell>
                    :
                    <TableCell key={`loading_${index}`}> 
                        <CircularProgress size={40} />
                    </TableCell>
                    )}
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
)

export default DataTableComponent;