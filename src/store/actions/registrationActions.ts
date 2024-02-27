// store/actions/registrationActions.ts

import {
  RegistrationActionTypes,
  PersonalDetailsFormData,
  AddressDetailsFormData,
} from "../types/registrationTypes";

export const submitPersonalDetails = (data: PersonalDetailsFormData) => ({
  type: RegistrationActionTypes.SUBMIT_PERSONAL_DETAILS,
  payload: data,
});

export const submitAddressDetails = (data: AddressDetailsFormData) => ({
  type: RegistrationActionTypes.SUBMIT_ADDRESS_DETAILS,
  payload: data,
});
