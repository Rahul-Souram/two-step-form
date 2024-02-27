import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import RegistrationContainer from "./containers/RegistrationContainer";
import { DataTable } from "./components";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Two-Step User Registration Form</h1>
        <RegistrationContainer />
        <DataTable />
      </div>
    </Provider>
  );
};

export default App;
