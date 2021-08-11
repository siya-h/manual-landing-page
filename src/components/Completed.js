import { Box, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const Completed = () => {
    return (
        <Box width="80%" mx="auto" maxW="800px" mt="5%">
            <Heading size="lg" color="teal">Great news! We have the perfect treatment for your
                hair loss. Proceed to <Link href="https://www.manual.co">www.manual.co</Link>, and prepare to say hello to your new hair!</Heading>
        </Box>
    )
}

export default Completed
