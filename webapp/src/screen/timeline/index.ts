import { connect } from 'react-redux';
import Container from './container';

import { actionCreators as todoActions } from '../../redux/modules/todo';

const mapStateToProps = (state, ownProps) => {
  const {
    todo: { todoTimeline }
  } = state;
  return {
    todoTimeline
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    getTodoTimeline: () => dispatch(todoActions.getTodoTimeline())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
