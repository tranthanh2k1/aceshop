import { axiosClient } from './axiosClient';


const ServiceAPI = {
    getAll() {
        const url = `/contact`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/product/add`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/contact/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/contact/${id}`;
        return axiosClient.put(url, data);
    }

}
export default ServiceAPI;
