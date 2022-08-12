
import './App.css';
import {Component} from 'react';



class App extends Component{


  state = {
    name1: 'Time um',
    cont: 0,
    name2: 'Time Dois',
    cont2:0,
    name3: 'Time um',
    cont3:0,
    name4: 'Time Dois',
    cont4:0,

  }


  comeca = () =>{

    var numberplayers = document.getElementById("numberplayers").value;


    if (numberplayers > 3){

      document.getElementById('forms').style.display = 'block';
      document.getElementById('player1form').style.display = 'block';
      document.getElementById('player2form').style.display = 'block';
      document.getElementById('player3form').style.display = 'block';
      document.getElementById('player4form').style.display = 'block';
      document.getElementById('numberplayersdiv').style.display = 'none';

      } else { if (numberplayers > 2 ) {

      document.getElementById('forms').style.display = 'block';
      document.getElementById('player1form').style.display = 'block';
      document.getElementById('player2form').style.display = 'block';
      document.getElementById('player3form').style.display = 'block';
      document.getElementById('numberplayersdiv').style.display = 'none';



      } else {
      
      document.getElementById('forms').style.display = 'block';
      document.getElementById('player1form').style.display = 'block';
      document.getElementById('player2form').style.display = 'block';
      document.getElementById('numberplayersdiv').style.display = 'none';

    }}



  } 

  reestart = () =>{

    document.getElementById('numberplayersdiv').style.display = 'block';
    document.getElementById('TeladeWin').style.display = 'none';

  }

  mudaNome = () => {

    var numberplayers = document.getElementById("numberplayers").value;


    document.getElementById('forms').style.display = 'none';
    document.getElementById('marcadores').style.display = 'block';
    document.getElementById('TeladeWin').style.display = 'none';

    if (numberplayers > 3){

      this.setState({name1: document.getElementById('nome').value, cont:20,
                     name2: document.getElementById('nome2').value, cont2:20,
                     name3: document.getElementById('nome3').value, cont3:20,
                     name4: document.getElementById('nome4').value, cont4:20
      })
      document.getElementById('player1').style.display = 'block';
      document.getElementById('player2').style.display = 'block';
      document.getElementById('player3').style.display = 'block';
      document.getElementById('player4').style.display = 'block';

      } else { if (numberplayers > 2 ) {

      this.setState({name1: document.getElementById('nome').value, cont:20,
                     name2: document.getElementById('nome2').value, cont2:20,
                     name3: document.getElementById('nome3').value, cont3:20
      })
      document.getElementById('player1').style.display = 'block';
      document.getElementById('player2').style.display = 'block';
      document.getElementById('player3').style.display = 'block';


      } else {

      this.setState({name1: document.getElementById('nome').value, cont:20,
                     name2: document.getElementById('nome2').value, cont2:20,
      })
      document.getElementById('player1').style.display = 'block';
      document.getElementById('player2').style.display = 'block';
 
    }}

  }

  incrementa = () => {
    const{cont} = this.state
    this.setState({cont: cont + 1})
  }

  decrementa = () =>{
    const{cont4, cont, cont2, cont3} = this.state
    this.setState({cont: cont - 1})

    var veriffy = cont4 + cont2 + cont3


    if(veriffy < 1){
      document.getElementById('forms').style.display = 'none';
      document.getElementById('TeladeWin').style.display = 'block';
      document.getElementById('marcadores').style.display = 'none';
    }

  }

  incrementa2 = () => {
    const{cont2} = this.state
    this.setState({cont2: cont2 + 1})
  }

  decrementa2 = () =>{
    const{cont4, cont, cont2, cont3} = this.state
    this.setState({cont2: cont2 - 1})

    var veriffy = cont + cont4 + cont3


    if(veriffy < 1){
      document.getElementById('forms').style.display = 'none';
      document.getElementById('TeladeWin').style.display = 'block';
      document.getElementById('marcadores').style.display = 'none';
    }

    
  }

  incrementa3 = () => {
    const{cont3} = this.state
    this.setState({cont3: cont3 + 1})
  }

