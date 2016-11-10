export const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.6)',
    zIndex          : 2,
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center'
  },

  content : {
    minWidth        : '500px',
    position        : 'initial',
    top             : '0',
    left            : '0',
    right           : '0',
    bottom          : '0',
    border          : '1px solid #ccc',
    padding         : '20px',
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
    zIndex          : 3,
  }
};
