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
      root = removeNode.call(this, this.root, data);
    }
  };

  function removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.right === null) {
        return node.left;
      }

      if (node.left === null) {
        return node.right;
      }

      var tempNode = getSmallest.call(this, node.right);
      node.data = tempNode.data;
      node.right = removeNode.call(this, node.right, tempNode.data);
      return node;

    } else if (data < node.data) {
      node.left = removeNode.call(this, node.left, data);
      return node;
    } else {
      node.right = removeNode.call(this, node.right, data);
      return node;
    }
  }

  function getSmallest(node) {
    if (node.left === null) {
      return node;
    } else {
      return getSmallest.call(this, node.left);
    }
  }

  return BST;
})();
