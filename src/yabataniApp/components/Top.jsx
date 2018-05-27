import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Icon, Typography } from '@material-ui/core';

import style from '../style';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.state = {
      loaded: false
    };
  }

  load(file) {
    console.log('load'); // eslint-disable-line
    this.setState({
      loaded: true,
      photo: file
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <Redirect to={{
          pathname: '/check',
          state: {
            photo: this.state.photo
          }
        }}
        />
      );
    }
    return (
      <article style={style.top.article}>
        <section style={style.top.message}>
          <Typography variant="title" style={style.top.typography}>Upload your photo!</Typography>
        </section>

        <section style={style.top.fab}>
          <input id="photo" type="file" accept="image/*" style={style.top.input} onChange={(e) => { this.load(e.target.files[0]); }} />
          <label htmlFor="photo">
            <Button color="secondary" variant="fab" component="span">
              <Icon>photo_camera</Icon>
            </Button>
          </label>
        </section>
      </article>
    );
  }
}

export default Top;
