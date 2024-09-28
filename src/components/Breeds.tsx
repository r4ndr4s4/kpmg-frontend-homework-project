import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import dogs from '@/assets/dogs.json';

export const rows: GridRowsProp = dogs.map((dog) => ({
  id: dog.id,
  breed: 'https://placehold.co/50x50', // dog.reference_image_id
  name: dog.name,
  group: dog.breed_group,
  life: dog.life_span,
}));

const columns: GridColDef[] = [
  {
    field: 'breed',
    headerName: 'Breed',
    width: 70,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => <img src={params.value} />,
  },
  { field: 'name', headerName: 'Breed name', width: 300 },
  { field: 'group', headerName: 'Breed group', width: 200, sortable: false },
  { field: 'life', headerName: 'Life expectancy', width: 200, filterable: false, disableColumnMenu: true },
];

function Breeds() {
  return <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />;
}

export default Breeds;
