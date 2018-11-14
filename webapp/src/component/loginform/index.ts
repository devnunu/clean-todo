import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username: string, password: string) => {
      dispatch(userActions.usernameLogin(username, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
