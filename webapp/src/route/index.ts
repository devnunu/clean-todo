import { connect } from 'react-redux';
import Container from './container';

import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as todoActions } from '../redux/modules/todo';

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    user: { isLoggedIn }
  } = state;
  return {
    isLoggedIn
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setLoginStatus: () => dispatch(userActions.setLoginStatus()),
    getTodoTimeline: () => dispatch(todoActions.getTodoTimeline()),
    getTodoList: () => dispatch(todoActions.getTodoList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
