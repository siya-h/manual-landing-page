import { ADD_ANSWER, GO_BACK, UPDATE_REJECTION } from "./actions";

export const quizReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ANSWER:
            const oldAnswers = [...state.answers]
            const isPresent = oldAnswers.findIndex((item) => item.question === payload.question)
            if (isPresent === -1) {
                oldAnswers.push(payload)
                return { ...state, answers: oldAnswers, step: state.step + 1 }
            }
            oldAnswers[isPresent] = payload
            return { ...state, answers: oldAnswers, step: state.step + 1  }
        case UPDATE_REJECTION:
            return { ...state, isRejection: payload }
        case GO_BACK:
            return {...state, step: state.step - 1}
        default:
            return state
    }
}