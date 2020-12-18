import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AdminLogin from '../Components/AdminLogin'
import AdmMngmPage from '../Components/AdmMngmPage'
import ApplicationForm from '../Components/ApplicationForm'
import CreateTrip from '../Components/CreateTrip';
import HomePage from '../Components/HomePage';
import TripDetail from '../Components/TripDetail';
import TripList from '../Components/TripList';
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import React from 'react';

const Router = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
    
            <Route exact path="/trips">
              <TripList/>
            </Route>
    
            <Route exact path="/application-form/:id">
              <ApplicationForm/>
            </Route>

            <Route exact path="/login">
              <AdminLogin/>
            </Route>

            <Route exact path="/trips/create">
              <CreateTrip/>
            </Route>

            <Route exact path="/trips/detail">
              <TripDetail/>
            </Route>

            <Route exact path="/login/management">
                <AdmMngmPage/>
            </Route>

            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      );
};

export default Router;
