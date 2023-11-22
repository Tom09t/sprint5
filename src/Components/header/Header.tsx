

const Header = () => {

    return(
        <>
          <header>
        <div>
            <button id="button">
                <svg width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                <div id="miModal" className="modalcito">
                    <div>
                        <a id="abrirModalMisDatosPersonales">Mis datos personales</a>
                        <a href="/selectUser.html">Salir</a>
                    </div>
                </div>
            </button>
        </div>
        <div className="center">
            <img id="logo" src="./src/assets/logoBuenSabor-Naranja.png" width="150px" height="100px"/>
            <h1>ADMINISTRADOR</h1>
        </div>
    </header>      
        </>    
        )
}

export default Header;