<h2 align="center">BBQ API dibuat dengan Express.js Salah satu Framework nya Node.js </h2>

Sudah di Hosting di Heroku:
https://serverq.herokuapp.com/

## Daftar Isi

- [Daftar Isi](#daftar-isi)
- [Daftar API](#daftar-routes-yang-kita-gunakan.)
- [Lisensi](#lisensi)

### Daftar routes yang kita gunakan.

Api ini di test / uji dengan menggunakan Aplikasi Postman Desktop

| Nama Routes                | HTTP   | Deskripsi                                   | Dibuat | Hasil Test | Middleware `Auth` |
| :------------------------- | :----- | :------------------------------------------ | :----- | :--------- | :---------------- |
| `/`                        | GET    | Menampilkan Halaman Utama                   | Sudah  | OK         | Tidak             |
| `/api`                     | GET    | Menampilkan Halaman Utama dalam bentuk JSON | Sudah  | OK         | Tidak             |
| `/api/v1/auth/signin`      | POST   | Melakukan Sign In User yang sudah Terdaftar | Sudah  | OK         | Tidak             |
| `/api/v1/auth/signup`      | POST   | Melakukan Pendaftaran User Baru             | Sudah  | OK         | Tidak             |
| `/api/v1/users/`           | GET    | Memberikan data semua Users                 | Belum  | -          | Tidak             |
| `/api/v1/users/create`     | POST   | Melakukan Pendaftaran User Baru             | Belum  | -          | Ya                |
| `/api/v1/users/edit/:id`   | POST   | Melakukan Pendaftaran User Baru             | Belum  | -          | Ya                |
| `/api/v1/users/delete/:id` | DELETE | Melakukan Pendaftaran User Baru             | Belum  | -          | Ya                |

<!-- app.use("/api/v1", indexRouterApi);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/dosen", dosenRouter);
app.use("/api/v1/kelas", kelasRouter);
app.use("/api/v1/jurusan", jurusanRouter);
app.use("/api/v1/mahasiswa", mahasiswaRouter);
app.use("/api/v1/nilai", nilaiRouter);
app.use("/api/v1/tutor", tutorRouter);
app.use("/api/v1/astor", astorRouter);
app.use("/api/v1/jadwal", jadwalRouter);
app.use("/api/v1/kelompok", kelompokRouter); -->

### TODO

Apa saja yang akan di rancang bisa dilihat di routes di atas, untuk progress todo dan sebagainya, silahkan cek di Trello ini : https://trello.com/b/sLexvZ8U/final-project-2-fullstack

### Lisensi

Private
