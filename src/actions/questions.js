import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { addAnswerToUser, addQuestionToUser } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"

function addAnswerToQuestion({ authedUser, id, yourVote }) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        id,
        yourVote
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleSaveQuestionAnswer(question, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const id = question.id;

        dispatch(showLoading());

        return saveQuestionAnswer({
                authedUser,
                id,
                answer
            })
            .then(() => {
                dispatch(addAnswerToUser(authedUser, id, answer));
                dispatch(addAnswerToQuestion(authedUser, id, answer));
            })
            .then(() => dispatch(hideLoading()));
    };
}

export function handleSaveQuestion(textOne, textTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
                author: authedUser,
                optionOneText: textOne,
                optionTwoText: textTwo
            })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addQuestionToUser(question))
            })
            .then(() => dispatch(hideLoading()))
    }
}