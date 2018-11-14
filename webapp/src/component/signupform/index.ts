import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (username, password, validPassword) => {
      dispatch(userActions.createAccount(username, password, validPassword));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
