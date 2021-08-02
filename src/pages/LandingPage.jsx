import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ConditionItem from '../components/ConditionItem'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { dysfunction, hairLoss } from '../constants/content/conditions'

const LandingPage = () => {
    return (
        <Box>
            <Heading />
            <Text >What we can help with</Text>
            <ConditionItem containerStyle={{}} item={hairLoss}/>
            <ConditionItem item={dysfunction} />
            <Footer />
        </Box>
    )
}

export default LandingPage
