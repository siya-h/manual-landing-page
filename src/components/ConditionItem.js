import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ConditionItem = ({ item, containerStyle }) => {
    const { imgSrc, heading, summary, description, number } = item
    return (
        <Box style={containerStyle}>
            <Text pos="absolute" fontSize="400px"  color="light_grey" zIndex="-1" right={['32%']}>{number}</Text>
            <Box display="grid" gridTemplateColumns={['repeat(2, 1fr)']}>
                <Box >
                    <Image  src={imgSrc} />
                </Box>
                <Box w="70%" alignSelf="center">
                    <Text color="tealish" textTransform="uppercase">{heading}</Text>
                    <Text fontFamily="Helvetica">{summary}</Text>
                    <Text fontFamily="Open Sans">{description}</Text>
                </Box>
            </Box>


        </Box>
    )
}

export default ConditionItem
