const data = [
    {
        "View Commands":
            [
                { "View all databases": "show dbs" },
                { "Create database": "use database_name" },
                { "Current Database": "db" },
                { "Delete Database": "db.dropDatabase()" },
            ],
    },
    {
        "Collection Commands":
            [
                { "Create collection": "db.createCollection ( 'collection_name' ) " },
                { "Show Collection": "show collections" },
                { "Drop Collection": "db collection_name.drop()" },
            ]
    },
    {
        "Operation on rows":
            [
                { "Insert one data": "db.collection_name.insert( { 'key' : 'value' } )" },
                { "Insert more than one data": "db.collection_name.insertMany( [ { 'key' : 'value' }, { 'key' : 'value' } ] ) " },
                { "Retrive all data": "db.collection_name.find()" },
                { "Retrive all the data prettified": "db.collection_name.find().pretty()" }
            ]
    },
    {
        "Search in MongoDB":
            [
                { "Find all data": "db.collection_name.find({'key1' : 'value1','key2': 'value2'})" },
                { "Limit the no of data": "db.collection_name.find().limit(5)" },
                { "Count total no of data": "db.collection_name.find().count()" },
                { "Find only one object": "db.collection_name.findOne( { } )" }
            ]
    },
    {
        "Sort the data":
            [
                { "Sort the data in incresing order respect to any key": "cb.collection_name.find().sort( { 'key' : 1 } ) " },
                { "Sort the data in decresing order respect to any key ": "db.collection_name.find().sort( { 'key' :-1 } ) " }
            ]
    },
    {
        "Update a row":
            [
                { "Update a row if key is found in database": "db.collection_name.updateMany( { 'key' : 'value' }, { 'updatedKey' : 'UpdatedValue' } ) " },
                { "Update a row with upsert": "db.collection_name.updateMany( { 'key' : 'value' }, { 'updatedKey' : 'updatedValue' }, { 'upsert' : 'true' } ) //If object not found then insert the object in the collection" }
            ]
    },
    {
        "MongoDB Operator":
            [

                { "Increment operator": "db.collection_name.update( {'key' : 'value' }, { $inc: { 'key' : 1} } ) // Increment value by 1 of key" },
                { "Decreament operator": "db.collection_name.update( {'key' : 'value' }, { $dec: { 'key' : 1} } ) // Decreament value by 1 of key" },
                { "Rename operator": "db.collection_name.update( {'key' : 'value' }, { $rename: { 'key' : 'renamekey' } } ) // Rename key with renamekey" },
                {"Less than operator":"db.collection_name.find( { 'key' : { $lt: 90 } } ) // lt stands for less than"},
                {"Less than or equal to operator":"db.collection_name.find( { 'key' : { $lte: 90 } } ) // lte stands for less than or equal"},
                {"Greater than operator":"db.collection_name.find( { 'key' : { $gt: 90 } } ) // gt stands for greater than"},
                {"Greater than or equal operator":"db.collection_name.find( { 'key' : { $gte: 90 } } ) // gte stands for greater than or equal"},
                { "For more operator go through this link": "https://docs.mongodb.com/manual/reference/operator/" }
            ]
    },
    {
        "Delete Operation": 
        [
            {"Delete a row with _id": "db.collection_name.remove ( {_id: 'id_value'} ) "}
        ]
    }
];
export default data;