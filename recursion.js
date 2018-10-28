function Node(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor(obj) {
    this.root = obj;
  }
  printByLevel() {
    if (!this.root) {
      return console.log("No root node found");
    }
    const newline = new Node("emptyNode");
    const queue = [this.root, newline];
    const arr = [[]];
    function recursion(queue) {
      if (queue.length) {
        const node = queue.shift();
        if (node.value !== "emptyNode") {
          arr[arr.length - 1].push(node.value);
        }
        if (node === newline && queue.length) {
          arr.push([]);
          queue.push(newline);
        }
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
        return recursion(queue);
      }
    }
    recursion(queue);
    return arr;
  }
}

var tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } }
};
var treeObj = new BinarySearchTree(tree);
console.log(treeObj.printByLevel());
