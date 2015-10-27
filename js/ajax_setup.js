import $ from 'jquery';

const APP_ID = 'yuMmTQFtkXKGgHMRk1mgmv0FE8HJyUk1TFME4OMs';
const API_REST_KEY = 'wowyCfc4FLH2arePGRlmSkh97VkMOfm9tk8TXLqf';

$.ajaxSetup({
	headers : {
		'X-Parse-Application-Id' : APP_ID,
		'X-Parse-REST-API-Key' : API_REST_KEY
	}
});