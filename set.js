var Set = (function() {

  function Set() {
    this.dataStore = [];
  }

  Set.prototype = {

    add: function(data) {
      if (this.size() === 0) {
        this.dataStore.push(data);
        return true;
      }

      if (this.dataStore.indexOf(data) < 0) {
        for (var i = 0; i < this.size(); i++) {
          if (this.dataStore[i] >= data) {
            this.dataStore.splice(i, 0, data);
            return true;
          }
        }
        this.dataStore.push(data);
        return true;
      } else {
        return false;
      }
    },

    remove: function(data) {
      var pos = this.dataStore.indexOf(data);

      if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
      } else {
        return false;
      }
    },

    show: function() {
      return this.dataStore;
    },

    contains: function(data) {
      if (this.dataStore.indexOf(data) > -1) {
        return true;
      } else {
        return false;
      }
    },

    union: function(set) {
      var tempSet = new Set();

      this.dataStore.forEach(function(element) {
        tempSet.dataStore.push(element);
      });

      set.dataStore.forEach(function(element) {
        if (!tempSet.contains(element)) {
          tempSet.dataStore.push(element);
        }
      });
      return tempSet;
    },

    intersect: function(set) {
      var tempSet = new Set();

      this.dataStore.forEach(function(element) {
        if (set.contains(element)) {
          tempSet.dataStore.push(element);
        }
      });
      return tempSet;
    },

    subset: function(set) {
      if (this.size() > set.size()) {
        return false;
      } else {
        this.dataStore.forEach(function(element) {
          if (!set.contains(element)) {
            return false;
          }
        });
      }
      return true;
    },

    size: function() {
      return this.dataStore.length;
    }

  };

  return Set;
})();
