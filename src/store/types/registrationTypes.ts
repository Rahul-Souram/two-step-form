// store/types/registrationTypes.ts

export interface RegistrationState {
  step: number;
  submittedUsers: SubmittedUser[];
}

export interface SubmittedUser {
  // Define the structure of a submitted user
}

export enum RegistrationActionTypes {
  SUBMIT_PERSONAL_DETAILS = "SUBMIT_PERSONAL_DETAILS",
  SUBMIT_ADDRESS_DETAILS = "SUBMIT_ADDRESS_DETAILS",
}

export interface SubmitPersonalDetailsAction {
  type: typeof RegistrationActionTypes.SUBMIT_PERSONAL_DETAILS;
  payload: PersonalDetailsFormData;
}

export interface SubmitAddressDetailsAction {
  type: typeof RegistrationActionTypes.SUBMIT_ADDRESS_DETAILS;
  payload: AddressDetailsFormData;
}

export type RegistrationAction =
  | SubmitPersonalDetailsAction
  | SubmitAddressDetailsAction;
