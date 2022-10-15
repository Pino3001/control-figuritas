import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BotonGuargarJugador from '../ComponentesBD/BotonGuargarJugador'
import '../Estilos/EstiloBotones.css';


const posicion = [
    { value: 'Portero', label: 'Portero' },
    { value: 'Defensor', label: 'Defensor' },
    { value: 'Mediocampista', label: 'Mediocampista' },
    { value: 'Delantero', label: 'Delantero' },
];

const losPaises = [
    { value: 'QAT', label: 'QAT' },
    { value: 'ECU', label: 'ECU' },
    { value: 'SEN', label: 'SEN' },
    { value: 'NED', label: 'NED' },
    { value: 'ENG', label: 'ENG' },
    { value: 'IRN', label: 'IRN' },
    { value: 'USA', label: 'USA' },
    { value: 'WAL', label: 'WAL' },
    { value: 'ARG', label: 'ARG' },
    { value: 'KSA', label: 'KSA' },
    { value: 'MEX', label: 'MEX' },
    { value: 'POL', label: 'POL' },
    { value: 'FRA', label: 'FRA' },
    { value: 'AUS', label: 'AUS' },
    { value: 'DEN', label: 'DEN' },
    { value: 'TUN', label: 'TUN' },
    { value: 'ESP', label: 'ESP' },
    { value: 'CRC', label: 'CRC' },
    { value: 'GER', label: 'GER' },
    { value: 'JPN', label: 'JPN' },
    { value: 'BEL', label: 'BEL' },
    { value: 'CAN', label: 'CAN' },
    { value: 'MAR', label: 'MAR' },
    { value: 'CRO', label: 'CRO' },
    { value: 'BRA', label: 'BRA' },
    { value: 'SRB', label: 'SRB' },
    { value: 'SUI', label: 'SUI' },
    { value: 'CMR', label: 'CMR' },
    { value: 'POR', label: 'POR' },
    { value: 'GHA', label: 'GHA' },
    { value: 'URU', label: 'URU' },
    { value: 'KOR', label: 'KOR' },
];


export default function Jugador() {

    /*     const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
    
        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };
     */

    const [idPais, setIDpais] = React.useState('');
    const ingresoID = (event) => {
        setIDpais(event.target.value);
    };

    const [numeroId, setNumeroid] = React.useState('');
    const ingNumeroId = (event) => {
        setNumeroid(event.target.value);
    };

    const [numeros, setJugadores] = useState([]);
    function getNumeroJugador() {
        fetch('http://localhost:3001/Numeros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idPais }),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setJugadores(data);
            });

    };
    React.useEffect(() => {
        getNumeroJugador();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idPais]);

    const [nombreJug, setNombre] = React.useState('');
    const ingNombre = (event) => {
        setNombre(event.target.value);
    };

    const [posiciones, setPosicion] = React.useState('');
    const laPosicion = (event) => {
        setPosicion(event.target.value);
    };

    const [fechaNac, setFecha] = React.useState('');
    const laFecha = (event) => {
        setFecha(event.target.value);
    };

    const [fechaDebut, setDebut] = React.useState('');
    const elDebut = (event) => {
        setDebut(event.target.value);
    };

    const [pesoJugador, setPeso] = React.useState('');
    const elPeso = (event) => {
        setPeso(event.target.value);
    };

    const [alturaJugador, setAltura] = React.useState('');
    const laAltura = (event) => {
        setAltura(event.target.value);
    };

    const [clubJugador, setClub] = React.useState('');
    const elClub = (event) => {
        setClub(event.target.value);
    };

    return (
        <div className='Player' >
            <Grid marginTop={3} >
                <Typography variant='h4' color='gold' fontFamily='cursive' display='flex' justifyContent='space-around'
                    textAlign='center' fontStyle='italic' marginTop={4} >
                    INGRESE UN NUEVO JUGADOR.
                </Typography>
            </Grid>
            < Divider sx={{ marginTop: 3 }} color={'bisque'} />
            <Grid Item xs={6} md={1} sx={{ marginTop: { xs: 'unset', md: -13 }, paddingLeft: { xs: 'unset', md: 130 } }} alignItems='center' >
                <BotonGuargarJugador sx={{ size: 'large', color: 'gold' }} IDpais={idPais} Numero={numeroId}
                    Nombre={nombreJug} Posicion={posiciones} FechaNacimiento={fechaNac}
                    Debut={fechaDebut} Peso={pesoJugador} Altura={alturaJugador} Club={clubJugador}
                />
            </Grid>
            <div className='Ingreso'>
                <Box width={600} style={{ marginTop: 40, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                    <Grid container spacing={3} sx={{ marginTop: 0 }} >
                        <Grid item xs={8} md={4} >
                            <TextField select value={idPais} onChange={ingresoID} label='ID Pais' helperText='ID Pais'
                                color='warning' margin='dense' focused sx={{ width: '3ch' }} >
                                {losPaises.map((option) => (
                                    <MenuItem sx={{ background: 'gold', paddingTop: 0, paddingBottom: 0, fontFamily: 'cursive' }}
                                        key={option.value} value={option.value} >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField select value={numeroId} onChange={ingNumeroId} label='Numero ID' color='warning' helperText='Numero ID Del Jugador'
                                margin='dense' focused sx={{ width: '3ch' }} >
                                {numeros.map((option) => (
                                    <MenuItem sx={{ background: 'gold', paddingTop: 0, paddingBottom: 0, fontFamily: 'cursive' }}
                                        key={option.Numero_fig} value={option.Numero_fig}>
                                        {option.Numero_fig}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={fechaDebut} onChange={elDebut} label='Debut' helperText='Debut En La Seleccion'
                                InputProps={{ startAdornment: <InputAdornment position='start'>Año</InputAdornment> }}
                                color='warning' margin='dense' focused sx={{ width: '3ch' }}
                            />
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={nombreJug} onChange={ingNombre} label='Nombre' helperText='Nombre y Apellido'
                                color='warning' margin='dense' focused sx={{ width: '4ch' }}
                            />
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={fechaNac} onChange={laFecha} label='Fecha De Nacimiento'
                                color='warning' helperText='MM-DD-AA' margin='dense' focused sx={{ width: '4ch' }}
                            />
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField select value={posiciones} onChange={laPosicion} label='Posicion'
                                color='warning' margin='dense' focused sx={{ width: '4ch' }} >
                                {posicion.map((option) => (
                                    <MenuItem sx={{ background: 'gold', paddingTop: 0, paddingBottom: 0, fontFamily: 'cursive' }}
                                        key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={pesoJugador} onChange={elPeso} label='Peso'
                                InputProps={{ startAdornment: <InputAdornment position='start'>kg</InputAdornment> }}
                                color='warning' margin='dense' focused sx={{ width: '4ch' }
                                } />
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={alturaJugador} onChange={laAltura} label='Altura'
                                InputProps={{ startAdornment: <InputAdornment position='start'>Cm</InputAdornment>, }
                                } color='warning' margin='dense' focused sx={{ width: '4ch' }}
                            />
                        </Grid>
                        <Grid item xs={8} md={4} >
                            <TextField value={clubJugador} onChange={elClub} label='Club' helperText='Club Actual'
                                color='warning' margin='dense' focused sx={{ width: '4ch' }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}