import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    // width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    // maxWidth: "100%"

  },
  table: {
    // minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, org, uploadDate, commitDate, caComplete) {
  id += 1;
  return { id, name, org, uploadDate, commitDate, caComplete };
}

const rows = [
  createData(`cap1.doc`, `Joe's Airplane`, `01/01/2018`, `09/19/2018`, `No`)  
];

function CapTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>File Name</CustomTableCell>
            <CustomTableCell>Organization</CustomTableCell>
            <CustomTableCell>Date Uploaded</CustomTableCell>
            <CustomTableCell>Committed Completion Date</CustomTableCell>
            <CustomTableCell>CA Complete?</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell>{row.org}</CustomTableCell>
                <CustomTableCell>{row.uploadDate}</CustomTableCell>
                <CustomTableCell>{row.commitDate}</CustomTableCell>
                <CustomTableCell>{row.caComplete}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CapTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapTable);

