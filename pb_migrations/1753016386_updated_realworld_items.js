/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // remove field
  collection.fields.removeById("number404475342")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "number1178025846",
    "max": null,
    "min": null,
    "name": "arc_length_value",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_586599074",
    "hidden": false,
    "id": "relation1114788844",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "arc_length_unit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

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

  // remove field
  collection.fields.removeById("number1178025846")

  // remove field
  collection.fields.removeById("relation1114788844")

  return app.save(collection)
})
