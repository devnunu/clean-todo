import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

// model
import UserState from '../../model/User';

// view
import Container from './container';

const mapStateToPorps = (state: UserState, ownProps: any) => {
  const { isLoggedIn, token } = state;
  return {
    isLoggedIn,
    token
  };
};

export default connect(mapStateToPorps, null)(Container);
