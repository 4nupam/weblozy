import React, { useState } from 'react';
import './Tab.css'
import Filter from '../Filter/Filter';
import CP from '../ColorPanel/CP';
import TabContent from '../TabContent/TabContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faEllipsis,faSpider,faFile } from '@fortawesome/free-solid-svg-icons';


function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
        <div className="tab_container">
      <div className="tab-header">
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          All Results
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? 'active' : ''}
        >
          OWASP
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? 'active' : ''}
        >
         OWSAP TOP10
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={activeTab === 4 ? 'active' : ''}
        >
         CWE TOP25
        </button>
      </div>
      <div className="tab_right">
        <Filter/>
        <button>  <FontAwesomeIcon icon={faFolder}/> share</button>
        <button> <FontAwesomeIcon icon={faFile}/></button>
        <button> <FontAwesomeIcon icon={faSpider}/></button>
        <button> <FontAwesomeIcon icon={faEllipsis}/></button>
      </div>
      </div>
      <hr />
      <div className='Tab_cross'>
<div className="cross_circle">
<div className="cd1 cd1_cross">
    <span className='span_upper' id='span_orange'>N</span>
    <span>New</span>
    X
    </div>
    <div className="cd1 cd1_cross">
    <span className='span_upper' id='span_red'>N</span>
    <span>New</span>
    X
    </div>
    <div className="cd1 cd1_cross">
    <span className='span_upper' id='span_blue'>N</span>
    <span>New</span>
    X
    </div>
    <div className="cd1 cd1_cross">
    <span className='span_upper' id='span_orange'>N</span>
    <span>New</span>
    X
    </div>
</div>
      </div>
        <CP/>
      <div className="tab-content">
        {activeTab === 1 && <div> <TabContent/> </div>}
        {activeTab === 2 && <div><TabContent/> </div>}
        {activeTab === 3 && <div><TabContent/> </div>}
        {activeTab === 4 && <div><TabContent/> </div>}
      </div>
   
    </div>
  );
}

export default Tab;
