import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../redux/thunks';


const DogsComponent = () => {
    const dispatch = useDispatch();
    const { dogs, status, error } = useSelector(state => state.dogs);

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch]);

    if (status === 'loading') {return <p>Loading...</p>};
    if (status === 'failed') {return <p>{error}</p>};

    return (
        <>
            <h1>Tipo Dogs</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.id}>{dog.attributes.name}</li>
                ))}
            </ul>
        </>
    )
}

export default DogsComponent;
