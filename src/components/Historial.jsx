import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const _URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const Historial = () => {

    const { data, error, loading } = useFetch(`${_URL}/api/historial`);

    return (
        <>
            {/* <form className="seachFull">
                <input type="text" name="searchFull" id="searchFull" />
                <button>Buscar</button>
            </form> */}

            {loading ? <h2>Cargando...</h2>
                : <table className='table'>
                    <thead>
                        <tr>
                            <th>Full Url</th>
                            <th>Short Url</th>
                            <th>Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error ? console.log(error.message)
                            : data && data.data.map(url => {
                                return (
                                    <tr key={url.id}>
                                        <td>{url.full}</td>
                                        <td><Link target='_blank' to={`${_URL}/api/search/${url.short}`}>{url.short}</Link></td>
                                        <td>{url.clicks}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            }
        </>
    )
}
