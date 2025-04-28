import ItemAPI from "../api/Item.jsx";

export function deleteItemById(id) {
    return ItemAPI.deleteItemsByID(id)
}