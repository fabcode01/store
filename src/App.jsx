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



  return (

    <>
      <div className="header-bar"></div>
      <nav>
        <div className="logo"></div>

        <label className='search-container'>
          <input onBlur={handlePlaceHolder} onFocus={handleAnimPlaceHolder} type="text" name="serch-container" id="search-itens" className='search-box' />
          <p id='search-placeholder' className='search-placeholder'>O que você procura hoje?</p>

          <i class="fa-solid fa-magnifying-glass button"></i>
        </label>






        <i class="fa-regular fa-heart"></i>
        <span className='user'><i class="fa-regular fa-user button"></i></span>

        <i class="fa-solid fa-bag-shopping button"></i>


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
