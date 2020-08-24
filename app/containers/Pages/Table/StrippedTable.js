import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'dan-components/Tables/tableStyle-jss';

let id = 0;
function createData(name, procent, procentvalue) {
  id += 1;
  return {
    id,
    name,
    procent, 
    procentvalue
  };
}

const data = [
  createData('NASDAQ', - 0.85, 5.05555),
  createData('APPL', + 0.51, 126.56),
  createData('DOW J', - 0.34, 19.92602),
  createData('GOOG', + 0.70, 534.53)
];

function StrippedTable(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.stripped)}>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="default">
                  <h3><b>{n.name}</b></h3>
                  <div inlineWrap>
                    {n.procentvalue}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <h3><b>{n.procent}%</b></h3>
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}

StrippedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrippedTable);
