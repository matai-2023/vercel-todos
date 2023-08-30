export async function seed(knex) {
  await knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        {
          id: 1,
          name: 'Wash laundry',
        },
      ])
    })
}
