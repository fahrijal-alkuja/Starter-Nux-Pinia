import { defineStore } from "pinia";

const url = 'http://127.0.0.1:3005/jadwal';

export const useJadwalStore = defineStore('jadwal-store', {
    state: () => ({
        jadwal: [] as any,
    }),
    actions: {
        // getAlljadwal
        async getAlljadwal() {
            const response = await fetch(url);
            const data = await response.json();
            this.jadwal = data;
        },

        // getjadwalById
        async getjadwalById(id: string) {
            const response = await fetch(`${url}/${id}`);
            const data = await response.json();
            this.jadwal = data;
        },
        // add new jadwal
        async addNewjadwal(jadwal: any) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jadwal)
            });
            const data = await response.json();
            this.jadwal.push(data);
        },

        // update jadwal
        async updatejadwal(jadwal: any) {
            const response = await fetch(`${url}/${jadwal._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jadwal)
            });
            const data = await response.json();
            const index = this.jadwal.findIndex((item: any) => item._id === data._id);
            this.jadwal.splice(index, 1, data);
        },

        // delete jadwal
        async deletejadwal(id: string) {
            await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });
            const index = this.jadwal.findIndex((item: any) => item._id === id);
            this.jadwal.splice(index, 1);
        }
    },
    getters: {
        jadwals: (state) => state.jadwal,
    }
})