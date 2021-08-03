import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/images/header-background-image.png'
import logo from '../assets/images/logo.svg'

const Heading = () => {
    return (
        <Box
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            w={['100%']}
            h={['240px', '340px','460px' ,'750px']}
            bgImage={bgImg}
            p={1}
        >
            <Box
                mt={['10px', '20px','25px' ,'30px']}
            >
                <Link to="/">
                    <Image
                        src={logo}
                        w={['20px', '36px','40px' ,'46px']}
                        h={['22px', '34px', '34px','42px']}
                        ml={['14px','28px','38px','70px']}
                    />
                </Link>
            </Box>

            <Box fontSize={['22px', '36px','54px' ,'80px']} lineHeight={['22px', '42px', '62px','98px']} w={['55%', '55%', '60%','64%']} h={['15%', '20%','25%' ,'27%']} ml={['12px', '26px','34px', '60px']} mt={['15px', '25px','40px','90px']}>
                <Text transform="capitalize" >BE GOOD</Text>
                <Text transform="capitalize" >TO YOURSELF</Text>
            </Box>
                <Text fontFamily="Helvetica" fontSize={['12px', '14px','16px','18px']} lineHeight={['12px', '18px','24px','30px']} w={['55%', '40%','40%','400px']} h={['60px','65px','75px',]} ml={['14px','28px','38px','70px']} mt={['18px','26px',,]} >We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</Text>
            <Box ml={['14px', '28px', '38px','70px']} mt={['4px', '20px', '35px','50px']} display="inline-block" >
                <Link to="/quiz">
                    <Button bg="tealish" w={['100px', '160px','180px' ,'200px']} _hover={{backgroundColor: 'pine_green'}} h={['38px', '40px','44px' ,'48px']} boxShadow={['0px 10px 30px -20px rgba(0,0,0,0.5)']} borderRadius={['49.5px']} fontSize={['10px', '12px', '12px', '12px']} letterSpacing={['1px',,,'2.4px']} maxWidth="200px" minWidth="150px" fontFamily="Montserrat" color="white">TAKE THE QUIZ</Button>
                </Link>
            </Box>

        </Box>
    )
}

export default Heading
