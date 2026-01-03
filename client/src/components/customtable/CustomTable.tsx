import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface CustomTableProps {
    headers: string[];
    data: Record<string, any>[];
}

function CustomTable({ headers, data }: CustomTableProps) {
    return (
        <TableContainer sx={{ width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((head) => (
                            <TableCell key={head}>{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.roomId}>
                            {headers.map((head) => (
                                <TableCell key={`${item.roomId}-${head}`}>{item[head]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
