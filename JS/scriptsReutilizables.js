//

export function ToggleSubmenu(event) {
    const botonGeneral = document.getElementById('btnGeneral');
    const dropdownGeneral = document.getElementById('dropdown-General');
    const botonAdministrador = document.getElementById('btnAdministrador');
    const dropdownAdministrador = document.getElementById('dropdown-Administrador');
    const botonAcreditacion = document.getElementById('btnAcreditacion');
    const dropdownAcreditacion = document.getElementById('dropdown-Acreditacion');
    const botonVirtual = document.getElementById('btnVirtual');
    const dropdownVirtual = document.getElementById('dropdown-Virtual');
    const botonDocumentos = document.getElementById('btnDocumentos');
    const dropdownDocumentos = document.getElementById('dropdown-Documentos');

    botonGeneral.addEventListener('click', function() {
        if (dropdownGeneral.style.display === "block") {
            dropdownGeneral.style.display = "none";
        } else {
            dropdownGeneral.style.display = "block";
        }
    });

    botonAdministrador.addEventListener('click', function (){
        if (dropdownAdministrador.style.display === "block"){
            dropdownAdministrador.style.display = "none";
        } else {
            dropdownAdministrador.style.display = "block";
        }
    });

    botonAcreditacion.addEventListener('click', function() {
        if(dropdownAcreditacion.style.display === "block") {
            dropdownAcreditacion.style.display = "none";
        } else  {
            dropdownAcreditacion.style.display = "block";
        }
    });

    botonVirtual.addEventListener('click', function() {
        if(dropdownVirtual.style.display === "block") {
            dropdownVirtual.style.display = "none";
        } else  {
            dropdownVirtual.style.display = "block";
        }
    });

    botonDocumentos.addEventListener('click', function() {
        if(dropdownDocumentos.style.display === "block") {
            dropdownDocumentos.style.display = "none";
        } else  {
            dropdownDocumentos.style.display = "block";
        }
    });
}
