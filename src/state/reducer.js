import { ADD_ANSWER, UPDATE_REJECTION } from "./actions";

export const quizReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ANSWER:
            const oldAnswers = [...state.answers]
            const isPresent = oldAnswers.findIndex((item) => item.question === payload.question)
            if (isPresent === -1) {
                oldAnswers.push(payload)
                return { ...state, answers: oldAnswers }
            }
            oldAnswers[isPresent] = payload
            return { ...state, answers: oldAnswers }
        case UPDATE_REJECTION:
            return { ...state, isRejection: payload }
        default:
            return state
    }
}