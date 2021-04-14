import React from 'react';
import './App.css';
import Header from './../Header/Header'
class App extends React.Component{
  
state = {
      headertext: "Name it!",  // state is a JS object used to save the data  which tend to change in future 
};
/*prop is used to transfer data from parent to child*/
         
  render(){            
    return (
      <div>        
        <Header headtitle = {this.state.headertext} />   {/*prop is used to transfer data from parent to child*/}
        {/* <button
        onClick = {() => {
          this.setState({           // the setstate method can change the value of variables declared in the state section
                   headertext : "wohooo! it got changed !!"   //just updating the state manually without setstate method won't render it to change
          });
        }}
        >lets click it </button>  */} 
      </div>
    ) 
    
  }
}


// function App() {
//   return (
   
//   );
// }

 export default App;
