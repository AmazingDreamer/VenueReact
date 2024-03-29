import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';
import { element } from 'prop-types';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
      scroller.scrollTo(element,{
        duration: 1500,
        dealy: 100,
        smooth: true,
        offset: -100
      });
      props.onClose(false)
    }
    return (
        <Drawer
          anchor="right"
          open={props.open}
          onClose={()=> props.onClose(false)}
        >
        <List component="ul">
      <ListItem button onClick={() =>  scrollToElement('featured')}>
        Event starts in
      </ListItem>
      <ListItem button onClick={() =>  scrollToElement('info')}>
        Venue NFO
      </ListItem>
      <ListItem button onClick={() => scrollToElement('highlights')}>
        Highlights
      </ListItem>
      <ListItem button onClick={() => scrollToElement('location')}>
        Location
      </ListItem>

    </List>
        </Drawer>
    );
};

export default SideDrawer;