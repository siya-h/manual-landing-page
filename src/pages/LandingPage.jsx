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
            <Text fontFamily="Helvetica" textAlign="center" fontSize={['18px', '24px', '28px', '36px']} mt={['20px', '30px', '50px', '80px']} mb={['15px', '22.5px', '37.5px', '60px']}>What we can help with</Text>
            <ConditionItem containerStyle={{ width: '65%', margin: ' 80px auto' }} item={hairLoss} />
            <ConditionItem containerStyle={{ width: '65%', margin: '80px auto' }} item={dysfunction} />
            <Footer />
        </Box>
    )
}

export default LandingPage
