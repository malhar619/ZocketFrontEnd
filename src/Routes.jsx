import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import CreateNewCampaign from "./components/CreateNewCampaign";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/campaign" element={<Campaign />} />
                    <Route exact path="/createNewCampaign" element={<CreateNewCampaign />} />
                </Routes>
			</Fragment>
        </BrowserRouter>
    );
};

export default AppRoutes;