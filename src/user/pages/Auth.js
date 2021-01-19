import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
    } from '../../shared/util/validators';
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, 
            formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, 
            false
            );
        }

        setIsLoginMode(prevMode => !prevMode);

    };

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    return (
    <Card className="authentication">
        <h2>{isLoginMode ? 'Autorizācija' : 'Reģistratūra'}</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
            {!isLoginMode && (
                <Input 
                    element="input" 
                    id="name" 
                    type="text" 
                    label="Jūsu vārds" 
                    validators={[VALIDATOR_REQUIRE()]} 
                    errorText="Ievadi vārdu"
                    onInput={inputHandler}
                />
            )}
            <Input 
                element="input" 
                id="email" 
                type="email" 
                label="E-pasts" 
                validators={[VALIDATOR_EMAIL()]} 
                errorText="Ievadi e-pasta adresi"
                onInput={inputHandler}
            />
            <Input 
                element="input" 
                id="password" 
                type="password" 
                label="Parole" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Ievadi paroli, vismaz 5 simboli."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                {isLoginMode ? 'Ienākt' : 'Reģistrēties'}
                </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
            Doties uz {isLoginMode ? 'Reģistratūru' : 'Autorizāciju'}
            </Button>
        </Card>
    );
};

export default Auth;