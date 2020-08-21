import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';



export const useStyles = makeStyles((theme: Theme) => createStyles({
  flexContainer: {
   display: 'flex',
   flexFlow: 'column wrap'
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));


