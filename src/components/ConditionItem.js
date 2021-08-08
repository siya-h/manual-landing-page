import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ConditionItem = ({ item, containerStyle }) => {
    const { imgSrc, heading, summary, description, number } = item
    return (
        <Box margin={["30px auto",,,'80px auto']} maxWidth={['800px']} w={[,"90%","80%","100%"]}>
            <Text pos="absolute" fontSize={["250px","300px","280px","400px"]} top={["30%",,,"39%"]}  color="light_grey" zIndex="-1" right={["15%",,"23%",'33%']} alignSelf="center">{number}</Text>
            <Box display={["block","grid"]} gridTemplateColumns={['repeat(2, 1fr)']}>
                <Box >
                    <Image
                        src={imgSrc}
                        w={['90%',,,]}
                        mx={["auto",,,]}
                        my={["2%",,,]}
                    />
                </Box>
                <Box w={["90%",,"85%","75%"]} alignSelf="center" mt={[,,"15%","35%"]} ml={["auto",,,"20%"]} mr={["auto",,,]} pos={["relative"]} left={[,,"0","-10%"]}>
                    <Text color="tealish" textTransform="uppercase" letterSpacing={["2.4px"]} fontSize={['12px']}>{heading}</Text>
                    <Text fontFamily="Helvetica" fontSize={["22px"]} my={["2%",,,'5%']} lineHeight={["32px"]}>{summary}</Text>
                    <Text fontFamily="Open Sans" fontSize={["12px"]} lineHeight={["22px"]}>{description}</Text>
                </Box>
            </Box>


        </Box>
    )
}

export default ConditionItem
