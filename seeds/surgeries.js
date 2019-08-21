const hospitalData = require("./src/Ambulatory_Surgical_Center.json")

exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('surgerycenters').del()
    .then(function () {
      // Inserts seed entries
      return knex('surgerycenters').insert([
        {id: 1, FacilID: 'boop', Name:"ed", latitude:"40", longitude:"50", address:"1234", phonenumber:"1234"},
        {id: 1, FacilID: 'hoops', Name:"al", latitude:"39", longitude:"49", address:"1234", phonenumber:"1234"}

      ]);
    });
};
