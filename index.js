const perguntas = [
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Documento de Objeto Móvel",
      "Modelo de Objeto de Documento",
      "Documento de Objeto Manipulado",
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses é um método para selecionar elementos no DOM?",
    respostas: [
      "getElementByID()",
      "selectElement()",
      "findElement()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Selecionar um elemento pelo seu ID",
      "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado",
      "Selecionar todos os elementos de uma determinada classe",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara os valores, '===' compara os valores e os tipos de dados",
      "'==' compara os valores e os tipos de dados, '===' compara apenas os valores",
      "'==' compara apenas os valores, '===' compara os tipos de dados",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Operador de adição",
      "Operador de concatenação",
      "Operador lógico 'E' (AND)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
    respostas: [
      "Converter um número em uma string",
      "Converter uma string em um número inteiro",
      "Arredondar um número para o inteiro mais próximo",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
    respostas: [
      "10",
      "'55'",
      "Erro",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'push()' faz em um array JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um elemento ao início do array",
      "Adiciona um elemento ao final do array",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 0
  },
];



  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostratTotal = document.querySelector('#acertos span')
  mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta  
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas    
        } 
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }
  
  