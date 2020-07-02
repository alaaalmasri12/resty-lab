import React from 'react';
import '../results/results.scss';
import ReactJson from 'react-json-view'
const Result = (props) => {
    return (

<div>
<div className={`loading-${props.loading}`} /> 
        {
        <ReactJson src={props.headers} />
      }

      {
        <ReactJson src={props.results} />
      }
        </div>
        
    )

}
export default Result;