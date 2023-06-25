import { Box, Grid, Typography, TextField,
  Button
 } from "@mui/material";
import React, { useState, useCallback } from "react";
import api from "../services/api";
import { debounce } from "lodash";


const HomePage = () => {
  const [name, setName] = useState("");
const [kelas, setKelas] = useState("");
const [ulangan1, setUlangan1] = useState("");
const [ulangan2, setUlangan2] = useState("");
const [ulangan3, setUlangan3] = useState("");
const [ulangan4, setUlangan4] = useState("");
const [ulangan5, setUlangan5] = useState("");

// async function mountGetData() {
//   try {
//     const getListSiswas = await api.getListSiswa(
//     );
//     const { data } = getListSiswas.data;
//     setListData(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const debounceMountInsertTransaction = useCallback(
  debounce(mountInsertData, 400)
);

async function mountInsertData() {
  try {
    var payload = {
      data: {
        nama: name,
        kelas: kelas,
        nilai_smst_1: (ulangan1 + ulangan2 + ulangan3 + ulangan4 +ulangan5)/5,
        nilai_smst_2: 0,
        nilai_smst_3: 0,
        nilai_smst_4: 0,
        nilai_smst_5: 0,
      },
    };
    const insertData = await api.postListSiswa(payload);
    const { data } = insertData.data;
    // setModalAdd(false);
    // setModalAddSave(false);
    // debounceMountListEntries();
  } catch (error) {
    console.log(error);
  }
}
  return (
    // <div>
    //   <h1>Translator</h1>
    //   {/* <TranslationPage /> */}
    // </div>
    <Box>
      <Grid>
        <Typography>
          Nama Siswa
        </Typography>
        <TextField onChange={(e) => setName(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Kelas
        </Typography>
        <TextField onChange={(e) => setKelas(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Nilai Ulangan Harian 1
        </Typography>
        <TextField onChange={(e) => setUlangan1(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Nilai Ulangan Harian 2
        </Typography>
        <TextField onChange={(e) => setUlangan2(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Nilai Ulangan Harian 3
        </Typography>
        <TextField onChange={(e) => setUlangan3(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Nilai Ulangan Harian 4
        </Typography>
        <TextField onChange={(e) => setUlangan4(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Typography>
          Nilai Ulangan Akhir Semester
        </Typography>
        <TextField onChange={(e) => setUlangan5(e.target.value)}>

        </TextField>
      </Grid>
      <Grid>
        <Button onChange={()=> debounceMountInsertTransaction()}>
          Enter
        </Button>
      </Grid>
      <Grid>
        <Button href="/about">
          Halaman Daftar Siswa
        </Button>
      </Grid>
    </Box>
  );
};

export default HomePage;
