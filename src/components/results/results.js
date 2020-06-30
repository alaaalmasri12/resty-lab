import React from 'react';
import '../form/form.scss';
const Result = (props) => {
    return (
        <div>
                {
                    <section className="results">
                <div>Count: {props.count}</div>
                <span>Header:<pre>{JSON.stringify(props.headers, null, 2) }</pre></span>
                    <span className="method"><pre>{JSON.stringify(props.results, null, 2) }</pre></span>
                  </section>
                
                }
                </div>
    )                  
            
                            
                
}   
    
export default Result;