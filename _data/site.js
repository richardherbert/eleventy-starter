require( 'dotenv' ).config();

let baseURL = 'https://www.example.com';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080';
	break;
}

module.exports = {
	baseURL: baseURL
	,title: 'Eleventy Starter'
	,environment: process.env.ELEVENTY_ENV
};
