import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Icon, Typography } from '@material-ui/core';

import style from '../style';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judged: false,
      photo: this.props.location.state ? this.props.location.state.photo : null
    };
  }

  componentDidMount() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({
        data: reader.result
      });
    });
    reader.readAsDataURL(this.state.photo);
  }

  judge() {
    console.log('judge'); // eslint-disable-line
    this.setState({
      judged: true,
      result: 3
    });
  }

  render() {
    if (this.state.judged) {
      return (
        <Redirect to={{
          pathname: '/result',
          state: {
            result: this.state.result
          }
        }}
        />
      );
    }
    if (this.state.photo) {
      return (
        <article
          id="article"
          style={{
            background: `url(${this.state.data}) center / cover`,
            height: window.innerHeight,
            width: window.innerWidth
          }}
        >
          <section style={style.check.message}>
            <Typography variant="title" style={style.check.typography}>Is this OK?</Typography>
          </section>

          <section style={style.check.back}>
            <Button variant="fab" href="/">
              <Icon>arrow_back</Icon>
            </Button>
          </section>

          <section style={style.check.fab}>
            <Button color="secondary" variant="fab" onClick={() => { this.judge(); }}>
              <Icon>check</Icon>
            </Button>
          </section>
        </article>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}

Check.propTypes = {
  location: PropTypes.object.isRequired
};

export default Check;
