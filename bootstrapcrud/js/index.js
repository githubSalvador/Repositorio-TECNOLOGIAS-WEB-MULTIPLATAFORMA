const URL_API = 'http://programacion.xyz/mtw/204/crud/index.php/api/';

function editar(id) {
    window.location.href = 'edicion.html?id=' + id;
}

function eliminar(id) {
    var urlApi = URL_API + 'usuarios/eliminar/';
    var confirmar = confirm("Esta seguro que desea eliminar el usuario?");

    if (confirmar) {

        if (id > 0) {
            urlApi += id;
            $.ajax({
                type: 'delete',
                url: urlApi,
                data: '',
                contentType: 'application/json; charset=utf-8',
                success: function(data) {
                    // alert('Registro eliminado' + id);
                    document.getElementById("btnBuscar").click();
                    //window.location.href = 'index.html';
                },
                error: function(result) {
                    alert('Ocurrio un error al llamar el servicio');
                }
            });
        }
    }
}

function tblUsuario(data) {
    //console.log(data);
    if (data.status) {
        var tbl = '';
        $.each(data.result, function(i, usuario) {
            tbl += '<tr>';
            tbl += '<td class="d-none d-md-table-cell">' + (i + 1) + '</td>';
            tbl += '<td class="d-none d-md-table-cell">' + usuario.nombre + '</td>';
            tbl += '<td class="d-none d-md-table-cell">' + usuario.apellidos + '</td>';
            tbl += '<td class="d-table-cell d-md-none">' + usuario.nombre + ' ' + usuario.apellidos + '</td>';
            tbl += '<td>';
            tbl += '<div class="d-flex justify-content-center">';
            tbl += '<button class="btn btn-primary" onclick="editar(' + usuario.id + ')">Editar</button>';
            tbl += '<button class="btn btn-danger ml-2" onclick="eliminar(' + usuario.id + ')"  >Eliminar</button>';
            tbl += '</div>';
            tbl += '</td';
            tbl += '</tr>';
        });
        $('#usuarios-table-body').html(tbl);
    } else {
        alert('Error en el servicio');
    }
}

//Pone funcionalidad a los botones cuando esté la pagina cargada
$(document).ready(function() {
    //Esta funcion le pone funcionalidad al boton de buscar
    $('#btnBuscar').click(function() {
        var url = URL_API + 'usuarios/obtener';
        $.ajax({
            type: 'get',
            url: url,
            data: '',
            contentType: 'application/json;charset=utf-8',
            traditional: true,
            success: tblUsuario,
            error: function(result) {
                alert('error un error al llamar el servicio');
            }
        });
    });
    $('#btnNuevo').click(() => {
        window.location.href = 'edicion.html';
    });

    document.getElementById("btnBuscar").click();

});