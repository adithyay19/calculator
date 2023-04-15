import React from 'react';
import './App.css';
// import DispScreen from './components/DispScreen';
// import CalcButtons from './components/CalcButtons';
import { Button, Container, Input } from '@mui/material';
// import { grey } from '@mui/material/colors';
// import Table from '@mui/material';


class App extends React.Component {
  render() {
    return(
      <div className='container'>
        {/* <DispScreen/> */}
        {/* <br></br> */}
        {/* <CalcButtons/> */}
        
        <table className='table'>
          <tr>
            <td colSpan={3}>
              <input/>
            </td>
            <td>
            <Button variant='contained'>=</Button>
            </td>
          </tr>
          <tr>
            <td><Button variant='contained'>7</Button></td>
            <td><Button variant='contained'>8</Button></td>
            <td><Button variant='contained'>9</Button></td>
            <td><Button variant='contained'>/</Button></td>
          </tr>
          <tr>
            <td><Button variant='contained'>4</Button></td>
            <td><Button variant='contained'>5</Button></td>
            <td><Button variant='contained'>6</Button></td>
            <td><Button variant='contained'>*</Button></td>
          </tr>
          <tr>
            <td><Button variant='contained'>1</Button></td>
            <td><Button variant='contained'>2</Button></td>
            <td><Button variant='contained'>3</Button></td>
            <td><Button variant='contained'>-</Button></td>
          </tr>
          <tr>
            <td><Button variant='contained'>DEL</Button></td>
            <td><Button variant='contained'>CLR</Button></td>
            <td><Button variant='contained'>0</Button></td>
            <td><Button variant='contained'>+</Button></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
