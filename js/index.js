function iniciaMoldal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar' || e.target.className == 'buttonpop'){
            modal.classList.remove('mostrar');
        }
       
    });
}

const botaoInfo = document.querySelector('.botao-info');
botaoInfo.addEventListener('click', () => iniciaMoldal('modal-info'));



