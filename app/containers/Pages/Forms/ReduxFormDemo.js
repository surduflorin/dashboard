import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux
} from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
});

const initData = {
  text: 'Thomas Schneider',
  email: 'thomas@invisionapp.com',
  password: '*********',
  radio: 'option1',
  selection: 'option1',
  onof: true,
  checkbox: true
};

class ReduxFormDemo extends Component {
  render() {
    const trueBool = true;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      init,
      clear
    } = this.props;
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                User Details
              </Typography>
              <div className={classes.buttonInit}>
                <Button onClick={() => init(initData)} color="secondary" type="button">
                  Load Sample Data
                </Button>
                <Button onClick={() => clear()} type="button">
                  Clear Data
                </Button>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="name"
                    component={TextFieldRedux}
                    placeholder="Name Surname"
                    label="Name Surname"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="ocupation"
                    component={TextFieldRedux}
                    placeholder="Ocupation"
                    label="Ocupation"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder="Email"
                    label="Email"
                    required
                    validate={[required, email]}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    component={TextFieldRedux}
                    placeholder="*******"
                    label="Password"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div className={classes.fieldBasic}>
                  <FormLabel component="label">Email Notifications</FormLabel>
                  <div className={classes.inlineWrap}>
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="Monday" />
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="Tuesday" />
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="Wednesday" />
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="Thursday" />
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="Friday" />
                  </div>
                </div>
                {/*<div className={classes.fieldBasic}>
                      <FormLabel component="label">Choose One Option</FormLabel>
                      <Field name="radio" className={classes.inlineWrap} component={renderRadioGroup}>
                        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                      </Field>
                    </div>
                    <div>
                      <FormControl className={classes.field}>
                        <InputLabel htmlFor="selection">Selection</InputLabel>
                        <Field
                          name="selection"
                          component={SelectRedux}
                          placeholder="Selection"
                          autoWidth={trueBool}
                        >
                          <MenuItem value="option1">Option One</MenuItem>
                          <MenuItem value="option2">Option Two</MenuItem>
                          <MenuItem value="option3">Option Three</MenuItem>
                        </Field>
                      </FormControl>
                    </div>
                    <div className={classes.fieldBasic}>
                      <FormLabel component="label">Toggle Input</FormLabel>
                      <div className={classes.inlineWrap}>
                      
                        <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} />} label="Checkbox" />
                      </div>
                    </div>
                    <div>
                      <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                        Submit
                      </Button>
                      <Button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                      >
                        Reset
                      </Button>
                    </div> */}
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

ReduxFormDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(ReduxFormDemo);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
