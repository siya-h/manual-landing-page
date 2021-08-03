import { Box, Flex, Grid, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from '../assets/images/facebook-logo.svg'
import twitter from '../assets/images/twitter-logo.svg'
import linkedin from '../assets/images/linkedin-logo.svg'

const SocialLinks = () => {
    return (
        <Box >
            <Text textTransform="uppercase" color="tealish" my={['5px','10px']} fontSize={['12px']}>Follow us</Text>
            <Grid templateColumns={['repeat(3, 1fr)']} gap={['1', '0', '3']} my={[5]} >
                <Link href="#"><Image src={facebook} /></Link>
                <Link href="#"><Image src={twitter} /></Link>
                <Link href="#"><Image src={linkedin} /></Link>
            </Grid>
        </Box>
    )
}

export default SocialLinks
