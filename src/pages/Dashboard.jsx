import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../Compontents/DashProfie";
import DashSidebar from "../Compontents/DashSidebar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromURL = urlParams.get("tab");
    if (tabfromURL) {
      setTab(tabfromURL);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div>{tab === "profile" && <DashSidebar />}</div>
      <div>
        <DashProfile />
      </div>
    </div>
  );
};

export default Dashboard;
