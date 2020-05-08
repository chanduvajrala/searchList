import React from "react";

//material-ui
import Typography from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  active: {
    background: "yellow"
  }
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { id, name, address, pincode, active, onMouseOver, index } = props;
  
  const onHover = () => {
    onMouseOver(index);
  };

  return (
    <ListItem ref={ref[index]} onMouseOver={onHover}
      className={active ? classes.active : null}
      alignItems="flex-start"
      divider>
      <div>
        <Typography variant="h6">{id}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{address}</Typography>
        <Typography variant="body2" color="textSecondary">{pincode}</Typography>
      </div>
    </ListItem>
  );
});
