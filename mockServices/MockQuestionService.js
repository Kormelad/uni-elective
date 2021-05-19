class MockQuestionService {

  static questions = [
    {
        id: 1,
        header: 'What\'s the difference between initialize and constructor on a backbone model',
        text: 'There is something to think about: the relationship diagrams, overcoming the current difficult economic situation, are functionally separated into independent elements. In particular, diluted with a fair share of empathy, rational thinking determines the high demand for thoughtful reasoning. The significance of these problems is so obvious that the constant information and propaganda support of our activities indicates the possibility of appropriate conditions for activation.'
    },
    {
        id: 2,
        header: 'Compare typescript objects and add diff to new object',
        text: 'Within my Angular application, I need to compare two typescript objects and create a new object that consists of key/value pairs where the value of the key is different in the second object.'
    }
  ];

  static getQuestions() {
    return new Promise((resolve, _reject) => {
      resolve(MockQuestionService.questions);
    });
  }

  static createQuestion(questionData) {
    return new Promise((resolve, reject) => {
      if (!header || !text) {
        reject('Header and text must not be empty');
      }
      questionData.id = MockQuestionService.generateId();
      MockQuestionService.questions.push(questionData);
      resolve(questionData);
    });
  }

  static updateQuestion() { }

  static deleteQuestion() { }

  static generateId() {
    const questionIds = MockQuestionService.questions.map(question => question.id);
    return Math.max(questionIds) + 1;
  }
}

async (() => {
  const questions = await MockQuestionService.getQuestions();
});
