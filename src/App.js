import React from 'react';
import './App.css';
// import DispScreen from './components/DispScreen';
// import CalcButtons from './components/CalcButtons';
import { Button } from '@mui/material';
import DispScreen from './components/DispScreen';
import CalcButtons from './components/CalcButtons';
// import { grey } from '@mui/material/colors';
// import Table from '@mui/material';



// const num = document.getElementById('result');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dispText: "TEXT"
    }
    this.display = this.display.bind(this);
  }

  display(char) {
    console.log(char);
    this.setState({
      dispText: char
    })
  }

  render() {
    return(
      <div className='container'>
        <table className='table'>
          <tr>
            <td colSpan={3}>
              <DispScreen text={this.state.dispText}/>
            </td>
            <td>
            <CalcButtons char='='/>
            </td>
          </tr>
          <tr>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='8'/></td>
            <td><CalcButtons char='9'/></td>
            <td><CalcButtons char='/'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='4'/></td>
            <td><CalcButtons char='5'/></td>
            <td><CalcButtons char='6'/></td>
            <td><CalcButtons char='*'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='1'/></td>
            <td><CalcButtons char='2'/></td>
            <td><CalcButtons char='3'/></td>
            <td><CalcButtons char='-'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='CLR'/></td>
            <td><CalcButtons char='DEL'/></td>
            <td><CalcButtons char='0'/></td>
            <td><CalcButtons char='+'/></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
