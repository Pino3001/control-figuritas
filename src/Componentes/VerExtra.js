import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import '../Estilos/EstiloBotones.css';

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton sx={{ color: 'bisque', width: 260, fontSize: 12 }} />
            <GridToolbarFilterButton sx={{ color: 'bisque', width: 260, fontSize: 12 }} />
            <GridToolbarDensitySelector sx={{ color: 'bisque', width: 260, fontSize: 12 }} />
            <GridToolbarExport sx={{ color: 'bisque', width: 260, fontSize: 12 }} />
        </GridToolbarContainer>
    );
}

export default function VerExtra() {
    const [cargando, setCargando] = useState(true);

    const [figuExtra, setFigExtra] = useState([]);
    function getFiguritasExtras() {
        fetch('http://localhost:3001/Extras')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setFigExtra(data);
                setCargando(false);
            });
    };
    React.useEffect(() => {
        getFiguritasExtras();
    }, []);

    for (let index = 0; index < figuExtra.length; index++) {
        const element = figuExtra[index];
        element.id = element.IDfig + element.NumEX;
        if (figuExtra[index].Descri == null) {
            return (figuExtra[index].Descri = 'Null');
        }
    }

    const columnaExtra = [
        { field: 'id', headerName: 'ID', width: 260 },
        { field: 'Tipo', headerName: 'Tipo', width: 260 },
        { field: 'Descri', headerName: 'Descripción', width: 260 },
        { field: 'Cantidad', headerName: 'Cantidad', width: 260 },
    ];


    return (
        <div className='RepetidasExtra'>
                 <Typography variant="h5" color='gold' fontFamily='cursive' display='flex'
                    justifyContent='space-around' textAlign='center' fontStyle='italic' marginTop={1} >
                    FIGURITAS EXTRAS REPETIDAS.
                </Typography>
            <Box style={{ marginTop: 10 }} >
                <Grid style={{ height: 480, width: '100%' }} sx={{ paddingLeft: { xs: 'unset', md: 30, lg: 27.5 } }} >
                    <DataGrid
                        sx={{ color: 'silver' }}
                        loading={cargando}
                        columns={columnaExtra}
                        rows={figuExtra}
                        components={{ Toolbar: CustomToolbar, LoadingOverlay: LinearProgress }}
                    />
                </Grid>
            </Box >
        </div >
    );
}
