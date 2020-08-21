import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: "inline-flex",
      flex: "1 0 50%",
      textAlign: "center",
      padding: "10px",
      overflow: "hidden",

    },
    item: {
      alignSelf: "flex-end",
    },
    stopShrink: {
      alignSelf: "flex-start"
    },
    indexing: {
      alignItems:"flex-end"
    },
    title: {
      flexGrow: 1
    },
    fixWidth: {
      flex: "0 0 500px"
    }
  })
);
