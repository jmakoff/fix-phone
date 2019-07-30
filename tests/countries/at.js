module.exports = {
  fix: {
    // international format
    '+43123​1234567' : '+431231234567',
    '+43123​12345678' : '+4312312345678',


    // absense of plus sign
    '431231234567' : '+431231234567',
    '4312312345678' : '+4312312345678',

    // absesnse of plus sing and country code
    '1231234567' : '+431231234567',
    '12312345678' : '+4312312345678',
    '3331234567' : '+433331234567',
    '33312345678' : '+4333312345678',

    // "06xxxxxx..." to "+436xxxxx..."
    '0123123​4567' : '+431231234567',
    '0123123​45678' : '+4312312345678',

    // absense of country code
    '+00012​34567': null,

    // absense of plus sign, country code and local code
    '1234567': null,
    '12345678': null,

    // zero digit instead of plus sign and country code
    '01231234567' : '+431231234567',
    '012312345678' : '+4312312345678',
    '0333123​4567' : '+433331234567',
    '0333123​45678' : '+4333312345678',

    // invalid length
    '+43123123456' : null,
    '+43123123456789' : null,

    // sanitization
    '+ 4  +31 (/23+ 123 - 4567\юв)': '+431231234567',
    '+ 4  +31 (/23+ 123 - 45678\юв)': '+4312312345678',
  },

  decompose: {
    '+431231234567': {
      country: '+43',
      local: '123',
      phone: '1234567'
    },
    '+4312312345678': {
      country: '+43',
      local: '123',
      phone: '12345678'
    }
  }
}
