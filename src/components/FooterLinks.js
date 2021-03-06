import { Box, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import FooterLinkItem from './FooterLinkItem'

const FooterLinks = ({ item }) => {
    const { subHeading, links } = item
    return (
        <Box>
            <Text color="tealish" textTransform="uppercase" fontSize={['12px']} my={['5px','10px']}>{subHeading}</Text>
            {
                links.map((item) => <Fragment key={item.id}><FooterLinkItem link={item} /></Fragment>)
            }
        </Box>
    )
}

export default FooterLinks
