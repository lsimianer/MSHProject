import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';


// const StyledTableRow = makeStyles(() => ({
//     mixedRows: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: 'black',
//           },      
//     },    
//   }))(TableRow)


  function createData(Job_Number, name, Part_Number, shift, Operator, PROD, RUN_HRS,DOWN_TIME, SU_TIME, AVG_RR,STD_RR,EFFICIENCY_75,PROD_GOAL_85, SHIFT_TOTAL, GRAND_TOTAL, QTY_LEFT, PO_QTY){
      return {Job_Number, name, Part_Number, shift, Operator, PROD, RUN_HRS,DOWN_TIME, SU_TIME, AVG_RR,STD_RR,EFFICIENCY_75,PROD_GOAL_85, SHIFT_TOTAL, GRAND_TOTAL, QTY_LEFT, PO_QTY};
  }

  const rows = [
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000),
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000),
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000),
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000),
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000),
      createData(30,'ACME #2 (8)', '1618vs', 1, 'Luke GR', 1170, 9,1,0,130,125,'104%','94%', 9784, 10952, 9048, 20000)

  ]
const ProductionBoard = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Job_Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Part_Number</TableCell>
                        <TableCell>shift</TableCell>
                        <TableCell>Operator</TableCell>
                        <TableCell>PROD</TableCell>
                        <TableCell>RUN_HRS</TableCell>
                        <TableCell>DOWN_TIME</TableCell>
                        <TableCell>SU_TIME</TableCell>
                        <TableCell>AVG_RR</TableCell>
                        <TableCell>STD_RR</TableCell>
                        <TableCell>EFFICIENCY_75</TableCell>
                        <TableCell>PROD_GOAL_85</TableCell>
                        <TableCell>SHIFT_TOTAL</TableCell>
                        <TableCell>GRAND_TOTAL</TableCell>
                        <TableCell>QTY_LEFT</TableCell>
                        <TableCell>PO_QTY</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>  
                        <TableCell>{row.Job_Number}</TableCell>
                        <TableCell>{row.Name}</TableCell>
                        <TableCell>{row.Part_Number}</TableCell>
                        <TableCell>{row.shift}</TableCell>
                        <TableCell>{row.Operator}</TableCell>
                        <TableCell>{row.PROD}</TableCell>
                        <TableCell>{row.RUN_HRS}</TableCell>
                        <TableCell>{row.DOWN_TIME}</TableCell>
                        <TableCell>{row.SU_TIME}</TableCell>
                        <TableCell>{row.AVG_RR}</TableCell>
                        <TableCell>{row.STD_RR}</TableCell>
                        <TableCell>{row.EFFICIENCY_75}</TableCell>
                        <TableCell>{row.PROD_GOAL_85}</TableCell>
                        <TableCell>{row.SHIFT_TOTAL}</TableCell>
                        <TableCell>{row.GRAND_TOTAL}</TableCell>
                        <TableCell>{row.QTY_LEFT}</TableCell>
                        <TableCell>{row.PO_QTY}</TableCell>
                    </TableRow> 
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default ProductionBoard;
