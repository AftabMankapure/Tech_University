// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"



document.addEventListener('DOMContentLoaded', () => {
    // Initialize the dropdown trigger with jQuery
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
  });  
//= require materialize
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
// $(document).on('turbolinks:load', function(){
//     $('.sidenav').sidenav();})

import "jquery"
import "materialize"
