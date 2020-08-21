import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: "inline-flex",
      flex: "1 0 50%",
      textAlign: "center",
      padding: "10px",
      overflow: "hidden",
      width: 500
    },
    item: {
      alignSelf: "flex-end",
    },
    stopShrink: {
      alignSelf: "flex-start"
    },
    indexing: {
      display: "flex",
      justifyContent: "center"
    },
    title: {
      flexGrow: 1
    }
  })
);
