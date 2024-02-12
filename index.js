const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da enfermagem?",
    respostas: [
      "Administrar medicamentos",
      "Fornecer cuidados e assistência aos pacientes",
      "Realizar cirurgias",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um paciente geriátrico?",
    respostas: [
      "Um paciente com doenças cardíacas",
      "Um paciente pediátrico",
      "Um paciente idoso",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o Código de Ética dos Profissionais de Enfermagem?",
    respostas: [
      "Um conjunto de regras para cobrar mais dos pacientes",
      "Um guia que estabelece princípios para a conduta ética dos enfermeiros",
      "Um livro sobre procedimentos cirúrgicos",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são algumas das funções do enfermeiro?",
    respostas: [
      "Realizar diagnósticos médicos",
      "Planejar e coordenar a assistência ao paciente",
      "Prescrever medicamentos",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a Sistematização da Assistência de Enfermagem (SAE)?",
    respostas: [
      "Um sistema de controle de estoque de medicamentos",
      "Um processo de trabalho do enfermeiro que organiza a assistência prestada ao paciente",
      "Um procedimento cirúrgico específico",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são as competências essenciais do enfermeiro?",
    respostas: [
      "Apenas habilidades administrativas",
      "Habilidades de comunicação e trabalho em equipe",
      "Apenas habilidades técnicas",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um diagnóstico de enfermagem?",
    respostas: [
      "Um diagnóstico médico feito pelo enfermeiro",
      "Uma avaliação da qualidade do atendimento",
      "Uma identificação de problemas de saúde reais ou potenciais",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a importância da educação continuada para os profissionais de enfermagem?",
    respostas: [
      "Não é necessária, pois os enfermeiros já têm todo o conhecimento necessário",
      "Manter-se atualizado sobre novas técnicas e práticas",
      "É apenas uma formalidade burocrática",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o processo de enfermagem?",
    respostas: [
      "Um procedimento cirúrgico",
      "Um conjunto de tarefas administrativas",
      "Um método sistemático de prestação de cuidados de enfermagem",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a importância da equipe interdisciplinar na enfermagem?",
    respostas: [
      "Não há necessidade de trabalhar com outros profissionais",
      "Para fornecer uma abordagem holística e completa aos cuidados ao paciente",
      "Apenas para aumentar a carga de trabalho dos enfermeiros",
    ],
    correta: 1
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
  
  