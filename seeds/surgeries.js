const hospitalData = require("../src/data/Ambulatory_Surgical_Center")

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
    },
    {
      id:11,
      FacilID: hospitalData.features[10].properties.FACILID,
      Name: hospitalData.features[10].properties.NAME,
      latitude: hospitalData.features[10].geometry.coordinates[1],
      longitude:hospitalData.features[10].geometry.coordinates[0],
      address:hospitalData.features[10].properties.ADDRESS,
      phonenumber:hospitalData.features[10].properties.PHONE
    },
    {
      id:12,
      FacilID: hospitalData.features[11].properties.FACILID,
      Name: hospitalData.features[11].properties.NAME,
      latitude: hospitalData.features[11].geometry.coordinates[1],
      longitude:hospitalData.features[11].geometry.coordinates[0],
      address:hospitalData.features[11].properties.ADDRESS,
      phonenumber:hospitalData.features[11].properties.PHONE
    },
    {
      id:13,
      FacilID: hospitalData.features[12].properties.FACILID,
      Name: hospitalData.features[12].properties.NAME,
      latitude: hospitalData.features[12].geometry.coordinates[1],
      longitude:hospitalData.features[12].geometry.coordinates[0],
      address:hospitalData.features[12].properties.ADDRESS,
      phonenumber:hospitalData.features[12].properties.PHONE
    },
    {
      id:14,
      FacilID: hospitalData.features[13].properties.FACILID,
      Name: hospitalData.features[13].properties.NAME,
      latitude: hospitalData.features[13].geometry.coordinates[1],
      longitude:hospitalData.features[13].geometry.coordinates[0],
      address:hospitalData.features[13].properties.ADDRESS,
      phonenumber:hospitalData.features[13].properties.PHONE
    },
    {
      id:15,
      FacilID: hospitalData.features[14].properties.FACILID,
      Name: hospitalData.features[14].properties.NAME,
      latitude: hospitalData.features[14].geometry.coordinates[1],
      longitude:hospitalData.features[14].geometry.coordinates[0],
      address:hospitalData.features[14].properties.ADDRESS,
      phonenumber:hospitalData.features[14].properties.PHONE
    },
    {
      id:16,
      FacilID: hospitalData.features[15].properties.FACILID,
      Name: hospitalData.features[15].properties.NAME,
      latitude: hospitalData.features[15].geometry.coordinates[1],
      longitude:hospitalData.features[15].geometry.coordinates[0],
      address:hospitalData.features[15].properties.ADDRESS,
      phonenumber:hospitalData.features[15].properties.PHONE
    },
    {
      id:17,
      FacilID: hospitalData.features[16].properties.FACILID,
      Name: hospitalData.features[16].properties.NAME,
      latitude: hospitalData.features[16].geometry.coordinates[1],
      longitude:hospitalData.features[16].geometry.coordinates[0],
      address:hospitalData.features[16].properties.ADDRESS,
      phonenumber:hospitalData.features[16].properties.PHONE
    },
    {
      id:18,
      FacilID: hospitalData.features[17].properties.FACILID,
      Name: hospitalData.features[17].properties.NAME,
      latitude: hospitalData.features[17].geometry.coordinates[1],
      longitude:hospitalData.features[17].geometry.coordinates[0],
      address:hospitalData.features[17].properties.ADDRESS,
      phonenumber:hospitalData.features[17].properties.PHONE
    },
    {
      id:19,
      FacilID: hospitalData.features[18].properties.FACILID,
      Name: hospitalData.features[18].properties.NAME,
      latitude: hospitalData.features[18].geometry.coordinates[1],
      longitude:hospitalData.features[18].geometry.coordinates[0],
      address:hospitalData.features[18].properties.ADDRESS,
      phonenumber:hospitalData.features[18].properties.PHONE
    },
    {
      id:20,
      FacilID: hospitalData.features[19].properties.FACILID,
      Name: hospitalData.features[19].properties.NAME,
      latitude: hospitalData.features[19].geometry.coordinates[1],
      longitude:hospitalData.features[19].geometry.coordinates[0],
      address:hospitalData.features[19].properties.ADDRESS,
      phonenumber:hospitalData.features[19].properties.PHONE
    },
    {
      id:21,
      FacilID: hospitalData.features[20].properties.FACILID,
      Name: hospitalData.features[20].properties.NAME,
      latitude: hospitalData.features[20].geometry.coordinates[1],
      longitude:hospitalData.features[20].geometry.coordinates[0],
      address:hospitalData.features[20].properties.ADDRESS,
      phonenumber:hospitalData.features[20].properties.PHONE
    },
    {
      id:22,
      FacilID: hospitalData.features[21].properties.FACILID,
      Name: hospitalData.features[21].properties.NAME,
      latitude: hospitalData.features[21].geometry.coordinates[1],
      longitude:hospitalData.features[21].geometry.coordinates[0],
      address:hospitalData.features[21].properties.ADDRESS,
      phonenumber:hospitalData.features[21].properties.PHONE
    },
    {
      id:23,
      FacilID: hospitalData.features[22].properties.FACILID,
      Name: hospitalData.features[22].properties.NAME,
      latitude: hospitalData.features[22].geometry.coordinates[1],
      longitude:hospitalData.features[22].geometry.coordinates[0],
      address:hospitalData.features[22].properties.ADDRESS,
      phonenumber:hospitalData.features[22].properties.PHONE
    },
    {
      id:24,
      FacilID: hospitalData.features[23].properties.FACILID,
      Name: hospitalData.features[23].properties.NAME,
      latitude: hospitalData.features[23].geometry.coordinates[1],
      longitude:hospitalData.features[23].geometry.coordinates[0],
      address:hospitalData.features[23].properties.ADDRESS,
      phonenumber:hospitalData.features[23].properties.PHONE
    },
    {
      id:25,
      FacilID: hospitalData.features[24].properties.FACILID,
      Name: hospitalData.features[24].properties.NAME,
      latitude: hospitalData.features[24].geometry.coordinates[1],
      longitude:hospitalData.features[24].geometry.coordinates[0],
      address:hospitalData.features[24].properties.ADDRESS,
      phonenumber:hospitalData.features[24].properties.PHONE
    },
    {
      id:26,
      FacilID: hospitalData.features[25].properties.FACILID,
      Name: hospitalData.features[25].properties.NAME,
      latitude: hospitalData.features[25].geometry.coordinates[1],
      longitude:hospitalData.features[25].geometry.coordinates[0],
      address:hospitalData.features[25].properties.ADDRESS,
      phonenumber:hospitalData.features[25].properties.PHONE
    },
    {
      id:27,
      FacilID: hospitalData.features[26].properties.FACILID,
      Name: hospitalData.features[26].properties.NAME,
      latitude: hospitalData.features[26].geometry.coordinates[1],
      longitude:hospitalData.features[26].geometry.coordinates[0],
      address:hospitalData.features[26].properties.ADDRESS,
      phonenumber:hospitalData.features[26].properties.PHONE
    },
    {
      id:28,
      FacilID: hospitalData.features[27].properties.FACILID,
      Name: hospitalData.features[27].properties.NAME,
      latitude: hospitalData.features[27].geometry.coordinates[1],
      longitude:hospitalData.features[27].geometry.coordinates[0],
      address:hospitalData.features[27].properties.ADDRESS,
      phonenumber:hospitalData.features[27].properties.PHONE
    },
    {
      id:29,
      FacilID: hospitalData.features[28].properties.FACILID,
      Name: hospitalData.features[28].properties.NAME,
      latitude: hospitalData.features[28].geometry.coordinates[1],
      longitude:hospitalData.features[28].geometry.coordinates[0],
      address:hospitalData.features[28].properties.ADDRESS,
      phonenumber:hospitalData.features[28].properties.PHONE
    },
    {
      id:30,
      FacilID: hospitalData.features[29].properties.FACILID,
      Name: hospitalData.features[29].properties.NAME,
      latitude: hospitalData.features[29].geometry.coordinates[1],
      longitude:hospitalData.features[29].geometry.coordinates[0],
      address:hospitalData.features[29].properties.ADDRESS,
      phonenumber:hospitalData.features[29].properties.PHONE
    },
    {
      id:31,
      FacilID: hospitalData.features[30].properties.FACILID,
      Name: hospitalData.features[30].properties.NAME,
      latitude: hospitalData.features[30].geometry.coordinates[1],
      longitude:hospitalData.features[30].geometry.coordinates[0],
      address:hospitalData.features[30].properties.ADDRESS,
      phonenumber:hospitalData.features[30].properties.PHONE
    },
    {
      id:32,
      FacilID: hospitalData.features[31].properties.FACILID,
      Name: hospitalData.features[31].properties.NAME,
      latitude: hospitalData.features[31].geometry.coordinates[1],
      longitude:hospitalData.features[31].geometry.coordinates[0],
      address:hospitalData.features[31].properties.ADDRESS,
      phonenumber:hospitalData.features[31].properties.PHONE
    },
    {
      id:33,
      FacilID: hospitalData.features[32].properties.FACILID,
      Name: hospitalData.features[32].properties.NAME,
      latitude: hospitalData.features[32].geometry.coordinates[1],
      longitude:hospitalData.features[32].geometry.coordinates[0],
      address:hospitalData.features[32].properties.ADDRESS,
      phonenumber:hospitalData.features[32].properties.PHONE
    },
    {
      id:34,
      FacilID: hospitalData.features[33].properties.FACILID,
      Name: hospitalData.features[33].properties.NAME,
      latitude: hospitalData.features[33].geometry.coordinates[1],
      longitude:hospitalData.features[33].geometry.coordinates[0],
      address:hospitalData.features[33].properties.ADDRESS,
      phonenumber:hospitalData.features[33].properties.PHONE
    },
    {
      id:35,
      FacilID: hospitalData.features[34].properties.FACILID,
      Name: hospitalData.features[34].properties.NAME,
      latitude: hospitalData.features[34].geometry.coordinates[1],
      longitude:hospitalData.features[34].geometry.coordinates[0],
      address:hospitalData.features[34].properties.ADDRESS,
      phonenumber:hospitalData.features[34].properties.PHONE
    }])
  })
}
