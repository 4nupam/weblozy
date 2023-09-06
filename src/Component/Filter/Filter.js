import React, { Component } from 'react';
import './Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItems: new Set(),
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        
      ],
    };
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleItem = (item) => {
    const { selectedItems } = this.state;
    if (selectedItems.has(item)) {
      selectedItems.delete(item);
    } else {
      selectedItems.add(item);
    }
    this.setState({ selectedItems });
  };

  render() {
    const { isOpen, selectedItems, items } = this.state;

    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={this.toggleDropdown}>
          {isOpen ? 'Filter' : 'Filter'} 
          <FontAwesomeIcon icon={faFilter}/>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {items.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.has(item)}
                  onChange={() => this.toggleItem(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Filter;
