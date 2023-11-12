import './CepModal.css'

const CepModal = ({ handleOnModalCep }) => {

    //desativar modal de cep
    function handleOffModal() {
        let modal = document.getElementById('container-cep')
        modal.style.display = 'none'
    }

    return (
        <div id='container-cep' className="container-cep">
            <div className='offModal' onClick={handleOffModal}>
            </div>

            <div className="container">
                <p>Quer saber quais produtos possuem frete grátis para sua região? É só colocar o seu CEP:</p>
                <input type="text" name="cep" id="cep" placeholder='Insira o CEP' />
                <span className="verify-cep button">Consultar</span>
                <p>ou já tem uma conta?</p>
                <span className="login-cep button">FAÇA O LOGIN</span>
            </div>



        </div>
    )
}

export default CepModal