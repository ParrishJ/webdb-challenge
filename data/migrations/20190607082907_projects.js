
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', function (tbl) {
        tbl
            .increments()

        tbl
            .string('projectName', 150)

        tbl
            .string('projectDescription', 500)

        tbl
            .boolean('projectCompleted')
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
