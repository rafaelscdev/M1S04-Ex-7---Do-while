let produtos = {
    1: { nome: 'Hortifruti', quantidade: 0 },
    2: { nome: 'Laticínios', quantidade: 0 },
    3: { nome: 'Carnes', quantidade: 0 },
    4: { nome: 'Peixes', quantidade: 0 },
    5: { nome: 'Aves', quantidade: 0 },
};

let opcao;

do {
    opcao = parseInt(prompt('Digite a opção desejada:\n\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido'));
    if (opcao >= 1 && opcao <= 5) {
        let quantidade = parseInt(prompt(`Digite a quantidade de ${produtos[opcao].nome}:`));
        produtos[opcao].quantidade += quantidade;
    } 
    else if (opcao !== 6) {
        alert('Opção inválida. Tente novamente.');
    }
} while (opcao !== 6);


let maiorQuantidade = 0;
let produtoMaiorQuantidade = '';

    for (let opcao in produtos) {
        if (produtos[opcao].quantidade > maiorQuantidade) {
        maiorQuantidade = produtos[opcao].quantidade;
        produtoMaiorQuantidade = produtos[opcao].nome;
    }
}

alert(`O produto que o cliente pegou em maior quantidade foi: ${produtoMaiorQuantidade}`);