import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import IconButton from '@mui/material/IconButton';
import '../Estilos/EstiloBotones.css';

export default function BotonGuargarExtras(props) {
    const createExtra = () => {
        const { IDfig, NumEX, Tipo} = props;
        fetch('http://localhost:3001/FiguritasExtras', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ IDfig, NumEX, Tipo }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
            });
    }
    return (<IconButton >
        <SaveSharpIcon onClick={createExtra} sx={{ fontSize: 50, color:'gold' }} />
    </IconButton>);
}

