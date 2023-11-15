import React from 'react'
import './AllCategory.css'


const AllCategorys = () => {

    //fechar container das categorias

    function handleOffCategory() {
        var cep = document.getElementById('cepBox')
        var pubIcon = document.getElementById('pubIcon')
        var listSection = document.getElementById('list-section')
        var containerCategory = document.getElementById('allCategory')

        document.getElementById('allCategory').style.display = 'none'
        cep.classList.remove('pubOn')
        pubIcon.className = 'fa-solid fa-bars'
        listSection.style.display = 'flex'
        containerCategory.style.display = 'none'

    }

    //marcar lista no hover







    return (
        <div className='AllCategorys' id='allCategory'>
            <div className="clickToOffCategory" onClick={handleOffCategory}>
                <div className="All-C-Container-Images">
                    <ul className='All-C-Images'>
                        <li id='list1'>
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list2'>
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list3' >
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list4'>
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list5' >
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list6' >
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                        <li id='list7' >
                            <img src="https://static.zattini.com.br/bnn/l_zattini/2019-04-16/4103_novo_menu_feminino.png" alt="Feminino" />
                            <p>Feminino</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default AllCategorys