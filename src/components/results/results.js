import React from 'react';
import '../form/form.scss';
import ReactJson from 'react-json-view'
const Result = (props) => {
    return (
        <div>
            {
                <section className="results">
                    <div>Count: {props.count}</div>
                    <span>Header:<ReactJson src={props.headers} /></span>
                    <span className="method"><ReactJson src={props.results} /></span>
                </section>

            }
        </div>
    )
}
export default Result;