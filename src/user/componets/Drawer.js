import React, { Component } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";
import { updateRawData } from "../../actions";

const styles = {
  fullList: {
    width: 300,
  },
};

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSidebar: false,
    };
  }

  showDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ openSidebar: true });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Sidebar state: " + this.state.openSidebar);
  }
  onClose = () => {
    updateRawData({ openDrawer: false });
  };
  fullList = () => {
    const { classes } = this.props;
    return (
      <div
        className={classes.fullList}
        role="presentation"
        onClick={this.onClose}
        onKeyDown={this.onClose}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  render() {
    const { open, onOpen, onClose } = this.props;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={this.onClose}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {this.fullList()}
      </SwipeableDrawer>
    );
  }
}
const mapStateToProps = (state) => {
  const { openDrawer } = state.rawData;
  return { open: openDrawer };
};
export default withStyles(styles)(connect(mapStateToProps)(Drawer));
