import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface DataTableProps<TableType extends {name: string}> {
    columns: string[];
    rows: TableType[];
}

const DataTableComponent = <TableType extends { name: string },>(props: DataTableProps<TableType>) => {
    console.log("columns", props.columns);
    console.log("rows", props.rows);
    return (
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell align="left">Calories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.rows.map((row) => (
                <TableRow key={row.name}>
                    <TableCell align="left" >Hello World</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTableComponent;