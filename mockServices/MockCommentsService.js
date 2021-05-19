class MockCommentService {

  static getComments(quiestionId) {
    return new Promise((resolve, _reject) => {
      resolve(
        [
          {author: 'Пётр Кубанцов', text: 'Привет из Владивостока!', date: new Date(), quesitonId: 1},
          {author: 'Вася Васильев', text: 'А я что-то не понял, как лучше это сделать?', date: new Date(), quesitonId: 1},
          {author: 'Владислав Соломин', text: 'Красивая погода', date: new Date(), quesitonId: 2},
          {author: 'Семён Ворошилов', text: 'Чем отличается java от javascript?', date: new Date(), quesitonId: 2}
        ].filter(comment => comment.quiestionId === quiestionId)
      );
    });
  }
}

// json api
// HTTP methods:
// GET or POST
