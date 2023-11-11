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

              <div className="list-title">
              <i class="fa-solid fa-bars"></i>
              <li className='list-title-itens'>Toda as categorias</li>
              </div>
              
              <div className="list-section">
              <li className="list-itens"><a href="">Feminino</a></li>
              <li className="list-itens"><a href="">Masculino</a></li>
              <li className="list-itens"><a href="">Infantil</a></li>
              </div>
            </ul>
          </div>
            </div>

     
    </>
  )
}

export default App
