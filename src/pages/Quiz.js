import { Box, Button, Progress } from '@chakra-ui/react'
import React from 'react'
import { useQuizContext } from '../App'
import Completed from '../components/Completed'
import QuestionItem from '../components/QuestionItem'
import Rejected from '../components/Rejected'
import { goBack } from '../state/actions'

const Quiz = () => {
    const { state: { isRejection, answers, step }, questions, dispatch } = useQuizContext()
    const progressValue = Math.ceil((answers.length / questions.length) * 100)
    if (isRejection) return <Rejected />
    else if (progressValue === 100) return <Completed />
    return (
        <Box width="80%" mx="auto" maxW="800px" mt="5%">
            <Progress value={progressValue} colorScheme="teal" />
            {
                [questions[step]].map((item, index) => {
                    return (
                        <Box display="grid" key={index}>
                            <QuestionItem item={item} />
                        </Box>
                    )
                })
            }
            {step !== 0 ? <Button onClick={() => dispatch(goBack())} colorScheme="teal">Prev</Button> : null}
        </Box>
    )
}

export default Quiz
