import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';

import './ajax_setup';




//GRAB HTML ELEMENT TO DISPLAY INFO

var appElement = $('.app');

var router = new Router(appElement);
router.start();
