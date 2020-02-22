import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import Select from '../Select/'

const styles = theme => ({
  root: {
    //width: '360px !important',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'scroll',
  },
  table: {
    minWidth: '100% !important',
    width: '100% !important'
  },
  tableCell: {
    whiteSpace: 'nowrap',
    //overflow: 'hidden',
    textOverflow: 'ellipsis',
    //maxWidth: '40px',
  },
});

const CustomTableCell = withStyles(theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            maxWidth: '120px !important'
        }
    },
  }))(TableCell);

let id = 0;
function createData(label, size) {
  id += 1;
  return { id, label, size};
}

const rows = [
  createData('< 10"', 'lt10'),
  createData('10" - 10.9”', '10'),
  createData('11" - 11.9”', '11'),
  createData('12" - 12.9”', '12'),
  createData('13" - 13.9”', '13'),
  createData('14 - 14.9”', '14'),
  createData('15 - 15.9”', '15'),
  createData('16" - 16.9”', '16'),
  createData('17" - 17.9”', '17'),
  createData('18" - 18.9”', '18'),
  createData('19" - 19.9”', '19'),
  createData('>= 20"', 'gte20'),
];

class SimpleTable extends React.Component {

    handleChange = (key, value) => {
        const { onChange } = this.props
        if(onChange) {
            onChange(key, value)
        }
    }

    range = (length, offset = 1) => {
        var obj = {}

        Array.from(Array(length).keys()).forEach((value, index) => {
            obj[index + offset] = index + offset
        })

        return obj
    }
  
    renderRow = (data) => {
        const { formState, fish, fish_id } = this.props
        let selectedOptions = this.props.selectedOptions || {}
        let row = []
    
        let fish_type = [fish_id + '_kept_' + data.size, fish_id + '_released_' + data.size, fish_id + '_ad_clip_' + data.size]

        row.push(
            <CustomTableCell key={'cell_header_' + data.size} component="th" scope="row">{data.label}</CustomTableCell>
        )
    
        const columns = fish === 'Kokanee' ? 3 : 2
        for(var i = 0; i < columns; i++) {
            let option = fish_type[i]
            let rangeMax = (columns === 3 && i === 2) ? (parseInt(formState[fish_type[0]]) || 0) + (parseInt(formState[fish_type[1]]) || 0) : 40

            row.push(
                <CustomTableCell key={'cell_' + option}>
                    <Select
                        defaultValue={0}
                        defaultLabel='0'
                        label=''
                        hideLabel
                        options={this.range(rangeMax)}
                        selectedOption={selectedOptions[option]}
                        onChange={value => {
                            console.log(option, value)
                            this.handleChange(option, value)
                        }}
                    />
                </CustomTableCell>
            )
        }

        return row
    }
  
    render() {
        const { classes, fish } = this.props;
        const customColumnStyle = { root: { maxWidth: '50px !important' } };
        const sizeColumnStyle = { maxWidth: '50px !important' };
        
        return (
            <span>
                <Typography variant='h6'>{fish}</Typography>
                <Hidden smUp>
                    <Typography variant='subtitle2' className={styles.underline}><strong>You may need scroll right to view all information</strong></Typography>
                </Hidden>
                <Paper className={classes.root}>
                    <Table className={classes.table} padding='dense' style={{ width: "auto", tableLayout: "auto" }}>
                        <TableHead className={classes.tableBody}>
                            <TableRow>
                                <CustomTableCell style={sizeColumnStyle}>Size</CustomTableCell>
                                <CustomTableCell align="left" style={customColumnStyle}>Kept</CustomTableCell>
                                <CustomTableCell align="left" style={customColumnStyle}>Released</CustomTableCell>
                                {fish === 'Kokanee' &&
                                    <CustomTableCell align="left" style={customColumnStyle}>Fin Clipped</CustomTableCell>
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                        {rows.map(row => {
                            return (
                            <TableRow key={row.id}>
                                {this.renderRow(row)}
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </Paper>
            </span>
        );
    }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);