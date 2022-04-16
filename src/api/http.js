import axios from "axios";
import store from "@/store/index";
import { isTokenStillFresh } from "@/utils/utils";

const API_URL = "https://projectzero-api-0.herokuapp.com/api/v1.0/";

class Http {

    constructor(builder) {
        this.http = axios.create({
            baseURL: API_URL
        });
        for (let header in builder.headers) {
            this.http.defaults.headers[header] = builder.headers[header];
        }
        this.http.defaults.headers["accept"] = "application/json";
        this.http.defaults.headers["Accept-Language"] = store.getters.locale;
        this.withPagination = builder.withPagination;
    }

    async post(where, data) {
        return await this.http.post(where, data);
    }

    async get(where, data) {
        return await this.http.get(where, data);
    }

    async put(where, data) {
        return await this.http.put(where, data);
    }

    async patch(where, data) {
        return await this.http.patch(where, data);
    }

    async delete(where, data) {
        return await this.http.delete(where, data);
    }
}

class HttpBuilder {

    constructor() {
        this.headers = []
        this.withPagination = false;
    }

    setAuthorizationToken(token) {
        this.headers["Authorization"] = `Bearer ${token}`;
        return this;
    }

    useAuthorization() {
        if (isTokenStillFresh(store.getters.accessToken)) {
            this.headers["Authorization"] = `Bearer ${store.getters.accessToken}`;
            return this;
        }
    }

    setContentType(contentType) {
        this.headers["Content-Type"] = contentType;
        return this;
    }

    setHeader(key, value) {
        this.headers[key] = value;
        return this;
    }

    useDefaultContentType() {
        return this.setContentType("application/json");
    }

    usePagination(count=5, offset=0) {
        this.withPagination = true;
        this.headers["count"] = count;
        this.headers["offset"] = offset;
        return this;
    }

    build() {
        return new Http(this);
    }

}

export {
    HttpBuilder
}
