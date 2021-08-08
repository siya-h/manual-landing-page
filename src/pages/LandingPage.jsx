import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ConditionItem from '../components/ConditionItem'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import SwappedConditionItem from '../components/SwappedConditionItem'
import { dysfunction, hairLoss } from '../constants/content/conditions'

const LandingPage = () => {
    return (
        <Box>
            <Heading />
            <Text fontFamily="Helvetica" textAlign="center" fontSize={['26px', '30px', '32px', '36px']} mt={['20px', '30px', '50px', '80px']} mb={['15px', '22.5px', '37.5px', '60px']}>What we can help with</Text>
            <ConditionItem containerStyle={{ margin: '80px auto',maxWidth: '800px' }} item={hairLoss} />
            <SwappedConditionItem containerStyle={{ margin: '80px auto', maxWidth: '800px' }} item={dysfunction} />
            <Footer />
        </Box>
    )
}

export default LandingPage
