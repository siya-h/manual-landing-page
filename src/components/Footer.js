import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/images/logo.svg'
import { company, info, products } from '../constants/content/footer'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'


const Footer = () => {
    return (
        <Box bgColor="light_tealish">
            <Image src={logo} />
            <FooterLinks item={products} />
            <FooterLinks item={company} />
            <FooterLinks item={info} />
            <SocialLinks />
            <Divider />
            <Text color="brownish_grey" fontFamily="Open Sans">© 2019 Manual. All rights reserved.</Text>
        </Box>
    )
}

export default Footer
