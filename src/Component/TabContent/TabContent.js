import React from 'react';
import ReactDOM from 'react-dom';
import './TabContent.css'
import CP from '../ColorPanel/CP';



class TabContent extends React.Component {
  render() {
    return (
      <div className='t_container'>
        {/* <h2>Only One Open</h2> */}
        <Accordion multipleOpen={false}>
          <AccordionList expanded={true} id="1" key="1" headTitle="
A1 - Broken Access Control">
            <CP />
            <h3 style={{ color: "grey" }}>Description</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias,
            labore accusamus voluptates quidem nostrum cupiditate cum vel voluptatem aliquam?
          </AccordionList>
          <AccordionList expanded={false} id="2" key="2" headTitle="
A2 - Cryptographic Failures">
            <CP />
            <h3 style={{ color: "grey" }}>Description</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias,
            labore accusamus voluptates quidem nostrum cupiditate cum vel voluptatem aliquam?
          </AccordionList>
          <AccordionList expanded={false} id="3" key="3" headTitle="Injection">
            <h3 style={{ color: "grey" }}>Description</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias,
            labore accusamus voluptates quidem nostrum cupiditate cum vel voluptatem aliquam?
          </AccordionList>
          <AccordionList expanded={false} id="4" key="4" headTitle="A4 - Insecure Design">
            <h3 style={{ color: "grey" }}>Description</h3>
            <CP />
          </AccordionList>
        </Accordion>
        <h2>Nested Accordion</h2>
        <Accordion multipleOpen={false}>
          <AccordionList expanded={true} id="9" key="9" headTitle="A5 - Security Misconfiguration">
            <h3 style={{ color: "grey" }}>Description</h3>
            Security measures that are not secured or configured correctly are referred to as security misconfiguration. Default configurations, open ports, rights, improper HTTP headers,
            etc. are some common examples that make an application vulnerable to breach.
            <br />
            <br />
            <Accordion multipleOpen={false}>
              <AccordionList
                expanded={false}
                id="10"
                key="10"
                headTitle="Clickjacking"
              >
                <h3>Recommendation</h3>
                Mitigating Clickjacking on a PHP, MySQL and Apache Tech Stack on Debian
                Install the Apache mod_headers module.
              </AccordionList>
              <AccordionList
                expanded={false}
                id="11"
                key="11"
                headTitle="X-XSS-Protection header not implemented"
              >
                <h3>Recommendation</h3>
                Mitigating Clickjacking on a PHP, MySQL and Apache Tech Stack on Debian
              </AccordionList>
              <AccordionList
                expanded={false}
                id="12"
                key="12"
                headTitle="A6 - Vulnerable and Outdated Components"
              >
                <h3>Recommendation</h3>
                Mitigating Clickjacking on a PHP, MySQL and Apache Tech Stack on Debian
              </AccordionList>
            </Accordion>
          </AccordionList>
          <AccordionList expanded={false} id="13" key="13" headTitle="Server-Side Request Forgery (SSRF)">
            <h3>Description</h3>
            When a web application fetches a remote resource, server-side request forgery occurs when the user-supplied URL is not validated. Even if the programme is secured by a firewall, VPN, or other sort of network access control list,
            attackers can compel it to send a forged request to an unexpected location (ACL).
          </AccordionList>
        </Accordion>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndexes: this.getInitialActiveIndexes(),
      acdTransition: false,
    };
  }

  getInitialActiveIndexes() {
    const activeIndexes = [];
    React.Children.forEach(this.props.children, (item, index) => {
      if (item.props.expanded) {
        activeIndexes.push(item.props.id);
      }
    });
    return activeIndexes;
  }

  addTransitionClass() {
    return this.state.acdTransition ? 'acd-transition' : '';
  }

  handleClick(acdID) {
    const multipleOpen = this.props.multipleOpen;
    const { activeIndexes } = this.state;
    const index = activeIndexes.indexOf(acdID);

    if (multipleOpen) {
      if (index !== -1) {
        activeIndexes.splice(index, 1);
      } else {
        activeIndexes.push(acdID);
      }
    } else {
      if (index !== -1) {
        activeIndexes.splice(index, 1);
      } else {
        activeIndexes.length = 0; // Only one open, so clear all active indexes.
        activeIndexes.push(acdID);
      }
    }

    this.setState({ activeIndexes, acdTransition: true });
  }

  isExpanded(acdID) {
    return this.state.activeIndexes.includes(acdID) ? 'actived' : '';
  }

  render() {
    const childArr = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    const items = childArr.map((child, i) => {
      return React.cloneElement(child, {
        isExpanded: this.isExpanded.bind(this),
        handleClick: this.handleClick.bind(this),
        addTransitionClass: this.addTransitionClass.bind(this),
        key: i,
      });
    });

    return <div className={`accordion-box`}>{items}</div>;
  }
}

class AccordionList extends React.Component {
  render() {
    return (
      <div
        className={`accordion-list ${this.props.isExpanded(
          this.props.id
        )} ${this.props.addTransitionClass()}`}
      >
        <div
          className={`accordion-label`}
          onClick={() => {
            this.props.handleClick(this.props.id);
          }}
        >
          {this.props.headTitle} <span className="acd-arrow"></span>
        </div>
        <div className={`accordion-content`}>
          <div className="accordion-inner">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TabContent />, document.getElementById('root'));
export default TabContent;