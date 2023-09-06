import React from 'react'
import './CD.css'

function CD() {
    return (
        <div className="CD_box">
            <div className="cd_container">
                <div className="cd_left">
                    <div className="critical">
                        <div className="upper" id='cd_red'>
                            <h4>9</h4>
                            <p>Critical</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="critical">
                        <div className="upper" id='cd_Yellow'>
                            <h4>9</h4>
                            <p>High</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="critical">
                        <div className="upper" id='yellow-color'>
                            <h4>9</h4>
                            <p>Medium</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="critical">
                        <div className="upper" id='cd_green'>
                            <h4>9</h4>
                            <p>Low</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="critical">
                        <div className="upper" id='cd_blue'>
                            <h4>9</h4>
                            <p>Info</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="critical">
                        <div className="upper" id='cd_grey'>
                            <h4>9</h4>
                            <p>Total</p>
                        </div>
                        <div className="lower">
                            <div className="l_span">
                                <span className='span_upper' id='span_orange'>N</span>
                    
                                <span className='marks' className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_blue'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_red'>N</span>
                                <span className='marks'>0</span>
                            </div>
                            <div className="l_span">
                                <span className='span_upper' id='span_green'>N</span>
                                <span className='marks'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cd_right">
<div className="R_upper">
<div className="R_result">2</div>
</div>
<div className="R_lower">
    
    <span className='R_lower_span'>Not Good</span>
</div>
                </div>
            </div>
<div className="cd_bottom">
    <div className="cd1">
    <span className='span_upper' id='span_orange'>N</span>
    <span>New</span>
    </div>
    <div className="cd1">
    <span className='span_upper' id='span_blue'>R</span>
    <span>Reopened</span>
    </div>
    <div className="cd1">
    <span className='span_upper' id='span_red'>NF</span>
    <span>Not Fixed</span>
    </div>
    <div className="cd1">
    <span className='span_upper' id='span_green'>F</span>
    <span>Fixed</span>
    </div>
</div>
        </div>
    )
}

export default CD