/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number3680517983",
    "max": null,
    "min": null,
    "name": "distance_value",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_586599074",
    "hidden": false,
    "id": "relation3339048297",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "distance_unit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "number404475342",
    "max": null,
    "min": null,
    "name": "angle_degree",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // remove field
  collection.fields.removeById("number3680517983")

  // remove field
  collection.fields.removeById("relation3339048297")

  // remove field
  collection.fields.removeById("number404475342")

  return app.save(collection)
})
