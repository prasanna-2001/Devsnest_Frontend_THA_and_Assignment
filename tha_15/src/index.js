import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class MyHelloWorldComponent extends React.Component{
  constructor(props){
      super(props);
      this.state = {name: 'Empty'};
  }

  render(){
      return React.createElement(
          'button',
          {
              onclick: () => {
                  this.State({name: 'changed name'});
              }
          },
          React.createElement(
              'h1',
              {},
              React.createElement('h2', {}, `Any button here ${this.State.name}`)
          )
      );
      // return <h1>Thuis s me </h1>



      //jsx
      
      // return(
      //     <div>
      //         <button onClick={() => this.setState({name: 'changed name'})}>
      //             fuffu panti {this.state.name}
      //         </button>
      //         <p>okay</p>
      //     </div>
      // );
  }
}

ReactDOM.render(
  // React.createElement('h1', {}, 'Nothing from my side'),
  React.createElement(MyHelloWorldComponent),

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

