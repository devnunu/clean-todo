import { connect } from 'react-redux';
import Container from './container';

import { actionCreators as userActions } from '../../redux/modules/user';

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
    setLoginStatus: () => dispatch(userActions.setLoginStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
