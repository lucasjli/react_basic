import store from "../store/index";
// import qs from "qs";
import axios from "axios"

const ItemAPI = {

    // create Item
    createItem() {
        return axios.post(store.urls.createItem);
    },
    retrieveAllItems() {
        return axios.get(store.urls.retrieveAllItems)
    },
    retrieveItemsByID() {
        return axios.get(store.urls.retrieveItemsByID)
    },
    retrieveItemsByItemName() {
        return axios.get(store.urls.retrieveItemsByID)
    },
    updateItemsByID() {
        return axios.put(store.urls.retrieveItemsByID)
    },
    deleteItemsByID() {
        return axios.delete(store.urls.retrieveItemsByID)
    },
    deleteAllItems() {
        return axios.delete(store.urls.retrieveAllItems)
    },



    /**
     * Passkeys - 完成注册
     * @param credential
     * @param userId
     * @param publicKeyCredentialCreationOptionsJson
     */
    finishRegistration(credential, userId, publicKeyCredentialCreationOptionsJson) {
        return axios.post(
            store.urls.passkeys.registration.finish,
            qs.stringify({
                credential,
                userId,
                publicKeyCredentialCreationOptionsJson
            })
        );
    },

    /**
     * Passkeys - 申请登录
     */
    requestLogin() {
        return axios.post(store.urls.passkeys.login.request);
    },

    /**
     * Passkeys - 完成登录
     * @param credential
     * @param assertionRequest
     * @param type
     */
    finishLogin(credential, assertionRequest, type) {
        return axios.post(
            store.urls.passkeys.login.finish,
            qs.stringify({
                credential,
                assertionRequest,
                type,
            })
        );
    }
};

export default ItemAPI;
