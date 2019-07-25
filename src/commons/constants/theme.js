import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#c44028',
            background: '#fbd489'
        }
    },
    typography: {
        useNextVariants: true
    }
})

export default theme
