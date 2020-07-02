import React from 'react';
import './app.scss';
import Header from './components/header/index'
import Footer from './components/footer/index'
import Form from '../src/components/form/form';
import Result from './components/results/results';
import History from './components/history/history';
import {Route} from 'react-router-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            count:0,
            results: [],
            headers:[],
            item:[]
        };
    }
    handleForm = (results,count,headers,item) => {
      
        this.setState({results,count,headers,item});
    }
    toggleLoading = () => {
        console.log("this.state.loading: ",this.state.loading)
        this.setState({ loading: !this.state.loading })
      }

    render() {
        return (
            <>
                    
            <Header />
          <Route  path='/' exact >
                <Form toggleLoading={this.toggleLoading}  handler={this.handleForm} />
                <Result  loading={this.state.loading}  headers={this.state.headers} count={this.state.count} results={this.state.results} />
                </Route>
                <Route path='/history' >
                <History  />
                </Route>

                <Footer />

            </>
        )
    }
}

export default App;