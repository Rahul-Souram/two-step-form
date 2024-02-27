import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/registrationTypes";

const DataTable: React.FC = () => {
  const submittedUsers = useSelector(
    (state: RootState) => state.registration.submittedUsers
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {submittedUsers.map((user: any) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.sex}</td>
            <td>{user.mobile}</td>
            {/* Render other user details */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { DataTable };
