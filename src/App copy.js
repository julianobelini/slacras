
import './App.css';
import {Component} from 'react';



class App extends Component{


  state = {
    name1: 'Time um',
    cont: 0,
    name2: 'Time Dois',
    cont2:0,
  }


  mudaNome = () => {

    this.setState({name1: document.getElementById('nome').value, cont:0,
                  name2: document.getElementById('nome2').value, cont2:0
  
  })
      document.getElementById('forms').style.display = 'none';
      document.getElementById('marcadores').style.display = 'block';

  }

  incrementa = () => {
    const{cont} = this.state
    this.setState({cont: cont + 1})
  }

  decrementa = () =>{
    const{cont} = this.state
    this.setState({cont: cont - 1})
  }

  incrementa2 = () => {
    const{cont2} = this.state
    this.setState({cont2: cont2 + 1})
  }

  decrementa2 = () =>{
    const{cont2} = this.state
    this.setState({cont2: cont2 - 1})
  }


  

  render(){

    const{name1, name2, cont2, cont} = this.state;

    

     return (

  <div className='teste'>
  <div className="App">
      <header className="App-header">


          <div id='forms'>

        
          <p><label>
            <p><span className='texto'>Digite nome player 1</span></p>
            <p><input type="text" class="input_text" name="nome " id="nome" /></p>
          </label>
          </p>

          <p><label>
            <p><span className='texto'>Digite nome player 2</span></p>
            <p><input type="text" class="input_text" name="nome " id="nome2" /></p>
          </label>
          </p>

          <button onClick={this.mudaNome} className="MudaNome">Start</button>

          </div>


          <div className='marcadores' id='marcadores'>
          <div className='pessoa'>
        
            <p className='texto'>{name1}</p>
            <p className='texto'>{cont}</p>

            <button onClick={this.incrementa} className="ValorMenos">Valor +</button>

            <button onClick={this.decrementa}className="ValorMais">Valor -</button>

          </div>

          <div className='pessoa'>

            <p className='texto'>{name2}</p>
            <p className='texto'>{cont2}</p>

            <button onClick={this.incrementa2} className="ValorMenos">Valor +</button>

            <button onClick={this.decrementa2}className="ValorMais">Valor -</button>

          </div>
          </div>


      </header>

    </div>


  </div>
  );
  }


}

export default App;
