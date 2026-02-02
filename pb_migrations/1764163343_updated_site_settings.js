/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940974")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file3605651073",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_es",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file156371623",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_en",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1551442565",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "favicon",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940974")

  // remove field
  collection.fields.removeById("file3605651073")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file156371623",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_url",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1551442565",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "favicon_url",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
