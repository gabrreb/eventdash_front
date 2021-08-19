function gerarRelatorio(){
    var dtIni = document.getElementById("txtDataIni").value;
    var dtFim = document.getElementById("txtDataFim").value;

    var url = "http://localhost:8080/eventos?ini="+dtIni+"&fim="+dtFim;

    fetch(url).then(res => res.json()).then(listaEventos => preencheTabela(listaEventos));

    /* se eu fosse ler como uma instrução estruturada

    res = fetch(url);
    listaEventos = res.json();
    preencheTabela(listaEventos);

    */

}

function preencheTabela(listaEventos){
    console.log(listaEventos);
    var strTabela = `<table class="table">
                        <thead>
                            <th> numSeq </th>
                            <th> data </th>
                            <th> Alarme </th>
                            <th> Hostname </th>
                            <th> IP </th>
                        </thead> 
                        
                        <tbody> `;

    // agora eu preciso percorrer a lista e preencher cada uma das linhas
    for (i=0; i<listaEventos.length; i++){
        let evento = listaEventos[i];

        strTabela = strTabela + `<tr>
                                     <td> ${evento.numSeq} </td>
                                     <td> ${evento.dataEvento} </td>
                                     <td> ${evento.alarme.nome} </td>
                                     <td> ${evento.equipamento.hostname} </td>
                                     <td> ${evento.equipamento.ipaddr} </td>
                                 </tr>`; 

    }

    strTabela = strTabela + `   </tbody>
                             </table>`;
    
    document.getElementById("relatorio").innerHTML = strTabela;

}


