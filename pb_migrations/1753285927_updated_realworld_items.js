/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // remove field
  collection.fields.removeById("number404475342")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // add field
  collection.fields.addAt(5, new Field({
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
})
