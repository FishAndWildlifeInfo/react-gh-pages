import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
  button: {
        alignSelf: 'center',
        padding: 2,
        '&$checked': {
            color: theme.palette.primary.main,
        },
  },
  checked: {},
  wrapper: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
  },
  buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16
  },
  required: {
      color: 'red'
  }
});

class RadioButtons extends React.Component {
  state = {
    selectedValue: -1,
  }

  handleChange = event => {
    const { onChange } = this.props
    const value = parseInt(event.target.value)

    if(onChange) {
        onChange(value + 1)
    }

    this.setState({ selectedValue: value });
  }

  renderRadioButtons = () => {
    const { classes, label } = this.props
    const radioCount = 5 
    const range = Array.apply(null, {length: radioCount}).map(Number.call, Number)

        return range.map(radioNum => {
            return(
                <Radio
                    key={'linear_scale_' + label.toLowerCase() + '_' + radioNum}
                    checked={this.state.selectedValue === radioNum}
                    onChange={this.handleChange}
                    value={radioNum}
                    classes={{
                        root: classes.button,
                        checked: classes.checked,
                      }}
                />
            )
        })
    }

    render() {
        const { classes, label, leftLabel, rightLabel } = this.props;

        return (
            <div>
                <Typography variant='subtitle2'>
                    {label}
                    <span className={classes.required}>*</span>
                </Typography>
                <div className={classes.wrapper}>
                    <Typography variant='subtitle2'>
                        {leftLabel}
                    </Typography>
                    <div className={classes.buttons}>
                        {this.renderRadioButtons()}
                    </div>
                    <Typography variant='subtitle2' align='right'>
                        {rightLabel}
                    </Typography>
                </div>
            </div>
        )
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  leftLabel: PropTypes.string.isRequired,
  rightLabel: PropTypes.string.isRequired,
};

export default withStyles(styles)(RadioButtons);