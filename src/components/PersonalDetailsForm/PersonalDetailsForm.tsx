import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(3),
  age: yup.number().required().positive().integer(),
  sex: yup.string().required().oneOf(["Male", "Female"]),
  mobile: yup.string().matches(/^[6-9]\d{9}$/, "Invalid Indian Mobile Number"),
  govtIdType: yup.string().oneOf(["Aadhar", "PAN"]),
  govtId: yup.string().when("govtIdType", {
    is: "Aadhar",
    then: yup.string().matches(/^\d{12}$/, "Invalid Aadhar Number"),
    otherwise: yup
      .string()
      .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid PAN Number"),
  }),
});

type PersonalDetailsFormData = {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType?: string;
  govtId?: string;
};

interface PersonalDetailsFormProps {
  onSubmit: (data: PersonalDetailsFormData) => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onSubmit,
}) => {
  const { register, handleSubmit, errors } = useForm<PersonalDetailsFormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: PersonalDetailsFormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" ref={register} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input type="text" name="age" ref={register} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Sex:</label>
        <select name="sex" ref={register}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.sex && <p>{errors.sex.message}</p>}
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" name="mobile" ref={register} />
        {errors.mobile && <p>{errors.mobile.message}</p>}
      </div>
      <div>
        <label>Govt Issued ID Type:</label>
        <select name="govtIdType" ref={register}>
          <option value="">Select</option>
          <option value="Aadhar">Aadhar</option>
          <option value="PAN">PAN</option>
        </select>
        {errors.govtIdType && <p>{errors.govtIdType.message}</p>}
      </div>
      <div>
        <label>Govt Issued ID:</label>
        <input type="text" name="govtId" ref={register} />
        {errors.govtId && <p>{errors.govtId.message}</p>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export { PersonalDetailsForm };
