/*
 *
 * FormulaO
 *
 */
import {Input, Ul, ListItem } from './StyledC';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectConstructors } from './selectors';
import messages from './messages';
import { fetchData } from './actions';

export class FormulaO extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {}

  handleClick = () => {
    // const { userId, dispatch } = this.props
    // dispatch({type: 'FETCH_DATA'})
    this.props.onChangefetchData();
    console.log('this is:', this);
  }

  render() {

    let constructorItems = '';
    if(this.props.constructors) {
      console.log(constructorItems);
      constructorItems = this.props.constructors.map((constructor) => (
        <li key={constructor.name}>{constructor.name}</li>
      ))
    }

    return (
      <div>
        <h1>Constructors</h1>
        <ul>
          { constructorItems }
        </ul>
      </div>
    );
  }
}

FormulaO.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onChangefetchData: React.PropTypes.func,
};

FormulaO.defaultProp = {
  constructors: [],
};

const mapStateToProps = createStructuredSelector({
  // FormulaO: makeSelectFormulaO(),
  constructors: selectConstructors()
});

function mapDispatchToProps(dispatch) {
  return {
    onChangefetchData: (evt) => {
      dispatch(fetchData());
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FormulaO);
