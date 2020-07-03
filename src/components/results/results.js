import React from 'react';
import '../form/form.scss';
import ReactJson from 'react-json-view'
const Result = (props) => {
    return (
        <div>
            
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