import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div  className="form">
                <h1>Employee-Form</h1>
                <div>
                    <placeholder className="placeholder">name</placeholder>
                    <input type="text" />
                </div>
                <div>
                    <placeholder className="placeholder">email</placeholder>
                    <input type="email" />
                </div>
                <div>
                    <placeholder className="placeholder">phone</placeholder>
                    <input type="text" />
                </div>
                <div>
                    <placeholder className="placeholder">address</placeholder>
                    <input type="text" />
                </div>
                <div>
                    <placeholder className="placeholder">message</placeholder>
                    <input type="text" />
                </div>
                <button>submit</button>
            </div>
        );
    }
}

export default Form;