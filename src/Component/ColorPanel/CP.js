import React from 'react'
import './CP.css'
function CP() {
    return (
        <>
            <div className="cp_container">
                <div className="cp1" id='cp_red'>
                  <span>1</span>
                  <p>Critical</p>
                </div>
                <div className="cp1" id='cp_dark_yellow'>
                <span>0</span>
                  <p>High</p>
                </div>
                <div className="cp1" id='cp_yellow'>
                <span>1</span>
                  <p>Medium</p>
                </div><div className="cp1" id='cp_green'>
                <span>0</span>
                  <p>Low</p>
                </div>
                <div className="cp1" id='cp_blue'>
                <span>1</span>
                  <p>Info</p>
                </div>
            </div>
        </>
    )
}

export default CP