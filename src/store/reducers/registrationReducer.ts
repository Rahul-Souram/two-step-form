// store/reducers/registrationReducer.ts

import {
  RegistrationState,
  RegistrationAction,
  RegistrationActionTypes,
} from "../types/registrationTypes";

const initialState: RegistrationState = {
  step: 1,
  submittedUsers: [],
};

const registrationReducer = (
  state = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.SUBMIT_PERSONAL_DETAILS:
      return {
        ...state,
        step: 2,
        // Process personal details submission and update state
      };
    case RegistrationActionTypes.SUBMIT_ADDRESS_DETAILS:
      return {
        ...state,
        step: 1,
        submittedUsers: [...state.submittedUsers, action.payload], // Assuming payload contains submitted user data
        // Process address details submission and update state
      };
    default:
      return state;
  }
};

export default registrationReducer;
