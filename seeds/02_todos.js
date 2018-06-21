
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {task: 'eat breakfast', user_id: 1},
        {task: 'catch the subway', user_id: 1},
        {task: 'hang out with robin', user_id: 2}
      ]);
    });
};
