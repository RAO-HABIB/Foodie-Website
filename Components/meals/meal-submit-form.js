'use client';

import { useFormState, useFormStatus } from "react-dom";


export default function MealSubmitform(){
    const {pending} = useFormStatus();

    return(
        <button>{pending ?  'Submitting' : 'Share Meal'}</button>
    );
}