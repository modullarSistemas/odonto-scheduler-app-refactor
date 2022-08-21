export const medicalQuestionaire = [
  {
    question: 'Recebeu algum tratamento medico nos ultimos dois anos?',
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'Quais?',
      answer: '',
      type: 'text',
    },
  },
  {
    question: 'Já teve ou tem alguma dessas enfermidades?',
    type: 'multiple-checkbox',
    questionChoices: [
      {
        choice: 'Problemas cardíacos',
        answer: false,
      },
      {
        choice: 'Hepatite',
        answer: false,
      },
      {
        choice: 'Pressão alta ou baixa',
        answer: false,
      },
      {
        choice: 'Anemia',
        answer: false,
      },
      {
        choice: 'HIV',
        answer: false,
      },
      {
        choice: 'Renal',
        answer: false,
      },
      {
        choice: 'Respiratório',
        answer: false,
      },
      {
        choice: 'Problemas nervosos',
        answer: false,
      },
      {
        choice: 'Diabetes',
        answer: false,
      },
      {
        choice: 'Epilepsia',
        answer: false,
      },
      {
        choice: 'Reumatismo',
        answer: false,
      },
      {
        choice: 'Depressão',
        answer: false,
      },
      {
        choice: 'Febre reumatica',
        answer: false,
      },
    ],
  },
  {
    question: 'Toma algum medicamento diariamente?',
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'Quais?',
      answer: '',
      type: 'text',
    },
  },
  {
    question: 'Tem alergia a algum medicamente ou anestésico?',
    answer: false,
    type: 'checkbox',
  },
  {
    question: 'Já fez cirurgias bucais?',
    answer: false,
    type: 'checkbox',
  },

  {
    question: 'Já fez transfusão de sangue?',
    answer: false,
    type: 'checkbox',
  },
  {
    question: 'Fuma?',
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'Ha quanto tempo? Quantos cigarros por dia?',
      answer: '',
      type: 'text',
    },
  },
  {
    question: 'Faz uso de bebidas alcoólicas frequentemente?',
    answer: false,
    type: 'checkbox',
  },
  {
    question: 'Costuma sentir tontura ou desmaio?',
    answer: false,
    type: 'checkbox',
  },
  {
    question: "Tem fobias? (Sangue, agulhas, 'motorzinho do dentista')?",
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'Quais?',
      answer: '',
      type: 'text',
    },
  },
  {
    question:
      'Tem problemas alimentares? (Refluxo, bulimia, alguma intolerância)?',
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'Quais?',
      answer: '',
      type: 'text',
    },
  },
  {
    question: 'Esta gravida?',
    answer: false,
    type: 'extended-checkbox',
    extension: {
      question: 'De quantas semanas?',
      answer: '',
      type: 'text',
    },
  },
  {
    question:
      'Tem algo que não foi perguntado que você gostaria de acrescentar?',
    answer: '',
    type: 'text',
  },
  {
    question: 'Observações:',
    answer: '',
    type: 'text',
  },
]
