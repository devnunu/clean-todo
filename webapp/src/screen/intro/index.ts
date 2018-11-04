import { connect } from 'react-redux';
import { actionCreators as testActions } from '../../redux/modules/test';

// model
import TestState from '../../model/Test';

// view
import Container from './container';

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    test: { testStatus }
  } = state;
  return {
    testStatus
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    toggleTestStatus: () => dispatch(testActions.testChangeStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
