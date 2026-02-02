/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool2782320628",
    "name": "force_last_position",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool2782320628",
    "name": "force_zero_position",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
