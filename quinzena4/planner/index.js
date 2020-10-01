function inserirTarefa (){
    const tarefaDoUsuario = document.getElementById('tarefa');
    const valorInput = tarefaDoUsuario.value;
    const diaDaSemana = document.getElementById('dias-semana');
    const qualDiaEh = diaDaSemana.value;
    //console.log(valorInput, qualDiaEh);
        switch (qualDiaEh){
            case 'domingo': 
            const tarefa = document.querySelector(".semana #domingo");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
    } 
        switch (qualDiaEh){
            case 'segunda': 
            const tarefa = document.querySelector(".semana #segunda");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
    } 
        switch (qualDiaEh){
            case 'terca': 
            const tarefa = document.querySelector(".semana #terca");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
    } 
        switch (qualDiaEh){
            case 'quarta': 
            const tarefa = document.querySelector(".semana #quarta");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
        } 
        switch (qualDiaEh){
            case 'quinta': 
            const tarefa = document.querySelector(".semana #quinta");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
        } 
        switch (qualDiaEh){
            case 'sexta': 
            const tarefa = document.querySelector(".semana #sexta");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
        } 
        switch (qualDiaEh){
            case 'sabado': 
            const tarefa = document.querySelector(".semana #sabado");
            tarefa.innerHTML += `<p> ${valorInput} </p>`;
            tarefaDoUsuario.value = '';
            break
        } 

}