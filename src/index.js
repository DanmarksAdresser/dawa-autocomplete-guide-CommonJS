"use strict"

var dawaAutocomplete2 = require('dawa-autocomplete2');

dawaAutocomplete2.dawaAutocomplete( document.getElementById("adresse"), {
	select: function(selected) {
    document.getElementById("valgtadresse").innerHTML= selected.tekst;
  }
});
