import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import style from '../style';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.location.state ? this.props.location.state.result : null,
      penny: [
        'https://erostock.net/wp-content/uploads/2017/09/peni-funya_500.png',
        'https://erostock.net/wp-content/uploads/2018/02/peni-boo_500.png',
        'https://erostock.net/wp-content/uploads/2018/02/peni-kun_500.png',
        'https://erostock.net/wp-content/uploads/2018/02/peni-smile_500.png',
        'https://erostock.net/wp-content/uploads/2018/02/peni-love_500.png'
      ]
    };
  }

  render() {
    if (this.state.result) {
      return (
        <article style={style.result.article}>
          <section style={style.result.message}>
            <Typography variant="title" color="secondary">露出度</Typography>
            <Typography variant="display3" color="secondary" style={style.result.typography}>やばたにえん</Typography>
          </section>

          <section style={{
            background: `url(${this.state.penny[this.state.result]}) center / cover`,
            height: window.innerHeight / 2,
            width: window.innerWidth
          }}
          />

          <section style={style.result.button}>
            <Button variant="fab" style={style.result.snsFab.facebook}><i className="fab fa-facebook" /></Button>
            <Button variant="fab" style={style.result.snsFab.instagram}><i className="fab fa-instagram" /></Button>
            <Button variant="fab" style={style.result.snsFab.twitter}><i className="fab fa-twitter" /></Button>
          </section>

          <section style={style.result.button}>
            <Button variant="raised" size="large" color="secondary" href="/">Retry</Button>
          </section>
        </article>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}

Result.propTypes = {
  location: PropTypes.object.isRequired
};

export default Result;
