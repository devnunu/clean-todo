import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

// view
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (
      username: string,
      password: string,
      validPassword: string
    ) => {
      dispatch(userActions.createAccount(username, password, validPassword));
    },
    usernameLogin: (username: string, password: string) => {
      dispatch(userActions.usernameLogin(username, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
