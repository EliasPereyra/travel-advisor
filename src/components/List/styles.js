import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'
    },
    loading: {
        height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    container: {
        padding: '25px'
    },
    marginBottom: {
        marginBottom: '30px'
    },
    list: {
        height: '75vh', overflow: 'auto'
    }
}))