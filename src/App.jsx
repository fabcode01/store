import { useState } from 'react'
import './App.css'
import CepModal from '../components/CepModal'

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

  function handlePub() {
    let cep = document.getElementById('cepBox')
    let pubIcon = document.getElementById('pubIcon')
    let listSection = document.getElementById('list-section')



    if (pubIcon.className === 'fa-solid fa-bars') {

      cep.className = 'cep pubOn'
      pubIcon.className = 'fa-solid fa-x'
      listSection.style.display = 'none'

    } else if (pubIcon.className === 'fa-solid fa-x') {

      cep.classList.remove('pubOn')
      pubIcon.className = 'fa-solid fa-bars'
      listSection.style.display = 'flex'
    }

  }


  //ativar modal de cep
  function handleModalCep() {
    let cep = document.getElementById('container-cep')
    cep.style.display = 'flex'
  }


  return (
    <div>

      <CepModal />
      <div className="header-bar"></div>
      <nav>
        <div className="logo"></div>

        <label className='search-container'>
          <input onBlur={handlePlaceHolder} onFocus={handleAnimPlaceHolder} type="text" name="serch-container" id="search-itens" className='search-box' />
          <p id='search-placeholder' className='search-placeholder'>O que você procura hoje?</p>

          <i class="fa-solid fa-magnifying-glass"></i>
        </label>






        <i class="fa-regular fa-heart"></i>
        <span className='user'><i class="fa-regular fa-user"></i></span>

        <i class="fa-solid fa-bag-shopping"></i>


      </nav>

      <div className="pub">

        <div id='cepBox' className="cep pubOff" onClick={handleModalCep}>
          <i class="fa-solid fa-location-dot"></i>
          <p>informe seu CEP</p>
        </div>

        <div className="header-list">
          <ul className="list">

            <div className="list-title" onClick={handlePub}>

              <i id='pubIcon' class="fa-solid fa-bars" ></i>
              <li className='list-title-itens'>Todas as categorias</li>
            </div>

            <div id='list-section' className="list-section">
              <li className="list-itens"><a href="">Feminino</a></li>
              <li className="list-itens"><a href="">Masculino</a></li>
              <li className="list-itens"><a href="">Infantil</a></li>
            </div>
          </ul>
        </div>
      </div>

      <div className="banner-homer">
          <img src="img/banner.jpg" alt="" />
        </div>


      <div className="home-banner-section">
        <div className='banner-photo'>
          
          </div>
      </div>


      </div>
  

  )
}

export default App
