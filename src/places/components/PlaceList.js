import React, { useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import PlaceItem from './PlaceItem';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceList.css';

const PlaceList = props => {
    const auth = useContext(AuthContext);

    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    {auth.isLoggedIn && (
                        <h2>Nav atrastas apskates vietas. Vai vēlies pievienot vienu?</h2>
                    )}
                    {auth.isLoggedIn && (
                        <Button to="/places/new">Pievieno vietu</Button>
                     )}
                    {!auth.isLoggedIn && (
                        <h2>Nav atrastas apskates vietas.</h2>
                    )}
                </Card>
            </div>
        );
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem 
            key={place.id} 
            id={place.id} 
            image={place.imageUrl} 
            title={place.title} 
            description={place.description} 
            adress={place.adress} 
            creatorId={place.creator} 
            coordinates={place.location}
        />)}
    </ul>
};

export default PlaceList;