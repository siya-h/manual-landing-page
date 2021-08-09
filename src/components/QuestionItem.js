import { Box, Radio, RadioGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { useQuizContext } from '../App'
import { addAnswer, updateRejection } from '../state/actions'

const QuestionItem = ({ item }) => {
    const { question, options } = item
    const { dispatch, state: { answers } } = useQuizContext()
    return (
        <Box >
            <Text>{question}</Text>
            <RadioGroup onChange={(value) => {
                console.log(value)
            }}>
                <Box gridTemplateColumns={['initial', "repeat(2, 1fr)"]} display="grid">
                    {
                        options.map(({ display, value, isRejection }, index) => (
                            <Box key={index} >
                                <Box display="flex" gridGap="5" >
                                    <Radio value={value.toString()} onClick={() => {
                                        const answered = answers.find((item) => {
                                            return item.question === question && item.value === value
                                        })
                                        if (answered === undefined) {
                                            dispatch(addAnswer({ question, value }))
                                            dispatch(updateRejection(isRejection))
                                        }

                                    }} /><Box dangerouslySetInnerHTML={{ __html: display }}></Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </RadioGroup>
        </Box>
    )
}

export default QuestionItem
