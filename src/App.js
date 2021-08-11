import { ChakraProvider } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Quiz from './pages/Quiz';
import { quizReducer } from './state/reducer';
import theme from './theme/theme';
import { createContext, useContext } from "react";
import questionnaire from './questionnaire';

export const QuizContext = createContext({})
export const useQuizContext = () => useContext(QuizContext)

const initialState = {
  isRejection: null,
  answers: [],
  step: 0,
};

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const {questions} = questionnaire
  const value = {
    state,
    questions,
    dispatch
  }
  return (
    <ChakraProvider theme={theme}>
      <QuizContext.Provider value={value}>
        <Router>
          <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </QuizContext.Provider>
    </ChakraProvider>
  );
}

export default App;
