function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var result = document.getElementById('result')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Se tiver alguma caixa vazia
        alert('[ERRO] Faltam dados!')
    } else {
        // Se todas as caixas estiverem preenchidas
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        result.innerHTML = 'Contando: '
        if (passo == 0) {
            alert('[ERRO] Passo inválido! Considerando PASSO 1')
            var passo = 1
        }
        if (inicio > fim) {
            // Contagem decrescente
            for (inicio; inicio >= fim; inicio -= passo) {
                result.innerHTML += `${inicio} > `
            }
        } else {
            // Contagem crescente
            for (inicio; inicio <= fim; inicio += passo) {
                result.innerHTML += `${inicio} > `
            }
        }
        result.innerHTML += 'FIM!'
    }

}
