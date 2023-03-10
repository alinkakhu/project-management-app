import { AuthManager } from "./auth.manager";
import { Config } from "./config";
export class Api {
    static instance: Api;
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    static getInstance() {
        if (!Api.instance) {
            Api.instance = new Api('http://localhost:3000');
        }
        return Api.instance;
    }

    async get(endpoint: string) {
        const url = new URL(endpoint, this.baseUrl);
        return await (await fetch(url.toString())).json();
    }

    async post(endpoint: string, data: any) {
        const url = new URL(endpoint, this.baseUrl);
        return await (await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })).json();
    }

    async put(endpoint: string, data: any) {
        const url = new URL(endpoint, this.baseUrl);
        return await (await fetch(url.toString(), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })).json();
    }

    async delete(endpoint: string, args: any[]) {
        const url = new URL(endpoint, this.baseUrl);
        return await (await fetch(url.toString(), {
            method: 'DELETE'
        })).json();
    }
}