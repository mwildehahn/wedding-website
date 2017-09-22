import { withStyles } from "material-ui/styles";

const styles = {
  background: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('assets/img/home.jpg')",
    backgroundColor: "black",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%"
  }
};

const Background = ({ children, classes }) => (
  <div className={classes.background}>{children}</div>
);

export default withStyles(styles)(Background);
