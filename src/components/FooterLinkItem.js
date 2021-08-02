import { Box, Link } from '@chakra-ui/react'
import React from 'react'

const FooterLinkItem = ({ link }) => {
    const { name, url } = link
    return (
        <Box>
            <Link href={url}>{name}</Link>
        </Box>
    )
}

export default FooterLinkItem
