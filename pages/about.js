import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
const [listData, setListData] = useState([]);

useEffect(()=> {
   if (listData === []){
    mountGetData()
   }
})

  async function mountGetData() {
    try {
      const getListSiswas = await api.getListSiswa(
      );
      const { data } = getListSiswas.data;
      setListData(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Nama</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Kelas</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nilai Semester 1</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nilai Semester 2</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nilai Semester 3</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nilai Semester 4</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nilai Semester 5</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listData &&
              listData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{(index = index + 1)}</TableCell>
                  <TableCell sx={{}}>
                    {item.nama === "" || item.nama === null
                      ? "-"
                      : item.nama}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.kelas === "" || item.kelas === null
                      ? "-"
                      : item.kelas}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.nilai_smst_1 === "" || item.nilai_smst_1 === null
                      ? "-"
                      : item.nilai_smst_1}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.nilai_smst_2 === "" ||
                    item.nilai_smst_2 === null
                      ? "-"
                      : item.nilai_smst_2}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.nilai_smst_3 === "" ||
                    item.nilai_smst_3 === null
                      ? "-"
                      : item.nilai_smst_3}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.nilai_smst_4 === "" ||
                    item.nilai_smst_4 === null
                      ? "-"
                      : item.nilai_smst_4}{" "}
                  </TableCell>
                  <TableCell sx={{}}>
                    {item.nilai_smst_5 === "" ||
                    item.nilai_smst_5 === null
                      ? "-"
                      : item.nilai_smst_5}{" "}
                  </TableCell>
              
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}