  decrementa3 = () =>{
    const{cont4, cont, cont2, cont3} = this.state
    this.setState({cont3: cont3 - 1})

    var veriffy = cont + cont2 + cont4



    if(veriffy < 1){
      document.getElementById('forms').style.display = 'none';
      document.getElementById('TeladeWin').style.display = 'block';
      document.getElementById('marcadores').style.display = 'none';
    }

    
  }

  incrementa4 = () => {
    const{cont4} = this.state
    this.setState({cont4: cont4 + 1})
  }

  decrementa4 = () =>{
    const{cont4, cont, cont2, cont3} = this.state
    this.setState({cont4: cont4 - 1})

    var veriffy = cont + cont2 + cont3



    if(veriffy < 0){
      document.getElementById('forms').style.display = 'none';
      document.getElementById('TeladeWin').style.display = 'block';
      document.getElementById('marcadores').style.display = 'none';
    }

    
  }



  

  render(){


    const{name1, name2,name3,name4, cont2, cont, cont3, cont4} = this.state;

    

     return (

  <div className='teste'>
  <div className="App">
      <header className="App-header">


          <div id='numberplayersdiv'>

            <p><span className='texto'>Quantidade de players</span></p>
            <p><input type="number" min={2} max={4} class="input_text" name="players " id="numberplayers" /></p>
            <p><button className='botao' onClick={this.comeca}>Confirmar</button></p>

          </div>

          <div className='forms' id='forms'>

            <div className='player1form' id='player1form'>

             <p><label>
                <p><span className='texto'>Digite nome player 1</span></p>
                <p><input type="text" class="input_text" name="nome " id="nome" /></p>
                </label>
              </p>

            </div>


            <div className='player2form' id='player2form'>

              <p><label>
                <p><span className='texto'>Digite nome player 2</span></p>
                <p><input type="text" class="input_text" name="nome " id="nome2" /></p>
                </label>
              </p>
            </div>


            <div className='player3form' id='player3form'>

              <p><label>
                <p><span className='texto'>Digite nome player 3</span></p>
                <p><input type="text" class="input_text" name="nome " id="nome3" /></p>
                </label>
              </p>


            </div>
            <div className='player4form' id='player4form'>
              <p><label>
                <p><span className='texto'>Digite nome player 4</span></p>
                <p><input type="text" class="input_text" name="nome " id="nome4" /></p>
                </label>
              </p>
            </div>


          <button onClick={this.mudaNome} className="botao">Start</button>

          </div>


          <div className='marcadores' id='marcadores'>
          <div className='player1' id='player1'>
        
            <p className='texto'>{name1}</p>
            <p className='texto'>{cont}</p>

            <button onClick={this.incrementa} className="botao">Vida +</button>
            <button onClick={this.decrementa}className="botao">Vida -</button>

          </div>

          <div className='player2' id='player2'>

            <p className='texto'>{name2}</p>
            <p className='texto'>{cont2}</p>

            <button onClick={this.incrementa2} className="botao">Vida +</button>
            <button onClick={this.decrementa2}className="botao">Vida -</button>

          </div>

          <div className='player3' id='player3'>

            <p className='texto'>{name3}</p>
            <p className='texto'>{cont3}</p>

            <button onClick={this.incrementa3} className="botao">Vida +</button>
            <button onClick={this.decrementa3}className="botao">Vida -</button>

          </div>

          <div className='player4' id='player4'>

              <p className='texto'>{name4}</p>
              <p className='texto'>{cont4}</p>

              <button onClick={this.incrementa4} className="botao">Vida +</button>
              <button onClick={this.decrementa4}className="botao">Vida -</button>

          </div>

          </div>


          <div className='TeladeWin' id='TeladeWin'>

          <p className='texto'>FIM DE JOGO</p>
          
          <p ><button onClick={this.mudaNome}className="botao">recomeçar</button></p>
          <p ><button onClick={this.reestart}className="botao">novos players</button></p>
      


          </div>

      </header>

    </div>


  </div>
  );
  }


}

export default App;
