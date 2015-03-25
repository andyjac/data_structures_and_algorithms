var Dictionary = (function() {

  function Dictionary() {
    this.dataStore = new Array();
  }

  Dictionary.prototype = {

    add: function(key, value) {
      this.dataStore[key] = value;
    },

    find: function(key) {
      return this.dataStore[key];
    },

    remove: function(key) {
      delete this.dataStore[key];
    },

    showAll: function() {
      var keys = Object.keys(this.dataStore);

      if (keys.length === 0) {
        console.log("This dictionary is empty");
      }

      keys.forEach(function(key) {
        console.log(key + " -> " + this.dataStore[key]);
      }, this);
    },

    count: function() {
      var keys = Object.keys(this.dataStore), n = 0;

      keys.forEach(function(key) {
        ++n;
      }, this);
      return n;
    },

    clear: function() {
      var keys = Object.keys(this.dataStore);

      keys.forEach(function(key) {
        delete this.dataStore[key];
      }, this);
    }

  };

  return Dictionary;
})();
