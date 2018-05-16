module.exports = {
	fix: {
		'201234567' : '+36201234567',
		'301234567' : '+36301234567',
		'311234567' : '+36311234567',
		'701234567' : '+36701234567',
		'7(0)12-34=asd567' : '+36701234567',

		'06201234567': '+36201234567',
		'06301234567' : '+36301234567',
		'06311234567' : '+36311234567',
		'06701234567' : '+36701234567',
		'36123456789' : '+36123456789',

		'700234567': null,
		'36023456789' : null
	},
	decompose: {
		'+3610123456': {
			country: '+36',
			local: '1',
			phone: '0123456'
		},
		'+36201234567': {
			country: '+36',
			local: '20',
			phone: '1234567'
		}
	}
}