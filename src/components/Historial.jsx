import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const _URL_GET_All = 'http://localhost:3000/api/historial';

export const Historial = () => {

    const { data, error, loading } = useFetch(_URL_GET_All);

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
                                        <td><Link target='_blank' to={`http://localhost:3000/api/search/${url.short}`}>{url.short}</Link></td>
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
