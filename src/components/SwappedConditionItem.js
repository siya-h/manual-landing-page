import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SwappedConditionItem = ({ item }) => {
    const { imgSrc, heading, summary, description, number } = item
    return (
        <Box margin={["30px auto",,,'80px auto']} maxWidth={['800px']} w={["90%",,"80%","100%"]}>
            <Text pos="absolute" fontSize={["250px","300px","280px","400px"]} color="light_grey" zIndex="-1" bottom={["36%","initial","initial","16%"]} left={['10%','0','12%','26%']} alignSelf="center">{number}</Text>

            <Box display={["block","grid"]}  gridTemplateColumns={['repeat(2, 1fr)']}>
                <Box w={['90%',,"85%","75%"]} alignSelf="center" mt={[,,"15%","5%"]} pos={["relative"]} right={["auto",,"0","-10%"]} ml={["auto",,,]} mr={["auto",,,"20%"]}>
                    <Text color="tealish" textAlign={["right"]} textTransform="uppercase" letterSpacing={["2.4px"]} my={["0",,,"5%"]} fontSize={['12px']}>{heading}</Text>
                    <Text fontFamily="Helvetica" textAlign={["right"]} my={["2%",,,'5%']}  fontSize={["22px"]} lineHeight={["32px"]}>{summary}</Text>
                    <Text fontFamily="Open Sans" textAlign={["right"]} fontSize={["12px"]} lineHeight={["22px"]}>{description}</Text>
                </Box>
                <Box >
                    <Image
                        src={imgSrc}
                        w={['95%',,,]}
                        mx={["auto",,,]}
                        my={["2%",,,]}
                    />
                </Box>

            </Box>


        </Box>
    )
}

export default SwappedConditionItem
