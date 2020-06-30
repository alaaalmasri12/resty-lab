import React from 'react';
import './app.scss';
import Form from '../src/components/form/form';
import Result from './components/results/results';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            results: [],
            headers:[]
        };
    }
    handleForm = (results,count,headers) => {
        this.setState({results,count,headers});
    }

    render() {
        return (
            <>
                <Form handler={this.handleForm} />
                <Result headers={this.state.headers} count={this.state.count} results={this.state.results} />
            </>
        )
    }
}

export default App;