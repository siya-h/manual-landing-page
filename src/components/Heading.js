import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/images/header-background-image.png'
import logo from '../assets/images/logo.svg'

const Heading = () => {
    return (
        <Box
            bgSize="contain"
            bgRepeat="no-repeat"
            w="100%"
            bgImage={bgImg}
        >
            <Link to="/">
                <Image
                    src={logo}
                />
            </Link>
            <Text transform="capitalize">BE GOOD TO YOURSELF</Text>
            <Text>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</Text>
            <Link to="/quiz">
                <Button as="button" bg="tealish" borderRadius={['49.5px']} w={[100, 150, 200]} color="white">TAKE THE QUIZ</Button>
            </Link>
        </Box>
    )
}

export default Heading
