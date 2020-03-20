import React from 'react';

const AutoCompleteBox = props => (
    <div style={{ "position": "absolute" }}>
        <div className="navbar-autocompletebox-container" style={{ "width": "706px" }}>
            <div className="navbar-autocompletebox-split-container navbar-autocompletebox-results-container" >
                <ul>
                    <li>
                        <a>
                            <span>
                                <span>h</span>
                                <span className="navbar-autocomplete-text">p laptop</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-autocompletebox-split-container navbar-autocompletebox-products-container">
                <ul>
                    <li>
                        <a className="navbar-relatedproduct-image">
                            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6361/6361116_sd.jpg;maxHeight=60;maxWidth=60" />
                        </a>
                        <div className="navbar-relatedproduct-detail">
                            <a>
                                <span className="navbar-relatedproduct-title">
                                    HP - 14" Laptop - AMD A9-Series - 4GB Memory - AMD Radeon R5 Graphics - 128GB Solid State Drive - Ash Silver
                                    </span>
                            </a>

                            <a>
                                <div className="navbar-rating-container">
                                    <span className="navbar-ministars" alt="84.00%">
                                        <span className="navbar-ministars-unfilled"></span>
                                        <span className="navbar-ministars-filled" style={{ "width": "50%" }}></span>
                                        
                                    </span>
                                    
                                    <span className="navbar-rating-text">4.2</span>
                                    
                                </div>

                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default AutoCompleteBox;