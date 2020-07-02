import React from 'react';
import ReactDOM from 'react-dom';
class History extends React.Component {
    
    getdata()
    {
       let storage=JSON.parse(localStorage.getItem('item'));
       return storage.map((item,i)=>{
           console.log(item.url);
        return <li key={i}>{item.method }: {item.url }  </li>
        })
    
}

    render() {
        return (
            <ul className="history">
                {this.getdata()}
            <div></div>
            </ul>
        )
    }
}

export default History;