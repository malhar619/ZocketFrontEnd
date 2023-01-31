import React, { useState } from "react";
import TabNavItem from '../tabComponents/TabNavItem';
import TabContent from '../tabComponents/TabContent';
import './step3.css';

const Step3 = props => {
    const [activeTab, setActiveTab] = useState("tab1");
    if (props.currentStep !== 3) {
        return null;
    }
    return (
        <>
            <div className="step-three--container">
                <label>Campaign Settings <span className="step-three--header-span">{"(Step 3 of 4)"}</span></label>
                <hr />
                <p><u>Budget and Dates Info</u></p>
                <div className="step-three--dates-info">
                    <label>
                        Start date
                        <input
                            type='date'
                            name="startDate"
                            value={props.startDate}
                            onChange={props.handleChange}
                        />
                    </label>
                    <label>
                        End date
                        <input
                            type='date'
                            name="endDate"
                            value={props.endDate}
                            onChange={props.handleChange}
                        />
                    </label>
                </div>
                <div className="step-three--budget-info">
                    <label>
                        Enter campaign budget
                        <input
                            type="range"
                            id="budget"
                            name="budget"
                            min="100"
                            max="100000"
                            step="1"
                            value={props.budget}
                            onChange={props.handleChange}
                        />
                    </label>
                    <div className="step-three--budget-info-range">
                        <p>100</p>
                        <p>100000</p>
                    </div>
                </div>

                <div className="step-three--location-info">
                    <p><u>Location info</u></p>
                    <p className="step-three--location-info-location-type">Location type</p>
                    <div className="step-three--location-info-tabs">
                        <ul className="step-three--location-info-tab-items">
                            <TabNavItem
                                title="Location"
                                id="tab1"
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            <TabNavItem
                                title="Radius"
                                id="tab2"
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </ul>
                    </div>
                    <div className="step-three--location-info-tab-content">
                        <TabContent id="tab1" activeTab={activeTab}>
                            <label>
                                <input
                                    className="step-three--location-info-tab-content-location"
                                    type="text"
                                    name="location"
                                    value={props.location}
                                    onChange={props.handleChange}
                                    placeholder="Select a place name, address or co-ordinates"
                                    />
                            </label>
                        </TabContent>
                        <TabContent id="tab2" activeTab={activeTab}>
                            <label className="step-three--location-info-tab-content-radius-label">
                                Select target radius
                                <input
                                    className="step-three--location-info-tab-content-radius"
                                    type="range"
                                    id="radius"
                                    name="radius"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={props.radius}
                                    onChange={props.handleChange}
                                />
                            </label>
                            <div className="step-three--radius-range">
                                <p>1</p>
                                <p>30</p>
                            </div>
                        </TabContent>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Step3;