import React from 'react';

class App extends React.Component{
  render() {
    const greeting = "Hi!";
    const dom = <h1 className="foo">{greeting}</h1>;
    return (
      <React.Fragment>
        <label htmlFor="bar">
          bar
        </label>
        <input type="text" onChange={()=> {console.log("I am clicked.")}} />
      </React.Fragment>
    );
  }
}

export default App;