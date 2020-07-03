import React from 'react';
import superagent from 'superagent';
import './form.scss';
var items = [];
var count;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
      body: {},
    };
    this.items = [];
  }
  handleSubmit = async e => {
    e.preventDefault();
    this.props.toggleLoading();
    if (this.state.url && this.state.method) {
      let object = {
        url: this.state.url,
        method: this.state.method,
        body: this.state.body
      }
      console.log('test 1', this.items);

      if (this.state.method === 'post') {
        let history=JSON.parse(localStorage.getItem("item"));
        if(history)
        {
          this.items=history;
        }
        this.items.push(object);
        localStorage.setItem("item", JSON.stringify(this.items)); 
        console.log(this.items); 
        const requestOptions = {
          method: this.state.method.toUpperCase(),
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(this.state.body.data)
        };
        await fetch(this.state.url, requestOptions)
          .then(data => this.setState(this.state.body.data))
      }
      else if (this.state.method === "put") {
        let history=JSON.parse(localStorage.getItem("item"));
        if(history)
        {
          this.items=history;
        }
        this.items.push(object);
        localStorage.setItem("item", JSON.stringify(this.items));
        const requestOptions = {
          method: this.state.method.toUpperCase(),
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(this.state.body.data)
        };
        await fetch(this.state.url, requestOptions)
          .then(data => this.setState(this.state.body.data))
      }
      else if (this.state.method === 'delete') {
        let history=JSON.parse(localStorage.getItem("item"));
        if(history)
        {
          this.items=history;
        }
        this.items.push(object);
        localStorage.setItem("item", JSON.stringify(this.items));
        const requestOptions = {
          method: this.state.method.toUpperCase(),
          cache: 'no-cache',
          credentials: 'same-origin',
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        };
        await fetch(this.state.url, requestOptions)
          .then(data => this.setState(this.state.body.data))
      }
      let raw = await fetch(this.state.url);
      console.log('raw', raw);
      let data = await raw.json();
      let header = await superagent.get(this.state.url);
      let Headers = header.headers;
      if (data.count) {
        count = data.count;
      }
      else {
        count = Object.keys(data).length;
      }
      console.log("data.results : ", data);
      this.props.handler(data, count, Headers, items);
      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      let url = '';
      let method = '';
      this.setState({ request, url, method, items });
    }
    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };
  handleChangeMethod = e => {
    let method = e.target.id;
    this.setState({ method });
  };
  bodyHandel = e => {
    const data = JSON.parse(e.target.value);
    this.setState({ body: { data } });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
          <textarea name='url' type='text' onChange={this.bodyHandel} />
        </form>
      </>
    );
  }
}
export default Form;
