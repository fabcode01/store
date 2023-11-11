import { useState } from 'react'
import './App.css'

function App() {
    

  return (

    <>
    <div className="header-bar"></div>
      <nav>
        <div className="logo"></div>

          <label className='search-container'>
            <input type="text" name="serch-container" id="search-itens" className='search-box'/>
            <p id='search-placeholder' className='search-placeholder'>O que você procura hoje?</p>

            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          
         


        
        
          <i class="fa-regular fa-heart"></i>
          <span className='user'><i class="fa-regular fa-user"></i></span>
          
          <i class="fa-solid fa-bag-shopping"></i>
          
        
      </nav>

      <div className="pub">
            
        <div className="cep">
        <i class="fa-solid fa-location-dot"></i>
        <p>informe seu CEP</p>
        </div>

        <div className="header-list">
          <ul className="list">
            <li className="list-itens">Feminino</li>
            <li className="list-itens">Masculino</li>
            <li className="list-itens">Infantil</li>
          </ul>
        </div>
          </div>

   
  </>
  )
}

export default App
