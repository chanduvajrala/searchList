import React from "react";
import SearchItem from "./searchItem.js";
//material-ui
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    height: 400,
    width: 400,
    margin: "auto",
    overflow: "overlay"
  }
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  const { data, cursor, onMouseOver, value } = props;
  function noUsersFound() {
    return (
      <Typography variant="h4"> {"No user found"} </Typography>
    );
  }

  return (
    <Card className={classes.card}>
      {data.length > 0 ? (
        <List>
          {data.map((item, i) => {
            return ( <SearchItem key={item.id} ref={ref} 
                index={i}
                active={cursor === i}
                onMouseOver={onMouseOver}
                value={value}
                {...item}/>);
          })}
        </List> ) : noUsersFound()}
    </Card>
  );
});
