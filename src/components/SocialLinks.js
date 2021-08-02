import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from '../assets/images/facebook-logo.svg'
import twitter from '../assets/images/twitter-logo.svg'
import linkedin from '../assets/images/linkedin-logo.svg'

const SocialLinks = () => {
    return (
        <Box>
            <Text textTransform="uppercase" color="tealish">Follow us</Text>
            <Box>
                <Link href="#"><Image src={facebook} /></Link>
                <Link href="#"><Image src={twitter} /></Link>
                <Link href="#"><Image src={linkedin} /></Link>
            </Box>
        </Box>
    )
}

export default SocialLinks
