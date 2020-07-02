import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view'
const Result = (props) => {
    return (
        <section className='result'>
        <div>
               {
        <ReactJson src={props.headers} />
      }

      {
        <ReactJson src={props.results} />
      }

        </div>
        </section>
    )
}
export default Result;