import React from 'react';

import './form.scss';
var count;
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.url && this.state.method) {
      console.log('entered the function');
      console.log('state url',this.state.url);
      let raw = await fetch(this.state.url);
      console.log('raw',raw);
      let data = await raw.json();
      // let headers=raw.headers;
      // raw.headers.forEach((val, key) => {
      //   console.log(key=> key, value=>value)
      // });
      // console.log('headers',headers);
      // if(data.count)
      if (data.count)
      {
         count=data.count;
      }
      else
      {
       count=Object.keys(data).length;

      }

      console.log("data.results : ", data);

      this.props.handler(data,count);
      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      let url = '';
      let method = '';

      this.setState({ request, url, method });
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

    let method = 'get'||e.target.id;
    this.setState({ method });
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
        </form>
        
      </>
    );
  }
}
export default Form;
