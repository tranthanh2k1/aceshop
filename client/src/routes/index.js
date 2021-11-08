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
              <Route path="/admin/dashboard">
                <AdminDashboard title="Dịch vụ" />
              </Route>
              <Route path="/admin/service/list">
                <ListServicePage title="Dịch vụ" />
              </Route>
              <Route path="/admin/service/add">
                <AddServicePage title="Dịch vụ" />
              </Route>
              <Route path="/admin/service/edit/:id">
                <EditServicePage title="Dịch vụ" />
              </Route>
              <Route path="/admin/services"></Route>
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
            </Switch>
          </LayoutWebsite>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
