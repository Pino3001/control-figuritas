import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import BotonGuargarExtras from '../ComponentesBD/BotonGuardarExtras';
import '../Estilos/EstiloBotones.css';

export default function Extras() {

    const [idFigurita, setIDfigurita] = React.useState('');
    const ingresoID = (event) => {
        setIDfigurita(event.target.value);
    };

    const [numeroFigu, setNumerofigu] = React.useState('');
    const ingresoNumero = (event) => {
        setNumerofigu(event.target.value);
    };

    const [tipoFigurita, setTipo] = React.useState('');
    const ingresoTipo = (event) => {
        setTipo(event.target.value);
    };

    const [descripFig, setDescrip] = React.useState('');
    const ingresoDescrip = (event) => {
        setDescrip(event.target.value);
    };
    return (
        <div className='Salida'>
            <Box style={{ marginTop: 0 }} >
                <Typography variant='h4' color='gold' fontFamily='cursive' display='flex' justifyContent='space-around'
                    textAlign='center' fontStyle='italic' marginTop={3} >
                    INGRESE UNA FIGURITA EXTRA.
                </Typography>
                < Divider sx={{ marginTop: 3 }} color='bisque' />
                <Grid Item xs={6} md={1} sx={{ marginTop: { xs: 'unset', md: -13 }, paddingLeft: { xs: 'unset', md: 130 } }} alignItems='center'>
                    <BotonGuargarExtras sx={{ size: 'large', color: 'gold' }}
                        IDfig={idFigurita} NumEX={numeroFigu} Tipo={tipoFigurita}
                    />
                </Grid>
                <div className='Ingreso'>
                    <Box width={600} style={{ marginTop: 30, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                        <Grid container spacing={1} direction='row' justifyContent='center' >
                            <Grid item xs={8} md={8} >
                                <TextField value={idFigurita} onChange={ingresoID} label='ID Figuritas' helperText='Ingrese el ID'
                                    color='warning' margin='dense' focused sx={{ width: '9ch' }}
                                />
                            </Grid>
                            <Grid item xs={8} md={8} >
                                <TextField value={numeroFigu} onChange={ingresoNumero} label='Numero' helperText='Numero Control'
                                    color='warning' margin='dense' focused sx={{ width: '9ch' }}
                                />
                            </Grid>
                            <Grid item xs={8} md={8} >
                                <TextField value={tipoFigurita} onChange={ingresoTipo} label='Tipo' helperText='Tipo De Figurita'
                                    color='warning' margin='dense' focused sx={{ width: '9ch' }}
                                />
                            </Grid>
                            <Grid item xs={8} md={8} >
                                <TextField value={descripFig} onChange={ingresoDescrip} label='Descripción'
                                    color='warning' margin='dense' focused sx={{ width: '9ch' }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Box>
        </div>
    );
}
