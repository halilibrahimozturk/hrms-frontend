export const ADD_TO_APPLICATION="ADD_TO_APPLICATION"
export const REMOVE_FROM_APPLICATION="REMOVE_FROM_APPLICATION"


export function addToApplication(job){
    return{
        type:ADD_TO_APPLICATION,
        payload: job
    }
}

export function removeFromApplication(job){
    return{  
        type:REMOVE_FROM_APPLICATION,
        payload: job
    }
}
