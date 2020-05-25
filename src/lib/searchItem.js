import React from "react";
import JsxParser from 'react-jsx-parser'

//material-ui
import  Typography  from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  active: {
    background: "yellow"
  }
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { id, name, address, pincode, items, active, onMouseOver, index, value } = props;
  
  const onHover = () => {
    onMouseOver(index);
  };

  const highlightedText = (string, query) => {
    if(string.includes(query)){
      return string.replace(new RegExp(query, "gi"), (match) => `<span class="highlight">${match}</span>`)
    } else {
      return string
    }
  }
  return (
    <ListItem ref={ref[index]} onMouseOver={onHover}
      className={active ? classes.active : null}
      alignItems="flex-start"
      divider>
      <div>
        <Typography variant="h6">
          <JsxParser jsx={highlightedText(id, value)}/>
        </Typography>
        <Typography variant="h6">
          <JsxParser jsx={highlightedText(name, value)}/>
        </Typography>
        <Typography variant="h6">
          <JsxParser jsx={highlightedText(address, value)}/>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          <JsxParser jsx={highlightedText(pincode, value)}/>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          <JsxParser jsx={highlightedText(items.join(), value)}/>
        </Typography>
      </div>
    </ListItem>
  );
});
