import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Rejected = () => {
    return (
        <Box width="80%" mx="auto" maxW="800px" mt="5%">
            <Heading size="lg" color="teal">Unfortunately, we are unable to prescribe this medication for you. This
                is because finasteride can alter the PSA levels, which maybe used to monitor for cancer.
                You should discuss this further with your GP or specialist if you would still like this
                medication.</Heading>
        </Box>
    )
}

export default Rejected
