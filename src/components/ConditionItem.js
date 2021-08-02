import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ConditionItem = ({ item, containerStyle }) => {
    const {imgSrc, heading, summary, description, number} = item
    return (
        <Box style={containerStyle}>
        <Text>{number}</Text>
            <Box>
                <Image src={imgSrc} />
            </Box>
            <Box>
                <Text color="tealish" textTransform="uppercase">{heading}</Text>
                <Text>{summary}</Text>
                <Text>{description}</Text>
            </Box>

        </Box>
    )
}

export default ConditionItem
