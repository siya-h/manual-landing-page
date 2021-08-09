import { Box, Progress, Text } from '@chakra-ui/react'
import React from 'react'
import QuestionItem from '../components/QuestionItem'
import questionnaire from '../questionnaire'
import { useQuizContext } from '../App'

const Quiz = () => {
    const { questions } = questionnaire
    const { state: {isRejection, answers} } = useQuizContext()
    const progressValue = Math.ceil((answers.length / questions.length) * 100)
    if (isRejection) return <Text>Rejected</Text>
    else if (progressValue === 100) return <Text>Completed</Text>
    return (
        <Box width="80%" mx="auto" maxW="800px" mt="5%">
            <Progress value={progressValue} colorScheme="teal" />
            {
                questions.map((item, index) => {
                    return (
                        <Box key={index} display="grid">
                            <QuestionItem item={item} />
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Quiz
