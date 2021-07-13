import react from 'react';
import ReactDOM from 'react-dom';

class MyHelloWorldComponent extends ReactDOM.Component{
    constructor(props){
        this(props);
        this.state = {name: 'Empty'};
    }

    render(){
        return ReactElement(
            'button',
            {
                onclick: () => {
                    this.State({name: 'changed name'});
                }
            },
            React.createElement(
                'h1',
                {},
                React.createElement('h2', {},/*'Any bi=utton here*/ '${this.state.name}')
            )
        );
        return <h1>Thuis s me </h1>



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

ReactDom.render(
    // React.createElement('h1', {}, 'Nothing from my side'),
    React.createElement(MyHelloWorldComponent),

    document.getElementById('root')
);