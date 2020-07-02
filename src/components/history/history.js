import React from 'react';
import ReactDOM from 'react-dom';


class History extends React.Component {
    render() {
        return (
            <ul className="history">
                {this.props.children}
            </ul>
        )
    }
}

export default History;