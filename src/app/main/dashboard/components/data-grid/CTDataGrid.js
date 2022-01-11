import { useState, Fragment } from 'react';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Button } from '@mui/material';

const CTDataGrid = () => {
  const columns = [
    { field: 'id', width: 100, headerName: 'ID' },
    {
      field: 'project',
      headerName: 'Project',
      width: 170,
    },
    {
      field: 'pid',
      headerName: 'PID',
      width: 170,
    },
    {
      field: 'acquisition_date',
      headerName: 'Acquisition Date',
      width: 200,
    },
    {
      field: 'processed_by',
      headerName: 'Processed By',
      width: 170,
    },
  ];

  const rows = [
    {
      id: 1,
      project: 'SARP',
      pid: 'SAPR0001',
      acquisition_date: '2022/1/7',
      processed_by: 'TK',
    },
    {
      id: 2,
      project: 'GALA',
      pid: '127-06-001',
      acquisition_date: '2021/12/15',
      processed_by: 'TK',
    },
    {
      id: 3,
      project: 'GALA',
      pid: '127-06-002',
      acquisition_date: '2021/12/17',
      processed_by: 'TK',
    },
    {
      id: 4,
      project: 'GALA',
      pid: '127-06-003',
      acquisition_date: '2021/12/25',
      processed_by: 'TK',
    },
    {
      id: 5,
      project: 'GALA',
      pid: '127-06-004',
      acquisition_date: '2021/12/27',
      processed_by: 'TK',
    },
  ];

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        //   onSelectionModelChange={(scanIndexes) => {
        //     updateScanSelected(scanIndexes);
        //   }}
      />
    </>
  );
};

export default CTDataGrid;
