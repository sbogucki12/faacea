import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    paperRoot:  {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    root:       {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table:      {  
        // minWidth: 700,
    },
    row:        {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    }, 
    divRoot: {
        marginTop: "1%"
    }
});

let id = 0;
function createData(name, type, date, action) {
  id += 1;
  return { id, name, type, date, action };
}

const rows = [
  createData('LOISNB.pdf', "Letter of Investigation", "9/19/2018", "View/Delete"),
  createData('CAPAck_SNB.docx', "Letter of Acknowledgement", "12/18/2018", "View/Delete")
];

function CorrespondenceTable(props) {
  const { classes } = props;

  return (
    <div className={classes.divRoot}>
      <Paper className={classes.paperRoot} elevation={1}>
        <div className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>File Name</CustomTableCell>
                        <CustomTableCell>Correspondence Type</CustomTableCell>
                        <CustomTableCell>Date Uploaded</CustomTableCell>
                        <CustomTableCell>Action</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                {row.name}
                                </CustomTableCell>
                                <CustomTableCell>{row.type}</CustomTableCell>
                                <CustomTableCell>{row.date}</CustomTableCell>
                                <CustomTableCell>{row.action}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
      </Paper>
    </div>
  );
}

CorrespondenceTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CorrespondenceTable);