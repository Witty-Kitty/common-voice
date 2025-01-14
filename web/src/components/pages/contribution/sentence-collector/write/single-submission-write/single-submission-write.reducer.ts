import { SentenceSubmissionError } from 'common'

export type SingleSubmissionWriteState = {
  sentence: string
  citation: string
  error: SentenceSubmissionError
  confirmPublicDomain: boolean
}

export enum SingleSubmissionWriteActionType {
  SET_PUBLIC_DOMAIN = 'SET_PUBLIC_DOMAIN',
  SET_SENTENCE = 'SET_SENTENCE',
  SET_CITATION = 'SET_CITATION',
  ADD_SENTENCE_SUCCESS = 'ADD_SENTENCE_SUCCESS',
  ADD_SENTENCE_ERROR = 'ADD_SENTENCE_ERROR',
}

type SetPublicDomainAction = {
  type: SingleSubmissionWriteActionType.SET_PUBLIC_DOMAIN
}

type SetSentenceAction = {
  type: SingleSubmissionWriteActionType.SET_SENTENCE
  payload: { sentence: string }
}

type SetCitationAction = {
  type: SingleSubmissionWriteActionType.SET_CITATION
  payload: { citation: string }
}

type AddSentenceSuccessAction = {
  type: SingleSubmissionWriteActionType.ADD_SENTENCE_SUCCESS
}

type AddSentenceErrorAction = {
  type: SingleSubmissionWriteActionType.ADD_SENTENCE_ERROR
  payload: { error: SentenceSubmissionError }
}

type Action =
  | SetPublicDomainAction
  | SetSentenceAction
  | SetCitationAction
  | AddSentenceSuccessAction
  | AddSentenceErrorAction

export const singleSubmissionWriteReducer = (
  state: SingleSubmissionWriteState,
  action: Action
) => {
  switch (action.type) {
    case SingleSubmissionWriteActionType.SET_PUBLIC_DOMAIN:
      return {
        ...state,
        confirmPublicDomain: !state.confirmPublicDomain,
      }

    case SingleSubmissionWriteActionType.SET_SENTENCE:
      return {
        ...state,
        sentence: action.payload.sentence,
      }

    case SingleSubmissionWriteActionType.SET_CITATION:
      return {
        ...state,
        citation: action.payload.citation,
      }

    case SingleSubmissionWriteActionType.ADD_SENTENCE_SUCCESS:
      return {
        ...state,
        sentence: '',
        citation: '',
        confirmPublicDomain: false,
        error: undefined,
      }

    case SingleSubmissionWriteActionType.ADD_SENTENCE_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }
  }
}
