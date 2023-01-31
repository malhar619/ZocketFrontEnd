import React from "react";

import Cake from '../../assets/cake.png';
import Custurd from '../../assets/Custurd.png';
import Browine from '../../assets/Browine.png';
import chocolate from '../../assets/chocolate.png';
import './step4.css';

const Step4 = props => {
    if (props.currentStep !== 4) {
        return null;
    }

    return (
        <>
            <div className="step-four--container">
                <label>Ready to go <span className="step-four--header-span">{"(Step 4 of 4)"}</span></label>
                <hr />

                <div className="step-four--preview-body">
                    <div className="step-four--preview">
                        <label className="step-four--preview-lable">
                            <input
                                type="radio"
                                name="preview"
                                id="preview"
                                value="preview"
                            />
                            <div className="step-four--preview-span">
                                <div className="step-four--preview-header">
                                    <img className="step-four--image-one" src={Cake} alt='Cake' />
                                    <div>
                                        <p><strong>Mukund Cake Shop</strong></p>
                                        <p>Sponsered</p>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="step-four--preview-img-section">
                                    <img className="step-four--image-two" src={chocolate} alt='Cake' />
                                    <p>Mukund Cake Shop</p>
                                </div>
                                <div className="step-four--preview-buttons">
                                    <button>Change image</button>
                                    <button>Edit text</button>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="step-four--preview">
                        <label className="step-four--preview-lable">
                            <input
                                type="radio"
                                name="preview"
                                id="preview"
                                value="preview"
                            />
                            <div className="step-four--preview-span">
                                <div className="step-four--preview-header">
                                    <img className="step-four--image-one" src={Cake} alt='Cake' />
                                    <div>
                                        <p><strong>Mukund Cake Shop</strong></p>
                                        <p>Sponsered</p>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="step-four--preview-img-section">
                                    <img className="step-four--image-two" src={Custurd} alt='Cake' />
                                    <p>Mukund Cake Shop</p>
                                </div>
                                <div className="step-four--preview-buttons">
                                    <button>Change image</button>
                                    <button>Edit text</button>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="step-four--preview">
                        <label className="step-four--preview-lable">
                            <input
                                type="radio"
                                name="preview"
                                id="preview"
                                value="preview"
                            />
                            <div className="step-four--preview-span">
                                <div className="step-four--preview-header">
                                    <img className="step-four--image-one" src={Cake} alt='Cake' />
                                    <div>
                                        <p><strong>Mukund Cake Shop</strong></p>
                                        <p>Sponsered</p>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="step-four--preview-img-section">
                                    <img className="step-four--image-two" src={Browine} alt='Cake' />
                                    <p>Mukund Cake Shop</p>
                                </div>
                                <div className="step-four--preview-buttons">
                                    <button>Change image</button>
                                    <button>Edit text</button>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="step-four--preview">
                        <label className="step-four--preview-lable">
                            <input
                                type="radio"
                                name="preview"
                                id="preview"
                                value="preview"
                            />
                            <div className="step-four--preview-span">
                                <div className="step-four--preview-header">
                                    <img className="step-four--image-one" src={Cake} alt='Cake' />
                                    <div>
                                        <p><strong>Mukund Cake Shop</strong></p>
                                        <p>Sponsered</p>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="step-four--preview-img-section">
                                    <img className="step-four--image-two" src={Cake} alt='Cake' />
                                    <p>Mukund Cake Shop</p>
                                </div>
                                <div className="step-four--preview-buttons">
                                    <button>Change image</button>
                                    <button>Edit text</button>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step4;