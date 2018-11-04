import { ActionType } from '../../model/Common';
import TestState from '../../model/Test';

// action

const TEST_CHANGE_STATUS = 'TEST_CHANGE_STATUS';

// action creator

function testChangeStatus(): ActionType {
  return {
    type: TEST_CHANGE_STATUS
  };
}

// reducer

const initialState: TestState = {
  testStatus: false
};

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case TEST_CHANGE_STATUS:
      return applyTestChangeStatus(state, action);
    default:
      return state;
  }
}

// reducer function

function applyTestChangeStatus(state: TestState, action: ActionType) {
  return {
    ...state,
    testStatus: !state.testStatus
  };
}

export const actionCreators = {
  testChangeStatus
};

export default reducer;
