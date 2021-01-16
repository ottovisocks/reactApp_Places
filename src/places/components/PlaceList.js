import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
    if (props.items.length === 0) {
        return (
        <div className="place-list center">
            <Card className="place-list-nofound">
                <h2>Nav atrastas vietas. Vai vēlies pievienot vienu?</h2>
                <button>Pievieno vietu</button>
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