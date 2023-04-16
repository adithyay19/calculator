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
            <Button variant='contained'>=</Button>
            </td>
          </tr>
          <tr>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
          </tr>
          <tr>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
            <td><CalcButtons char='7'/></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
