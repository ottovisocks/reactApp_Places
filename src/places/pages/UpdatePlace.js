import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DPLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm(
        {
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        }, 
        true
    );

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Nav atrasta vieta!</h2>
            </div>
        );
    }

    return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
            id="title" 
            element="input"
            type="text" 
            label="Nosaukums"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ievadi nosaukumu!"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input 
            id="description"
            element="textarea"
            type="text" 
            label="Apraksts"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Ievadi aprakstu (ne mazāk kā 5 simboli)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid} >
            Labot
        </Button>
    </form>
    );
};

export default UpdatePlace;