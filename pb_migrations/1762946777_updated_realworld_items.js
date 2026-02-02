/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // add field
  collection.fields.addAt(15, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2195566442",
    "maxSize": 0,
    "name": "expression_es",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(14, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1231304184",
    "maxSize": 0,
    "name": "expression_en",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3942632688")

  // remove field
  collection.fields.removeById("editor2195566442")

  // update field
  collection.fields.addAt(14, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1231304184",
    "maxSize": 0,
    "name": "expression",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
