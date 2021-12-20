import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LayoutAdmin from "../layouts/admin";
import LayoutWebsite from "../layouts/website";

import AdminDashboard from "../pages/admin/dashboard";
import AddServicePage from "../pages/admin/services/add-service";
import ListServicePage from "../pages/admin/services";
import EditServicePage from "../pages/admin/services/edit-service";

import ListBooking from "../pages/admin/booking";
import DetailBookingPage from "../pages/admin/booking/detail-booking";

import ListUserPage from "../pages/admin/user/listUser";
import AddUserPage from "../pages/admin/user/addUser";
import EditUserPage from "../pages/admin/user/editUser";

import HomePage from "../pages/website/home";
import LoginPage from "../pages/website/user/login";
import RegisterPage from "../pages/website/user/register";
import QuotePage from "../pages/website/quote/QuotePage";

import ListAllBookedUserPage from "../pages/website/user/booked";
import ListBookedFixingUser from "../pages/website/user/booked/fixing";
import BookedUserPage from "../pages/website/user/booked/bookedUserRoute";
import WaitForComfirmationPage from "../pages/website/user/booked/wait-confirmation";
import SuccessfullBookedPage from "../pages/website/user/booked/successfull";
import ConfirmBookingUser from "../pages/website/user/booked/confirm";
import CencelledBookedUserPage from "../pages/website/user/booked/cencelled";
import SearchBookingAdmin from "../pages/admin/booking/search-booking";
import ContentPage from "../pages/website/content/ContentPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?">
          <LayoutAdmin>
            <Switch>
              <Route exact path="/admin">
                <Redirect to="/admin/dashboard" />
              </Route>
              <Route exact path="/admin/dashboard">
                <AdminDashboard title="Dịch vụ" />
              </Route>
              <Route exact path="/admin/service/list">
                <ListServicePage title="Dịch vụ" />
              </Route>
              <Route exact path="/admin/service/add">
                <AddServicePage title="Dịch vụ" />
              </Route>
              <Route exact path="/admin/service/edit/:id">
                <EditServicePage title="Dịch vụ" />
              </Route>
              <Route exact path="/admin/booking/list">
                <ListBooking />
              </Route>
              <Route exact path="/admin/booking/detail/:id">
                <DetailBookingPage />
              </Route>

              <Route exact path="/admin/user/listUser">
                <ListUserPage title="User" />
              </Route>
              <Route exact path="/admin/user/addUser">
                <AddUserPage />
              </Route>
              <Route exact path="/admin/user/edit/:id">
                <EditUserPage />
              </Route>
              <Route exact path="/admin/booking/search">
                <SearchBookingAdmin />
              </Route>
               
               
            
            </Switch>
          </LayoutAdmin>
        </Route>

        <Route path="/">
          <LayoutWebsite>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/register">
                <RegisterPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/quote">
                 <QuotePage/>
              </Route>
              <Route exact path="/content">
                 <ContentPage/>
              </Route>
              <BookedUserPage>
                <Switch>
                  <Route exact path="/user/booked">
                    <ListAllBookedUserPage />
                  </Route>
                  <Route exact path="/user/booked/type1">
                    <WaitForComfirmationPage />
                  </Route>
                  <Route exact path="/user/booked/type2">
                    <ConfirmBookingUser />
                  </Route>
                  <Route exact path="/user/booked/type3">
                    <ListBookedFixingUser />
                  </Route>
                  <Route exact path="/user/booked/type4">
                    <SuccessfullBookedPage />
                  </Route>
                  <Route exact path="/user/booked/type5">
                    <CencelledBookedUserPage />
                  </Route>
                </Switch>
              </BookedUserPage>
            </Switch>
          </LayoutWebsite>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
