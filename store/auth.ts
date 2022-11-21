import { defineStore } from "pinia";

const url = 'http://127.0.0.1:3005/auth';

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        user: [] as any,
    }),
    actions: {
        async login(user: any) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            localStorage.setItem('token', data.accessToken);

            if (localStorage.getItem('token')) {
                const dataUser = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                const users = await dataUser.json();
                localStorage.setItem('user', JSON.stringify(users));
                // serilizer user from localstorage
                this.user = JSON.parse(localStorage.getItem('user') || '{}');
            } else {
                this.user = [];
            }
        },

        // logout user remove token from localstorage
        async logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.user = [];
        },
    },

    getters: {
        users: (state) => state.user,
    },

    persist: true,

});