var HashTable = (function() {

  function HashTable() {
    this.table = new Array(137);
  }

  HashTable.prototype = {

    put: function(key, data) {
      var pos = this.hash(key);
      this.table[pos] = data;
    },

    get: function(key) {
      return this.table[this.hash(key)];
    },

    hash: function(string) {
      const H = 37;
      var total = 0;

      for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
      }
      total = total % this.table.length;

      if (total < 0) {
        total += this.table.length - 1;
      }

      return parseInt(total);
    },

    showDistro: function() {
      for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          console.log(i + ": " + this.table[i]);
        }
      }
    }

  };

  return HashTable;
})();
