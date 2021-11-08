import { makeStyles, createStyles } from '@mui/styles';
import { container } from '../styles/styles'

export const useStyles = makeStyles(() => createStyles({
    container: {
        ...container,
    },
    root: {
        margin: 50,
        padding: 20
    },
    selectBox: {
        minHeight: 300
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
}))