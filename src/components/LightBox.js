import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    minWidth: '300',
    minHeight: '300',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  },
  btnContainer: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    justifyContent: 'flex-end',
    btn: {
      display: 'block'
    }
  }
});

function LightBox(props) {
  const { classes, image, onClose } = props;
  return (
    image && <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={image != null}
      onClose={onClose}>
      <div className={classes.paper}>
        <img alt={image.title} src={image.url} />
        <div className={classes.btnContainer}>
          <Button className={classes.btn} onClick={onClose} color="primary">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

LightBox.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.object
};

export default withStyles(styles)(LightBox);