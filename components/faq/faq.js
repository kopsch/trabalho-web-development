const questions = [
  {
    question:
      "Acho que há vaga sobrando em uma dada disciplina, o coordenador poderia matricular-me nela?",
    answer:
      "Não. Se há vaga sobrando então significa que não houve interesse em solicitá-la no período de inclusão de acordo com as regras do edital.",
  },
  {
    question:
      "Como posso contactar a coordenação ou chefia de departamento para resolver uma questão ou problema?",
    answer:
      "Caso a resposta à sua questão/problema não se encontre no FAQ Acadêmico (http://dainf.pg.utfpr.edu.br/?q=faqs) ou não se encontre nos regulamentos da instituição (disponíveis em http://dainf.pg.utfpr.edu.br/?q=taxonomy/term/28) então provavelmente sua questão não é simples de resolver. Nesse caso o melhor a fazer é enviar um email à chefia de departamento ou coordenação do seu curso descrevendo seu problema detalhadamente para possibilitar uma pesquisa adequada para sua questão. Os emails são cocic-pg@utfpr.edu.br e coads-pg@utfpr.edu.br para as coordenações de Ciência da Computação e Análise de Sistemas, respectivamente. O email da chefia de departamento é dainf-pg@utfpr.edu.br. Para outros casos, procure sua coordenação ou chefia de departamento no horário de atendimento ao público estabelecido no início de cada semestre.",
  },
  {
    question:
      "Como posso tirar dúvidas sobre estágio, TCC, atividades complementares ou trabalho de extensão?",
    answer:
      "Tente sanar sua dúvida através das informações disponíveis no site do DAINF no link correspondente à sua questão. Caso não consiga resolver seu problema entre em contato com o docente responsável. O contato do docente também está disponível no site do DAINF.",
  },
  {
    question:
      "Devo estar matriculado em uma disciplina para pedir exame de suficiência? Como posso requisitar o exame?",
    answer:
      "Não. Caso esteja matriculado, consiga autorização para fazer o exame e seja nele aprovado, você obterá consignação de crédito e você não mais precisará cursar a disciplina. Caso não esteja matriculado na disciplina ainda assim é possível solicitar o exame de suficiência. O exame deve ser solicitado junto à DERAC. Tenha atenção porém aos seguintes requisitos apresentados no Art 39 do Regulamento Didático Pedagógico da UTFPR (Resolução nº 81/2019 - COGEP):",
  },
  {
    question:
      "Em que casos posso solicitar dispensa de frequência, atividades acompanhadas, abono de faltas ou compensação de frequências?",
    answer:
      "A Resolução nº 71/2018 - COGEP estabelece normas para as atividades de acompanhamento domiciliar, abono de faltas, compensação de faltas, dispensa de frequência e lançamento de faltas para os cursos presenciais de nível médio e superior da UTFPR.",
  },
  {
    question:
      "Enviei e-mail para o coordenador mas ele não me respondeu. O que faço?",
    answer:
      "As coordenações de BCC e ADS tem adotado a política de usar um e-mails específicos para tratar assuntos de coordenação. São eles: - Coordenação de BCC: cocic-pg@utfpr.edu.br. - Coodenação de ADS: coads-pg@utfpr.edu.br. Esta política foi implantada para que, em caso de troca de coordenação, novos coordenadores tenham acesso à todos os e-mails trocados pelo coordenador anterior. Caso você tenha enviado sua dúvida para estes e-emails e mesmo assim não obteve resposta, procure a coordenação em horários de atendimento aos alunos.",
  },
  {
    question:
      "Faltei aulas por estar de licença médica. Tenho direito a abonar minhas faltas?",
    answer:
      "Segundo a Resolução 71/2018 - COGEP, Artigo 12 , terá suas faltas abonadas o aluno convocado matriculado em órgão de formação de reserva ou reservista que seja obrigado a faltar às atividades civis por força de exercício ou manobra, exercício de apresentação das reservas ou cerimônias cívicas ou o oficial ou aspirante-a-oficial da reserva, convocado para o serviço ativo, desde que apresente o devido comprovante.",
  },
  {
    question:
      "Fiz uma disciplina que, ao meu ver, deveria entrar como optativa no meu histórico mas ela é mostrada como 'enriquecimento curricular'. Como fazer para que ela conte como optativa?",
    answer:
      "Quando um estudante de computação/análise cursa uma disciplina ofertada por outra coordenação pode ocorrer do sistema acadêmico não convalidar a disciplina automaticamente como optativa, fazendo com que ela seja classificada como 'enriquecimento curricular'. Isso pode acontecer porque nem sempre é possível cadastrar no sistema acadêmico todas as possibilidades de convalidação da UTFPR. Porém, se a carga horária e a ementa são compatíveis, basta procurar o DERAC nos prazos estabelecidos no início de cada semestre a fim de requerer a convalidação. O pedido será analisado pela coordenação do curso.",
  },
  {
    question:
      "Meu estágio conflita com meu horário de disciplinas, o que fazer?",
    answer:
      "Se o horário de estágio obrigatório foi definido após o período de matrícula, o regulamento permite o cancelamento de matrícula em algumas disciplinas de maneira que seja possível conduzir o curso juntamente com o estágio. Nesses casos, procure o DERAC portando um documento de estágio que comprove o conflito de horário.",
  },
  {
    question:
      "Não consegui vaga em uma disciplina em nenhuma das etapas de matrícula. A coordenação do curso pode me matricular?",
    answer:
      "Não, pois isso fere o edital de matrícula! Se você acredita que a não realização da matrícula resultou de motivos de força maior (ex.: problemas no sistema acadêmico, etc) ou se isso implicar em uma situação crítica excepcional (ex.: desligamento de aluno) contate o coordenador com documentos comprobatórios a fim de receber orientações de como proceder para tentar reverter a situação. O caso será avaliado podendo ou não ser deferido com base nos documentos comprobatórios. Em caso de deferimento, você deverá assinar um memorando de solicitação de matrícula elaborado pela coordenação responsável.",
  },
];

const divQuestions = document.querySelector("#questions");
const close = document.querySelector(".close");
const background = document.querySelector("#background");
const answerBox = document.querySelector(".answer");

close.addEventListener("click", () => {
  background.classList.toggle("hidden");
  answerBox.removeChild(answerBox.firstChild);
});

questions.forEach((question) => {
  const p = document.createElement("p");
  p.classList.add("question");
  p.innerText = question.question;
  divQuestions.append(p);
});

const allQuestions = document.querySelectorAll(".question");

const findAnswer = (question) => {
  const answer = questions.find((element) => element.question === question);

  if (answer === undefined) return;
  const p = document.createElement("p");
  p.textContent = answer.answer;
  answerBox.append(p);
  background.classList.toggle("hidden");
};

allQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    findAnswer(e.target.textContent);
  });
});
