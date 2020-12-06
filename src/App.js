import React, { useEffect } from "react";
import Welcome from "./SignInComponent/Welcome";
import SignIn from "./SignInComponent/SignIn";
import CreateAccount from "./SignInComponent/CreateAccount";
import ForgotPassword from "./SignInComponent/ForgotPassword";
import ForgotPassword2 from "./SignInComponent/ForgotPassword2";
import Home from "./HomeComponent/Home";
import DailyInspiration from "./HomeComponent/DailyInspiration";
import StartSelecting from "./HomeComponent/StartSelecting";
import Camera from "./HomeComponent/Camera";
import Style from "./HomeComponent/Style";
import SaveAndShare from "./HomeComponent/SaveAndShare";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { fetchDresses, addDress, deleteDress } from "./api/dresses";
import PageNotFound from "./HomeComponent/PageNotFound";

// import GlobalStyles from "./GlobalStyles";

// ADD HERE TERNIARY OPERATOR IF SIGNED IN JUMP TO NEXT
function App() {
  useEffect(() => {
    fetchDresses()
      .then((response) => response.json())
      .then((dresses) => console.log(dresses));
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/SignIn">
          <SignIn />
        </Route>

        <Route path="/CreateAccount">
          <CreateAccount />
        </Route>

        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>

        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/DailyInspiration">
          <DailyInspiration />
        </Route>

        <Route path="/StartSelecting">
          <StartSelecting />
        </Route>

        <Route path="/Camera">
          <Camera />
        </Route>

        <Route path="/Style">
          <Style />
        </Route>

        <Route path="/SaveAndShare">
          <SaveAndShare />
        </Route>

        <Route path="/ForgotPassword2">
          <ForgotPassword2 />
        </Route>

        <Route component={PageNotFound} />
        <PageNotFound />

        {/* <GlobalStyles /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
