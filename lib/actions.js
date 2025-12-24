'use server';
import { redirect } from "next/navigation";
import { SaveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function IsInvalidText(text){
    return !text || text.trim() ==='';
}
 export async function ShareMeal(prevState, formData){
    const meal={
        title : formData.get('title'),
        summary : formData.get('summary'),
        instructions : formData.get('instructions'),
        image : formData.get('image'),
        creator : formData.get('name'),
        creator_email : formData.get('email')  
              
    }

    if(IsInvalidText(meal.title) || IsInvalidText(meal.summary)||IsInvalidText(meal.instructions)|| IsInvalidText(meal.creator) || IsInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
     !meal.image ||
     !meal.image.size === 0 
    ){
        return {
            message : ' invalid Input. '
        };
    }

    await SaveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}