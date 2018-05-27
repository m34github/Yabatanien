const check = {
  back: {
    position: 'fixed',
    bottom: 32,
    left: 32
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: window.innerHeight - 24,
    width: window.innerWidth
  },
  typography: {
    border: '3px #fff solid',
    color: '#fff',
    padding: 12
  }
};

const loader = {
  progress: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const result = {
  article: {
    background: '#fee',
    height: window.innerHeight,
    width: window.innerWidth
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12
  },
  snsFab: {
    facebook: {
      background: '#3B5998',
      color: '#fff',
      margin: 12
    },
    instagram: {
      background: '#8a3ab9',
      color: '#fff',
      margin: 12
    },
    twitter: {
      background: '#00aced',
      color: '#fff',
      margin: 12
    }
  },
  typography: {
    fontFamily: 'Nico Moji'
  }
};

const top = {
  article: {
    background: 'url(http://source.unsplash.com/450x800/?selfie) center / cover',
    height: window.innerHeight,
    width: window.innerWidth
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32
  },
  input: {
    display: 'none'
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: window.innerHeight - 24,
    width: window.innerWidth
  },
  typography: {
    border: '3px #fff solid',
    color: '#fff',
    padding: 12
  }
};

export default {
  check, loader, result, top
};
