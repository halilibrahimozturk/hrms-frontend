import { ADD_TO_APPLICATION, REMOVE_FROM_APPLICATION } from "../actions/applicationActions";
import { applicationItems } from "../initialValues/applicationItems";

const initialState = {
    applicationItems: applicationItems

}



export default function applicationReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_APPLICATION:
            let job = state.applicationItems.find(
                a => a.job.id === payload.id)

            if (job) {
                job.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    applicationItems: [...state.applicationItems, { quantity: 1, job: payload }]
                }

            }

        case REMOVE_FROM_APPLICATION:
            return {
                ...state,
                applicationItems: state.applicationItems.filter(a => a.job.id !== payload.id)


            }



        default:
            return state;

    }

}