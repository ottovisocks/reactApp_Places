import React from 'react';
import { useParams } from 'react-router-dom'; // šis nosaka, ka tiek izvilkti dati pēc id, pretējā gadijumā tiek attēloti visi dati.
import PlaceList from '../components/PlaceList';

const DPLACES = [
    {
        id: 'p1', 
        title: 'Ķemeru Nacionālais parks', 
        description: 'Ķemeru nacionālais parks ir trešais lielākais Latvijas nacionālais parks, tas ir dibināts 1997. gadā.', 
        imageUrl: 'https://www.jurmala.lv/resources/web/par_jurmalu/vide/695x/kemeru_purvs.jpeg',
        adress: 'Pavasari, Salas pagasts', 
        location: {
            lat: 56.9487084, 
            lng: 23.4515183
        },
        creator: 'u1'
    },
    {
        id: 'p2', 
        title: 'Vecā kamaniņu trase', 
        description: 'Murjāņu kamaniņu trase ir reāli unikāla inženierbūve – vairāku simtu metru garumā.', 
        imageUrl: 'https://cdn1.img.sputniknewslv.com/images/554/03/5540328.jpg', 
        adress: 'Sējas novads, LV-2144', 
        location: {
            lat: 57.1444208, 
            lng: 24.6783157
        },
        creator: 'u1'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DPLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;