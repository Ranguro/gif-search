import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  },
});


class PhotoGridList extends Component {

  state = {
    open: false,
    image: null
  };

  handleOpen = (title, url) => {
    this.setState({ image: { title, url } });
  };

  handleClose = () => {
    this.setState({ image: null });
  };

  render() {
    const { classes, data } = this.props;
    return (
      data.length > 0 ? (
        <div className={classes.root} >
          <GridList cols={5}>
            {data.map(data => (
              <GridListTile key={data.id} >
                <img alt={data.title} src={data.images.fixed_height.url} onClick={() => this.handleOpen(data.title, data.images.original.url)} />
              </GridListTile>
            ))}
          </GridList>
        </div >) : this.getEmptyMessage()
    );
  }

  getEmptyMessage() {
    return (<div>Please enter a search query in the field</div>);
  }

}

PhotoGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoGridList);