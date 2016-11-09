export const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.6)',
    zIndex          : 2,
    display         : 'flex'
  },

  content : {
    position        : 'fixed',
    top             : '250px',
    left            : '200px',
    right           : '200px',
    bottom          : '250px',
    border          : '1px solid #ccc',
    padding         : '20px',
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
    zIndex          : 3,
  }
};
