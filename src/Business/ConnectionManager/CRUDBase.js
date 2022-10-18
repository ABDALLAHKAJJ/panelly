import { axiosBase } from "./ConnectionManagerBase";

export const CRUDBase = {
    getAll: async (url) => {

        let responseData = [];

        await axiosBase.get(url)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                console.log('ERROR', err);
                throw err
            })

        return responseData;

    },
    getById: async (url, id) => {

        let responseData = {};

        await axiosBase.get(url + '/' + id)
            .then(res => {
                responseData = res.data;
            });

        return responseData;

    },
    add: async (url, data) => {


        let responseData = {};

        await axiosBase.post(url, data)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                throw err
            })

        return responseData;


    },
    update: async (url, data, id) => {

        let responseData = {};

        await axiosBase.put(url + '/' + id, data)
            .then(res => {
                responseData = res.data;
            })

        return responseData;

    },
    delete: async (url, id) => {

        await axiosBase.delete(url + '/' + id)
            .then(res => res.data)
            .catch((err) => {
                throw err
            })

    }
}