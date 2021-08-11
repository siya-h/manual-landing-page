import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Completed = () => {
    return (
        <Box width="80%" mx="auto" maxW="800px" mt="5%">
            <Text>Great news! We have the perfect treatment for your
                hair loss. Proceed to <Link href="www.manual.co">www.manual.co</Link>, and prepare to say hello to your new hair!</Text>
        </Box>
    )
}

export default Completed
