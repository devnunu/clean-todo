import { connect } from 'react-redux';
import { actionCreators as todoActions } from '../../redux/modules/todo';

// view
import Container from './container';

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    todo: { todoList }
  } = state;
  return {
    todoList
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    getTodoList: () => dispatch(todoActions.getTodoList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
