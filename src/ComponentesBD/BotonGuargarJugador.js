import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import IconButton from '@mui/material/IconButton';

export default function BotonGuargarJugador(props) {
    const createJugador = () => {
        const { IDpais, Numero, Nombre, Posicion, FechaNacimiento, Debut, Peso, Altura, Club } = props;
        fetch('http://localhost:3001/Jugadores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ IDpais, Numero, Nombre, Posicion, FechaNacimiento, Debut, Peso, Altura, Club }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
            });
    }
    return (<IconButton sx={{ color: 'gold' }}>
        <SaveSharpIcon onClick={createJugador} sx={{ fontSize: 50 }} />
    </IconButton>);
}

