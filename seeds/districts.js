const districtData = require("../src/data/School_Board_District")

exports.seed = function(knex) {
  return knex('districts').del()
  .then(() => {
    return knex("districts").insert([{
      id:districtData.features[0].properties.OBJECTID,
      boardmember:districtData.features[0].properties.BRDMBR,
      shapearea: districtData.features[0].properties.Shape__Area,
      shapelength: districtData.features[0].properties.Shape__Length,
      coordinates: districtData.features[0].geometry.coordinates[0][0][0]
    },{
      id:districtData.features[1].properties.OBJECTID,
      boardmember:districtData.features[1].properties.BRDMBR,
      shapearea: districtData.features[1].properties.Shape__Area,
      shapelength: districtData.features[1].properties.Shape__Length,
      coordinates: districtData.features[1].geometry.coordinates[0][0]
    },{
      id:districtData.features[2].properties.OBJECTID,
      boardmember:districtData.features[2].properties.BRDMBR,
      shapearea: districtData.features[2].properties.Shape__Area,
      shapelength: districtData.features[2].properties.Shape__Length,
      coordinates: districtData.features[2].geometry.coordinates[0][0]
    },{
      id:districtData.features[3].properties.OBJECTID,
      boardmember:districtData.features[3].properties.BRDMBR,
      shapearea: districtData.features[3].properties.Shape__Area,
      shapelength: districtData.features[3].properties.Shape__Length,
      coordinates: districtData.features[3].geometry.coordinates[0][0]
    },{
      id:districtData.features[4].properties.OBJECTID,
      boardmember:districtData.features[4].properties.BRDMBR,
      shapearea: districtData.features[4].properties.Shape__Area,
      shapelength: districtData.features[4].properties.Shape__Length,
      coordinates: districtData.features[4].geometry.coordinates[0][0]
    },{
      id:districtData.features[5].properties.OBJECTID,
      boardmember:districtData.features[5].properties.BRDMBR,
      shapearea: districtData.features[5].properties.Shape__Area,
      shapelength: districtData.features[5].properties.Shape__Length,
      coordinates: districtData.features[5].geometry.coordinates[0][0]
    },{
      id:districtData.features[6].properties.OBJECTID,
      boardmember:districtData.features[6].properties.BRDMBR,
      shapearea: districtData.features[6].properties.Shape__Area,
      shapelength: districtData.features[6].properties.Shape__Length,
      coordinates: districtData.features[6].geometry.coordinates[0][0]
    },{
      id:districtData.features[7].properties.OBJECTID,
      boardmember:districtData.features[7].properties.BRDMBR,
      shapearea: districtData.features[7].properties.Shape__Area,
      shapelength: districtData.features[7].properties.Shape__Length,
      coordinates: districtData.features[7].geometry.coordinates[0][0]
    },{
      id:districtData.features[8].properties.OBJECTID,
      boardmember:districtData.features[8].properties.BRDMBR,
      shapearea: districtData.features[8].properties.Shape__Area,
      shapelength: districtData.features[8].properties.Shape__Length,
      coordinates: districtData.features[8].geometry.coordinates[0][0]
    }]);
  });
};
