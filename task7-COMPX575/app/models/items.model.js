const db = require("./db");

// TODO: complete the code as per the instructions given README.md


// const Project = function(/* ... */) {
//   // ...
// };


class Items {
    constructor(itemname, category, price, quantity) {
        this.itemname = itemname;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }

    static createItems(item, callback) {
        const query = 'INSERT INTO items (itemname, category, price, quantity) VALUES (?, ?, ?, ?)';
        db.query(query, [item.itemname, item.category, item.price, item.quantity], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }

    static retrieveAllItems(callback) {
        const query = 'SELECT * FROM items';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static retrieveItemsByID(id, callback) {
        const query = 'SELECT * FROM items WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }

    static retrieveItemsByItemName(itemname, callback) {
        const query = 'SELECT * FROM items WHERE itemname = ?';
        db.query(query, [itemname], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static updateItemsByID(id, updatedItem, callback) {
        const query = 'UPDATE items set ? WHERE id = ?';
        db.query(query, [updatedItem, id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }

    static deleteItemsByID(id, callback) {
        const query = 'DELETE FROM items WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }

    static deleteAllItems(callback) {
        const query = 'DELETE FROM items';
        db.query(query, (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
}

// module.exports = Project;

module.exports = Items;

