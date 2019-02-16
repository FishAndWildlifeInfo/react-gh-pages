import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    margin: theme.spacing.unit,
    maxWidth: 180,
    marginTop: 0
  }
});

class CustomNumber extends React.Component {

  state = {
    currentInput: ''
  }

  handleChange = event => {
    const { onChange } = this.props
    const { currentInput } = this.state
    const newValue = event.target.value.replace(/\D/g,'');
    
    // Do nothing if nothing changed
    if(newValue !== currentInput) {
      if(onChange) {
        onChange(newValue)
      }
    }

    // Update current value
    this.setState({ currentInput: newValue })
  }

  render() {
    const { classes, label } = this.props;
    const { currentInput } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant='h5'>
            {label}
        </Typography>
        <TextField
          id='margin-normal'
          className={classes.textField}
          onChange={this.handleChange}
          value={currentInput}
        />
      </div>
    );
  }
}

CustomNumber.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(CustomNumber);