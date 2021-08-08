import { Box, Container, Divider, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/images/logo.svg'
import { company, info, products } from '../constants/content/footer'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'


const Footer = () => {
    return (
        <Box bgColor="light_tealish" overflow="auto" pt={['30px', '70px']}>
            <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} mb={['20px', '40px']}>
                <Box ml={['auto', '80px']} mr={['auto', '0']} w={['30%']}>
                    <Image
                        src={logo}
                        w={['80px']}
                        h={['74px']}
                    />
                </Box>
                <Container display={['grid']} gridTemplateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} justifyContent={["space-between"]} mr={['0', '200px', '300px', '700px']} >
                    <FooterLinks item={products} />
                    <FooterLinks item={company} />
                    <FooterLinks item={info} />
                    <SocialLinks />
                </Container>

            </Grid>
            <Divider w={['96%']} mx="auto" height="1px" opacity="0.3" />
            <Text color="brownish_grey" fontFamily="Open Sans" fontSize={[".75rem"]} lineHeight="1.275rem" textAlign="center" my={['15px', '20px', '30px']}>© 2019 Manual. All rights reserved.</Text>
        </Box>
    )
}

export default Footer
