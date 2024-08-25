import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Balance from "./pages/balance/Balance";
import Profile from "./pages/profile/Profile";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/FAQ";
import Geography from "./pages/geography/GeographyChart";
import BarChart from "./pages/bar chart/BarChart";
import PieChart from "./pages/pie chart/PieChart";
import LineChart from "./pages/line chart/LineChart";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {<Route index element={<Dashboard />} />}
      {<Route path="/team" element={<Team />} />}
      {<Route path="/contacts" element={<Contacts />} />}
      {<Route path="/balance" element={<Balance />} />}
      {<Route path="/profile" element={<Profile />} />}
      {<Route path="/calendar" element={<Calendar />} />}
      {<Route path="/faq" element={<FAQ />} />}
      {<Route path="/barChart" element={<BarChart />} />}
      {<Route path="/pieChart" element={<PieChart />} />}
      {<Route path="/LineChart" element={<LineChart />} />}
      {<Route path="/GeographyChart" element={<Geography />} />}
      {<Route path="*" element={<NotFound />} />}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
