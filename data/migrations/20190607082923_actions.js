
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl
            .increments()

        tbl
            .string('actionDescription', 500)

        tbl
            .string('actionNotes', 500)

        tbl
            .boolean('actionCompleted')

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
