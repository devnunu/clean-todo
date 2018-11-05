import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state: any, ownProps: any) => {
  return state;
};

export default connect(mapStateToProps)(Container);
