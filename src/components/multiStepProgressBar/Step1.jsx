import React, { useState } from "react";
import './step1.css';
import { VscCallIncoming } from 'react-icons/vsc';
import { BiMessageDetail } from 'react-icons/bi';
import { BsPersonPlus, BsPeople, BsShop } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { TbClick, TbClipboardText } from 'react-icons/tb';
import { RiInstallLine } from 'react-icons/ri';

const Step1 = props => {
    const [selectedChoice, setSelectedChoice] = useState("");
    if (props.currentStep !== 1) {
        return null;
    }
    const handleClick = e => {
        if (!e.target.checked) {
            setSelectedChoice(selectedChoice.filter((name) => name !== e.target.value))
        } else {
            setSelectedChoice(selectedChoice.concat(e.target.value))
        }
    };
    return (
        <>
            <div className="step-one--container">
                <label>What you want to do ? <span className="step-one--header-span">{"(Step 1 of 4)"}</span></label>
                <hr />
                <div className="step-one--options-grid">
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="getLeadsAsCall"
                                value="Get Leads As Calls"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <VscCallIncoming size={20} />
                                <div>
                                    <p><strong>Get Leads As Calls</strong></p>
                                    <p>Reach broad audience and get leads through calls</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="getLeadsAsFacebookMessages"
                                value="Get Leads As Facebook Messages"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <BiMessageDetail size={20} />
                                <div>
                                    <p><strong>Get Leads As Facebook Messages</strong></p>
                                    <p>Get more FB messages from leads</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="increasePageFollowers"
                                value="Increase Page Followers"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <BsPersonPlus size={20} />
                                <div>
                                    <p><strong>Increase Page Followers</strong></p>
                                    <p>Encourage customers to follow your page</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"

                                id="getCustomerLeads"

                                value="Get Customer Leads"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <BsPeople size={20} />
                                <div>
                                    <p><strong>Get Customer Leads</strong></p>
                                    <p>Encourage customers to take action</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="getMoreYoutubeViews"
                                value="Get More Youtube Views"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <AiOutlineEye size={20} />
                                <div>
                                    <p><strong>Get More Youtube Views</strong></p>
                                    <p>Increase organic views by obtaining user attention</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="getMoreWebsiteTraffic"
                                value="Get More Website Traffic"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <TbClick size={20} />
                                <div>
                                    <p><strong>Get More Website Traffic</strong></p>
                                    <p>Get the right people to visit your website</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="increaseLiveStoreTraffic"
                                value="Increase Live Store Traffic"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <BsShop size={20} />
                                <div>
                                    <p><strong>Increase Live Store Traffic</strong></p>
                                    <p>Drive visit to local stores, restaurents & Dealerships</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="increaseYourAppInstalls"
                                value="Increase Your App Installs"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <RiInstallLine size={20} />
                                <div>
                                    <p><strong>Increase Your App Installs</strong></p>
                                    <p>Get more installs, interactions for your app</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="campaignName"
                                id="increaseTheCatalogueSales"
                                value="Increase The Catalogue Sales"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <TbClipboardText size={20} />
                                <div>
                                    <p><strong>Increase The Catalogue Sales</strong></p>
                                    <p>Drive the sales of your catalogue and get more leads</p>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Step1;