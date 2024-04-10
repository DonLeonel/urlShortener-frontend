import { useState } from 'react';
import '../styles/conversor.css'
import { Link } from 'react-router-dom';

const _URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const Conversor = () => {

    const [ultimaUrl, setUltimaUrl] = useState(false);

    const handlerFetch = (e) => {

        e.preventDefault();
        const full = e.target.urlFull.value;

        if (full != '') {
            const urlFull = {
                full
            };

            fetch(`${_URL}/api/shortUrl`, {
                method: 'POST',
                body: JSON.stringify(urlFull),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setUltimaUrl(data.data);
                })
                .catch(er => console.error('Algo salio mal al enviar la url', er.message))
        } else {
            alert('El campo url no debe estar vacio.')
        }
    }

    return (
        <>
            <div className='descripcion'>
                <h3 className='titulo'>Características</h3>
                <p className='parrafo'>
                    Acorta URLs largas a enlaces más cortos y
                    redirecciona automáticamente a la URL original cuando se accede al enlace acortado, ademas
                    realiza un seguimiento de los clicks en los enlaces acortados para generar estadísticas de acceso.
                </p>
            </div>

            <form id='Form' onSubmit={handlerFetch} className='form'>
                <div className='containerFull'>
                    <input className='inputFull' type="text" name='urlFull' id='urlFull' placeholder='Ingrese la url aquí' />
                </div>
                <div className='containerButton'>
                    <button className='buttonSubmit' type='submit'>Acortar</button>
                </div>
            </form>

            {ultimaUrl &&
                <div className='ultimaUrl'>
                    <h5>Url generada.</h5>
                    <Link target='_blank' to={`${_URL}/api/search/${ultimaUrl.short}`}>{ultimaUrl.short}</Link>                    
                </div>
            }
        </>
    )
}