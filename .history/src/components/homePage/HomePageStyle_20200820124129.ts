import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  flexContainer: {
   display: 'flex',
   flexFlow: 'row wrap'
   
  },
  item: {
    alignSelf: 'flex-end'
  },
  title: {
    flexGrow: 1,
  },

}));

