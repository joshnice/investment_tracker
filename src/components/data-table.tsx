import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface DataTableProps<TableType extends {name: string}> {
    columns: string[];
    rows: TableType[];
}

const DataTableComponent = <TableType extends { name: string },>(props: DataTableProps<TableType>) => (
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
                { props.columns.map((column) => <TableCell align="left">{column}</TableCell>) }
            </TableRow>
        </TableHead>
        <TableBody>
            {props.rows.map((row) => (
            <TableRow key={row.name}>
                { Object.values(row).map((dataRow) => <TableCell>{dataRow.toString()}</TableCell>) }
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
)

export default DataTableComponent;