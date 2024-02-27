import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types";
import {
  submitPersonalDetails,
  submitAddressDetails,
} from "../store/actions/registrationActions";
import { PersonalDetailsForm } from "../components";
import { AddressDetailsForm } from "../components";

const RegistrationContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.registration);

  const handleSubmitPersonalDetails = (data: PersonalDetailsFormData) => {
    dispatch(submitPersonalDetails(data));
  };

  const handleSubmitAddressDetails = (data: AddressDetailsFormData) => {
    dispatch(submitAddressDetails(data));
  };

  return (
    <div>
      {step === 1 && (
        <PersonalDetailsForm onSubmit={handleSubmitPersonalDetails} />
      )}
      {step === 2 && (
        <AddressDetailsForm onSubmit={handleSubmitAddressDetails} />
      )}
    </div>
  );
};

export default RegistrationContainer;
