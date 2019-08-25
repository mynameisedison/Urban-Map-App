const hospitalData = require("../src/Ambulatory_Surgical_Center")

exports.seed = function(knex, Promise){
  return knex('surgerycenters').del()
  .then(() => {
    return knex("surgerycenters").insert([{
      id:1,
      FacilID: hospitalData.features[0].properties.FACILID,
      Name: hospitalData.features[0].properties.NAME,
      latitude: hospitalData.features[0].geometry.coordinates[1],
      longitude:hospitalData.features[0].geometry.coordinates[0],
      address:hospitalData.features[0].properties.ADDRESS,
      phonenumber:hospitalData.features[0].properties.PHONE
    },
    {
      id:2,
      FacilID: hospitalData.features[1].properties.FACILID,
      Name: hospitalData.features[1].properties.NAME,
      latitude: hospitalData.features[1].geometry.coordinates[1],
      longitude:hospitalData.features[1].geometry.coordinates[0],
      address:hospitalData.features[1].properties.ADDRESS,
      phonenumber:hospitalData.features[1].properties.PHONE
    },
    {
      id:3,
      FacilID: hospitalData.features[2].properties.FACILID,
      Name: hospitalData.features[2].properties.NAME,
      latitude: hospitalData.features[2].geometry.coordinates[1],
      longitude:hospitalData.features[2].geometry.coordinates[0],
      address:hospitalData.features[2].properties.ADDRESS,
      phonenumber:hospitalData.features[2].properties.PHONE
    },
    {
      id:4,
      FacilID: hospitalData.features[3].properties.FACILID,
      Name: hospitalData.features[3].properties.NAME,
      latitude: hospitalData.features[3].geometry.coordinates[1],
      longitude:hospitalData.features[3].geometry.coordinates[0],
      address:hospitalData.features[3].properties.ADDRESS,
      phonenumber:hospitalData.features[3].properties.PHONE
    },
    {
      id:5,
      FacilID: hospitalData.features[4].properties.FACILID,
      Name: hospitalData.features[4].properties.NAME,
      latitude: hospitalData.features[4].geometry.coordinates[1],
      longitude:hospitalData.features[4].geometry.coordinates[0],
      address:hospitalData.features[4].properties.ADDRESS,
      phonenumber:hospitalData.features[4].properties.PHONE
    },
    {
      id:6,
      FacilID: hospitalData.features[5].properties.FACILID,
      Name: hospitalData.features[5].properties.NAME,
      latitude: hospitalData.features[5].geometry.coordinates[1],
      longitude:hospitalData.features[5].geometry.coordinates[0],
      address:hospitalData.features[5].properties.ADDRESS,
      phonenumber:hospitalData.features[5].properties.PHONE
    },
    {
      id:7,
      FacilID: hospitalData.features[6].properties.FACILID,
      Name: hospitalData.features[6].properties.NAME,
      latitude: hospitalData.features[6].geometry.coordinates[1],
      longitude:hospitalData.features[6].geometry.coordinates[0],
      address:hospitalData.features[6].properties.ADDRESS,
      phonenumber:hospitalData.features[6].properties.PHONE
    },
    {
      id:8,
      FacilID: hospitalData.features[7].properties.FACILID,
      Name: hospitalData.features[7].properties.NAME,
      latitude: hospitalData.features[7].geometry.coordinates[1],
      longitude:hospitalData.features[7].geometry.coordinates[0],
      address:hospitalData.features[7].properties.ADDRESS,
      phonenumber:hospitalData.features[7].properties.PHONE
    },
    {
      id:9,
      FacilID: hospitalData.features[8].properties.FACILID,
      Name: hospitalData.features[8].properties.NAME,
      latitude: hospitalData.features[8].geometry.coordinates[1],
      longitude:hospitalData.features[8].geometry.coordinates[0],
      address:hospitalData.features[8].properties.ADDRESS,
      phonenumber:hospitalData.features[8].properties.PHONE
    },
    {
      id:10,
      FacilID: hospitalData.features[9].properties.FACILID,
      Name: hospitalData.features[9].properties.NAME,
      latitude: hospitalData.features[9].geometry.coordinates[1],
      longitude:hospitalData.features[9].geometry.coordinates[0],
      address:hospitalData.features[9].properties.ADDRESS,
      phonenumber:hospitalData.features[9].properties.PHONE
    },]);
  });
};
