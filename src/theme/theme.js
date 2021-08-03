import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        tealish: '#34d1d1',
        pine_green: '#0c3c3d',
        brownish_grey: 'rgba(108, 108, 108, 0.5)',
        light_tealish: '#e5f5f4',
        light_grey: '#eeeeee',
        grey: '#6c6c6c'
        
    },
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'Montserrat',
                color: '#0c3c3d'
            }
        },
        Divider: {
            baseStyle: {
                backgroundColor: '#6c6c6c',
            }
        }
    }
})

export default theme