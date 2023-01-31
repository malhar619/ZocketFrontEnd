import React from 'react';
import Layout from '../layout/Layout';
import MasterForm from './multiStepProgressBar/MasterForm';
import './createNewCampaign.css';
const CreateNewCampaign = () => {
    const customProgressBar = () => {
        return (
            <div className='create-new-campaign--progress-bar'>
                <MasterForm />
            </div>
        );
    };
    return (
        <Layout>
            <div className='create-new-campaign--container'>
                <div className="create-new-campaign--header">
                    <h4>Your Ad Campaign</h4>
                    <p>Launch your ad in just 4 easy steps</p>
                </div>
                {customProgressBar()}
            </div>
        </Layout>
    );
};
export default CreateNewCampaign;