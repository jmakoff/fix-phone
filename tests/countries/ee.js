module.exports = {
  fix: {
  	'12345678' : '+37212345678',
  	'372123​45678' : '+37212345678',

  	'02345678' : null,
  	'37202345678' : null
  },
  decompose: {
    '+3725012345': {
      country: '+372',
      local: '5',
      phone: '012345'
    },
    '+37251123456': {
      country: '+372',
      local: '51',
      phone: '123456'
    }
  }
};