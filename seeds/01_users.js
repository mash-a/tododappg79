
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'shannonjen', hashed_password: '1234'},
        {id: 2, username: 'batman', hashed_password: '2345'}
      ]);
    });
};
