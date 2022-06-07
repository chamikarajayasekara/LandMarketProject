import React from 'react';

function SideBar(props) {
    return (
        <div>
            <div className="product-description-sidebar">
                <div className="contact-agent-header">
                    Meet Agent
                </div>
                <div className="contact-agent-body">
                    <div className="sub-head-desc">
                        Tharanga Lands - Kottawa
                    </div>
                    <div className="sub-head-desc">
                       0771234567
                    </div>
                </div>
                <hr/>
                <div className="contact-agent-footer">
                    <div className="call-btn">
                        Call Us
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;