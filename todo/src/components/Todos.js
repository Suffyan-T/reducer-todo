import React, { useReducer} from 'react';
import Todo from './Todo';
import { reducer, initialState } from '../reducers/reducer'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Todos(){
    const [todoState, dispatch] = useReducer(reducer, initialState);
    console.log(todoState);

    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);
  
    const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

return(

    <List dense className={classes.root}>
    {todoState.map(value => {
      const labelId = `checkbox-list-secondary-label-${value}`;
      return (
        <ListItem key={value} button>
          {/* <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${value + 1}`}
              src={`/static/images/avatar/${value + 1}.jpg`}
            />
          </ListItemAvatar> */}
          <ListItemText id={labelId} primary={`${value.item}`} />
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
              onChange={handleToggle(value.completed)}
              checked={checked.indexOf(value.completed) !== -1}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      );
    })}
  </List>
    // todoState.map (item =>{
    // // {console.log(item)}
    //    return <Todo props={item} /> 
    // }
    // )
    
);
};

export default Todos;