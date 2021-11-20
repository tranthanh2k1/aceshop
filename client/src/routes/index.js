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
import HomePage from "../pages/website/home";
import LoginPage from "../pages/website/user/login";
import RegisterPage from "../pages/website/user/register";
import EditServicePage from "../pages/admin/services/edit-service";
import ListBooking from "../pages/admin/booking";
import DetailBookingPage from "../pages/admin/booking/detail-booking";
import ListAllBookedUserPage from "../pages/website/user/booked";
import ListBookedFixingUser from "../pages/website/user/booked/fixing";
import BookedUserPage from "../pages/website/user/booked/bookedUserRoute";
import WaitForComfirmationPage from "../pages/website/user/booked/wait-confirmation";
import SuccessfullBookedPage from "../pages/website/user/booked/successfull";
import CompletingBookedUserpage from "../pages/website/user/booked/completing-booked";
import CencelledBookedUserPage from "../pages/website/user/booked/cencelled";

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
              <BookedUserPage>
                <Switch>
                  <Route exact path="/user/booked">
                    <ListAllBookedUserPage />
                  </Route>
                  <Route exact path="/user/booked/type1">
                    <WaitForComfirmationPage />
                  </Route>
                  <Route exact path="/user/booked/type2">
                    <SuccessfullBookedPage />
                  </Route>
                  <Route exact path="/user/booked/type3">
                    <ListBookedFixingUser />
                  </Route>
                  <Route exact path="/user/booked/type4">
                    <CompletingBookedUserpage />
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
