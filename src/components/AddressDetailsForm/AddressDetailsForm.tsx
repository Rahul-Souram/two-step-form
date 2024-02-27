import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().required(),
  pincode: yup.string().optional().matches(/^\d+$/, "Invalid Pincode"),
});

type AddressDetailsFormData = {
  address?: string;
  state?: string;
  city?: string;
  country: string;
  pincode?: string;
};

interface AddressDetailsFormProps {
  onSubmit: (data: AddressDetailsFormData) => void;
}

const AddressDetailsForm: React.FC<AddressDetailsFormProps> = ({
  onSubmit,
}) => {
  const { register, handleSubmit, errors } = useForm<AddressDetailsFormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: AddressDetailsFormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Address</label>
        <input type="text" name="address" ref={register} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" ref={register} />
        {errors.state && <p>{errors.state.message}</p>}
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" ref={register} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>Country</label>
        <input type="text" name="country" ref={register} />
        {errors.country && <p>{errors.country.message}</p>}
      </div>
      <div>
        <label>Pincode</label>
        <input type="text" name="pincode" ref={register} />
        {errors.pincode && <p>{errors.pincode.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { AddressDetailsForm };
