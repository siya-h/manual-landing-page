import { Box, Link } from '@chakra-ui/react'
import React from 'react'

const FooterLinkItem = ({ link }) => {
    const { name, url } = link
    return (
        <Box my={['6px','12px']}>
            <Link href={url} fontFamily="Helvetica" fontSize={['14px']} >{name}</Link>
        </Box>
    )
}

export default FooterLinkItem
