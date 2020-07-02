import React from 'react';
import './app.scss';
import Header from './components/header/index'
import Footer from './components/footer/index'
import Form from '../src/components/form/form';
import Result from './components/results/results';
import Route from './components/routes';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            results: [],
            headers:[],
            item:[]
        };
    }
    handleForm = (results,count,headers,item) => {
      
        this.setState({results,count,headers,item});
    }

    render() {
        return (
            <>
            <Header />
          <Route  item={this.state.item} />
                <Form handler={this.handleForm} />
                <Result headers={this.state.headers} count={this.state.count} results={this.state.results} />
                <Footer />
            </>
        )
    }
}

export default App;