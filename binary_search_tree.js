var Node = (function() {

  function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  Node.prototype.show = function() {
    return this.data;
  }

  return Node;
})();

var BST = (function() {

  function BST() {
    this.root = null;
  }

  BST.prototype = {

    insert: function(data) {
      var n = new Node(data, null, null);

      if (this.root === null) {
        this.root = n;
      } else {
        var current = this.root, parent;
        while (true) {
          parent = current;
          if (data < current.data) {
            current = current.left;
            if (current === null) {
              parent.left = n;
              break;
            }
          } else {
            current = current.right;
            if (current === null) {
              parent.right = n;
              break;
            }
          }
        }
      }
    },

    inOrder: function(node) {
      if (!(node === null)) {
        this.inOrder(node.left);
        console.log(node.show());
        this.inOrder(node.right);
      }
    },

    preOrder: function(node) {
      if (!(node === null)) {
        console.log(node.show());
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    },

    postOrder: function(node) {
      if (!(node === null)) {
        this.postOrder(node.left);
        postOrder(node.right);
        this.console.log(node.show());
      }
    },

    getMin: function() {
      var current = this.root;

      while (!(current.left === null)) {
        current = current.left;
      }

      return current.data;
    },

    getMax: function() {
      var current = this.root;

      while (!(current.right === null)) {
        current = current.right;
      }

      return current.data;
    },

    find: function(data) {
      var current = this.root;

      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
        if (current === null) {
          return null;
        }
      }

      return current;
    },

    remove: function(data) {
      var found = false
        , current = this.root
        , parent = null
        , replacementParent = null
        , childCount
        , replacement;

      while (!found && current) {
        if (data < current.data) {
          parent = current;
          current = current.left;
        } else if (data > current.data) {
          parent = current;
          current = current.right;
        } else {
          found = true;
        }
      }

      if (found) {
        childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

        if (current === this.root) {

          switch (childCount) {
          case 0:
            this.root = null;
            break;
          case 1:
            this.root = (current.right === null ? current.left : current.right);
            break;
          case 2:
            replacement = this.root.left;

            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            if (replacementParent !== null) {
              replacementParent.right = replacement.left;
              replacement.right = this.root.right;
              replacement.left = this.root.left;
            } else {
              replacement.right = this.root.right;
            }

            this.root = replacement;
          }
        } else {

          switch (childCount) {
          case 0:
            if (current.data < parent.data) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;
          case 1:
            if (current.data < parent.data) {
              parent.left = (current.left === null ? current.right : current.left);
            } else {
              parent.right = (current.left === null ? current.right : current.left);
            }
            break;
          case 2:
            replacement = current.left
            replacementParent = current;

            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            if (replacementParent === current) {
              replacement.right = current.right;
            } else {
              replacementParent.right = replacement.left;
              replacement.right = current.right;
              replacement.left = current.left;
            }

            if (current.data < parent.data) {
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }
          }
        }
      }

      return false;
    }
  };

  return BST;
})();
