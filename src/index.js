import _ from 'lodash';
import $ from 'jquery';
import foo from './foo';

function compoent(){
    var element = $('<div></div>');

    element.html(_.join(['hello', 'webpack'], ' '));

    return element.get(0);
}

document.body.appendChild(compoent());

console.log(foo);
console.log(foo());