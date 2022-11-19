<template>
  <div>
    <h1>page jadwal</h1>
    <!-- form input -->
    <h3>{{ formTitle }}</h3>
    <form @submit.prevent="addJadwal">
      <input type="text" v-model="editedItem.nama" placeholder="jadwal" />
      <br />
      <input
        type="text"
        v-model="editedItem.tanggalMulai"
        placeholder="tanggal Mulai"
      />
      <br />
      <input
        type="text"
        v-model="editedItem.tanggalSelesai"
        placeholder="tanggal Selesai"
      />
      <br />
      <button type="submit">add</button>
    </form>
    <!-- list table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nama</th>
          <th scope="col">Hari</th>
          <th scope="col">Jam</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in jadwalStore.jadwals" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.nama }}</td>
          <td>{{ item.tanggalMulai }}</td>
          <td>{{ item.tanggalSelesai }}</td>
          <td>
            <button class="btn btn-primary" @click="edits(item)">Edit</button>
            <button class="btn btn-danger" @click="hapus(item._id)">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      <button @click="addjadwal()">jadwals</button>
    </p>
  </div>
</template>

<script setup>
import { useJadwalStore } from "~/store/jadwal";

definePageMeta({
  layout: "admin",
});
const jadwalStore = useJadwalStore();
const editedIndex = ref(-1);
const editedItem = ref({
  nama: "",
  tanggalMulai: "",
  tanggalSelesai: "",
});
const clear = () => {
  editedItem.value.nama = "";
  editedItem.value.tanggalMulai = "";
  editedItem.value.tanggalSelesai = "";
};

const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Jadwal" : "Edit Jadwal";
});

onMounted(async () => {
  await jadwalStore.getAlljadwal();
});

// add jadwal
const addJadwal = async () => {
  if (editedIndex.value === -1) {
    await jadwalStore.addNewjadwal(editedItem.value);
  } else {
    await jadwalStore.updatejadwal(editedItem.value);
  }
  clear();
};

// editItem
const edits = async (item) => {
  editedIndex.value = jadwalStore.jadwals.indexOf(item);
  editedItem.value = item;
};

// hapus jadwal
const hapus = async (id) => {
  await jadwalStore.deletejadwal(id);
};
</script>

<style lang="scss" scoped></style>
