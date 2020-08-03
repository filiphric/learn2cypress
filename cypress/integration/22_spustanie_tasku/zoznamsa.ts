it('spustenie aplikácie s 0 taskami', () => {

  cy
    .task('resetTasks')

  cy
    .visit('/')
  
});