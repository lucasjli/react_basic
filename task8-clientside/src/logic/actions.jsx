import ItemAPI from "../api/Item.jsx";

export function deleteItemById(id) {
    return ItemAPI.deleteItemsByID(id)
}

export function createItem(data) {
    return ItemAPI.createItem(
        data.itemname,
        data.category,
        data.price,
        data.quantity
    );
}