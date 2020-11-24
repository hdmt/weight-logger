import React from "react";
import { BrowserRouter,Link,Route } from "react-router-dom";
import Dashboard from "./components/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Link to="/">TOP</Link>｜
      <Link to="/dashboard">Dashboard</Link>
      <Route path='/dashboard' component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
