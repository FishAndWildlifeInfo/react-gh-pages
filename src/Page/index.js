import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

// All
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Form
import Form from '../Form/';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 40
  },
  name: {
    marginLeft: 8
  },
  grid: {
    paddingTop: 24
  },
  paper: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    color: theme.palette.text.secondary,
  },
  footer: {
    marginTop: 16,
    marginBottom: 32,
    textAlign: 'center'
  }
});

class Page extends React.Component {
 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="primary">
            <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.name}>
                Kokanee & Inland Chinook Angler Survey
            </Typography>
            </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 20 }}>
          <Grid container>
            <Grid item md={3} sm={2}/>
            <Grid item md={6} sm={8} xs={12}>
              <Paper className={classes.paper}>
                <Form/>
              </Paper>
              <div className={classes.footer}>
                <Typography variant="body2" color="inherit" >
                  Developed and paid for by members and sponsors of <a href='http://kokanee.org'>Project Kokanee</a> & <a href='http://kokaneepower.org'>Kokanee Power</a>
                </Typography>
                <Typography variant='caption' color='inherit'>
                  Form was created by <a href='mailto:hello@austinerck.com'>Austin Erck</a>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Page));