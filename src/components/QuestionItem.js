import { Box, Text } from '@chakra-ui/react'
import parse from 'html-react-parser'
import React from 'react'
import { useQuizContext } from '../App'
import { addAnswer, updateRejection } from '../state/actions'

const QuestionItem = ({ item }) => {
    const { question, options } = item
    const { dispatch, state: { answers } } = useQuizContext()
    return (
        <Box >
            <Text>{question}</Text>
            <Box gridTemplateColumns={['initial', "repeat(2, 1fr)"]} display="grid">
                {
                    options.map(({ display, value, isRejection }, index) => (
                        <Box key={index}
                            onClick={() => {
                                dispatch(addAnswer({ question, value }))
                                dispatch(updateRejection(isRejection))
                            }}
                        >
                            <Box display="flex" gridGap="5" _hover={{ cursor: 'pointer' }} borderRadius={5} border={answers.find(item => item.question === question && item.value === value) ? "2px solid teal" : "none"}><Box
                            >{parse(display)}</Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default QuestionItem
