export const ADD_ANSWER = 'ADD_ANSWER'

export const addAnswer = (questionItem) => ({ type: ADD_ANSWER, payload: questionItem })

export const UPDATE_REJECTION = 'UPDATE_REJECTION'

export const updateRejection = (isRejection) => ({ type: UPDATE_REJECTION, payload: isRejection })