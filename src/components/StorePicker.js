import React, { Fragment } from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // stop the form from submitting
        event.preventDefault();

        // get text from that input
        const storeName = this.myInput.value.value;
        // change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
      return (
        <form className='store-selector' onSubmit={ this.goToStore }>
          <h2>Please enter a store</h2>
            <button onClick={this.handleClick}>Click me</button>
          <input type='text'
                 ref={this.myInput}
                 required placeholder='Store Name'
                 defaultValue={ getFunName() }
          />
          <button type='submit'> Visit store </button>
        </form>
      )
    }
}

export default StorePicker;
