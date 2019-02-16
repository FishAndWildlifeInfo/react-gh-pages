import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  formControl: {
    maxWidth: 180
  },
  required: {
      color: 'red'
  }
});

class CustomSelect extends React.Component {

  handleChange = event => {
    const { onChange } = this.props
    const value = event.target.value
    
    if(onChange) {
        onChange(value)
    }
  }

  renderOptions = () => {
    const { label, options } = this.props

    return Object.keys(options).map(key => {
        const value = options[key]

        return (<option key={'select_' + label.toLowerCase() + '_' + key} value={key}>{value}</option>)
    })
  }

  render() {
    const { classes, dense, label, hideLabel, selectedOption, defaultLabel, defaultValue } = this.props;
    
    return (
      <div className={{...classes.root, maxWidth: (dense === true) ? 80 : undefined}}>
        { hideLabel !== true && 
          <Typography variant='h5'>
            {label}
            <span className={classes.required}>*</span>
          </Typography>
        }
        <FormControl className={classes.formControl} style={{margin: ((dense === true) ? 0 : 12)}}>
        <NativeSelect
            value={selectedOption}
            onChange={this.handleChange}
            name={'select_' + label.toUpperCase }
            className={classes.selectEmpty}
          >
            <option key={'select_' + label.toLowerCase() + '_none'} value={defaultValue || ''}>{defaultLabel || 'None'}</option>
            {this.renderOptions()}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

CustomSelect.propTypes = {
  dense: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  hideLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultLabel: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default withStyles(styles)(CustomSelect);