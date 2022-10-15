import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
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

export default function VerJugador() {

    const [cargando, setCargando] = useState(true);

    const [jugadores, setJugadores] = useState([]);
    function getFiguritasJugador() {
        fetch('http://localhost:3001/Jugadores')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setJugadores(data);
                setCargando(false);
            });
    };
    React.useEffect(() => {
        getFiguritasJugador();
    }, []);

    for (let index = 0; index < jugadores.length; index++) {
        const element = jugadores[index];
        element.id = element.IDpais + element.Numero;
    }

    const columnas = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Nombre', headerName: 'Nombre Completo', width: 200 },
        { field: 'Posicion', headerName: 'Posicion', width: 150 },
        { field: 'FechaNacimiento', headerName: 'Fecha De Nacimiento', width: 230 },
        { field: 'Debut', headerName: 'Debut', width: 100 },
        { field: 'Peso', headerName: 'Peso Kg', width: 100 },
        { field: 'Altura', headerName: 'Altura Cm', width: 130 },
        { field: 'Club', headerName: 'Club', width: 100 },
    ];

    return (
        <div className='Repetidas'>
            <Typography variant="h5" color='gold' fontFamily='cursive' display='flex' justifyContent='space-around'
                textAlign='center' fontStyle='italic' marginTop={1} >
                JUGADORES REPETIDOS.
            </Typography>
            <Box style={{ marginTop: 10 }} >
                <Grid style={{ height: 480, width: '100%' }} sx={{ paddingLeft: { xs: 'unset', md: 30, lg: 27.5 } }} >
                    <DataGrid
                        sx={{ color: 'silver' }}
                        loading={cargando}
                        columns={columnas}
                        rows={jugadores}
                        components={{ Toolbar: CustomToolbar, LoadingOverlay: LinearProgress }}
                    />
                </Grid>
            </Box >
        </div >
    );
}