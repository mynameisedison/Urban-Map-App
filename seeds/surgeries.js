const hospitalData = require("../src/Ambulatory_Surgical_Center")

exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('surgerycenters').del()
    .then(function () {
      // hospitalData.features.forEach((hospital)=>{
        return knex('surgerycenters').insert([
          // {FacilID: hospital.properties.FACILID, Name:hospital.properties.NAME, latitude:hospital.geometry.coordinates[1], longitude:hospital.geometry.coordinates[0], address:hospital.properties.ADDRESS, phonenumber:hospital.properties.PHONE}
          {FacilID: hospitalData.features[0].properties.FACILID, Name:hospitalData.features[0].properties.NAME, latitude:hospitalData.features[0].geometry.coordinates[1], longitude:hospitalData.features[0].geometry.coordinates[0], address:hospitalData.features[0].properties.ADDRESS, phonenumber:hospitalData.features[0].properties.PHONE}

        ]);
      })
    // });
};
