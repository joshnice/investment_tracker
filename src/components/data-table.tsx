import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getDateString, isValidDate } from "../helper/global";

interface DataTableProps<TableType extends {name: string}> {
    columns: string[];
    rows: TableType[];
    containerClassName: string;
}

const DataTableComponent = <TableType extends { name: string },>(props: DataTableProps<TableType>) => (
    <TableContainer component={Paper} className={props.containerClassName}>
        <Table>
        <TableHead>
            <TableRow>
                { props.columns.map((column) => <TableCell key={column} align="center">{column}</TableCell>) }
            </TableRow>
        </TableHead>
        <TableBody>
            {props.rows.map((row, index) => (
            <TableRow key={row.name}>
                { Object.values(row).map((dataRow) => <TableCell key={`${dataRow.toString()}_${index}`} align="center">{ isValidDate(dataRow) ? getDateString(dataRow as unknown as Date) : dataRow }</TableCell>) }
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
)

export default DataTableComponent;