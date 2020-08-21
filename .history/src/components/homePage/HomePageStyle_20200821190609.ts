import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: "inline-flex",
      flex: "1 0 50%",
      textAlign: "center",
      padding: "10px",
      overflow: "hidden"
    },
    item: {
      alignSelf: "flex-end",
    },
    stopShrink: {
      alignSelf: "flex-start"
    },
    indexing: {
      background: "blue",
      position: "absolute",
      bottom: "0",
      left:"0",
      right:"0"
    },
    title: {
      flexGrow: 1
    }
  })
);
