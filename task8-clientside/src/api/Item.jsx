import store from "../store/index";
import qs from "qs";
import axios from "axios"

const ItemAPI = {

    // create Item
    /**
     *
     * @param itemname
     * @param category
     * @param price
     * @param quantity
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createItem(itemname, category, price, quantity) {
        return axios.post(
            store.urls.createItem,
            qs.stringify({
                itemname,
                category,
                price,
                quantity,
            })
        );
    },

    /**
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    retrieveAllItems() {
        return axios.get(store.urls.retrieveAllItems)
    },

    /**
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    retrieveItemsByID(id) {
        return axios.get(store.urls.retrieveItemsByID + "?id=" + id)
    },

    /**
     *
     * @param itemname
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    retrieveItemsByItemName(itemname) {
        return axios.get(store.urls.retrieveItemsByItemName + "?itemname=" + itemname)
    },

    /**
     *
     * @param id
     * @param itemname
     * @param category
     * @param price
     * @param quantity
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateItemsByID(id, itemname, category, price, quantity) {
        return axios.put(
            store.urls.retrieveItemsByID,
            qs.stringify({
                id,
                itemname,
                category,
                price,
                quantity
            })
        )
    },

    /**
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteItemsByID(id) {
        return axios.post(
            store.urls.retrieveItemsByID,
            qs.stringify({
                id
            })
        )
    },

    /**
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteAllItems() {
        return axios.delete(store.urls.retrieveAllItems)
    },
};

export default ItemAPI;
