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
    if (this.state.url && this.state.method) {
      let object = {
        url: this.state.url,
        method: this.state.method,
        body: this.state.body
      }
      this.items.push(object);
      await fetch(`${this.state.url}`, {
        method: "POST",
        body: JSON.stringify({}),
        url:this.state.url,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
        



      localStorage.setItem("url", `${this.state.url}`);
      localStorage.setItem("method", `${this.state.method}`);
      localStorage.setItem("body", `${this.state.body}`);
      items.push(this.state.method + " " + this.state.url + " " + this.state.body);
      localStorage.setItem("item", `${items}`);
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

      console.log('alaa', items);
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
  handleBody = e => {
    const body = e.target.value;
    this.setState({ body });
  };
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
          <textarea name='url' type='text' onChange={this.handleBody} />
        </form>
      </>
    );
  }
}
export default Form;
