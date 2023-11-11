import { useState } from 'react'
import './App.css'

function App() {
  //Animacao do placeholder

  function handleAnimPlaceHolder() {
    let pHolder = document.getElementById('search-placeholder')
    pHolder.classList.add('pHolder-Anim')
  }

  function handlePlaceHolder() {
    let pHolder = document.getElementById('search-placeholder')
    pHolder.classList.remove('pHolder-Anim')
  }

  //animacao do pub

  function handlePub(){
    let cep = document.getElementById('cep')
    let pubIcon = document.getElementById('pubIcon')
    
    cep.style.display = 'none'

    if(cep.style.display === 'none'){
      pubIcon.classList.add('fa-x')
    } else if(cep.style.display === 'flex'){
      pubIcon.classList.remove('fa-bars')
    }
    
    
    
  }


  return (
    <div>
      <div className="header-bar"></div>
        <nav>
          <div className="logo"></div>

            <label className='search-container'>
              <input onBlur={handlePlaceHolder} onFocus={handleAnimPlaceHolder} type="text" name="serch-container" id="search-itens" className='search-box'/>
              <p id='search-placeholder' className='search-placeholder'>O que você procura hoje?</p>

              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            
           


          
          
            <i class="fa-regular fa-heart"></i>
            <span className='user'><i class="fa-regular fa-user"></i></span>
            
            <i class="fa-solid fa-bag-shopping"></i>
            
          
        </nav>

        <div className="pub">
              
          <div id='cep' className="cep">
          <i class="fa-solid fa-location-dot"></i>
          <p>informe seu CEP</p>
          </div>

          <div className="header-list">
            <ul className="list">

              <div className="list-title">
             
              <i id='pubIcon' class="fa-solid fa-bars" onClick={handlePub}></i>
              <li className='list-title-itens' onClick={handlePub}>Todas as categorias</li>
              </div>
              
              <div className="list-section">
              <li className="list-itens"><a href="">Feminino</a></li>
              <li className="list-itens"><a href="">Masculino</a></li>
              <li className="list-itens"><a href="">Infantil</a></li>
              </div>
            </ul>
          </div>

     
    </div>
    </div>
  )
}

export default App
