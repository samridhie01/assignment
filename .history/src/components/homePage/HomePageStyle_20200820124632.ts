import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  flexContainer: {
   display: 'inline-flex',
   flexFlow: 'row wrap',
   alignItems: 'center',
   minWidth: '0'
   
  },
  item: {
    alignSelf: 'flex-end'
  },
  title: {
    flexGrow: 1,
  },

}));


