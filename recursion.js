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
      throw new Error('No root node found');
    }
    const newline = new Node('emptyNode');
    const queue = [this.root, newline];
    const arr = [[]];
    function recursion() {
      if (queue.length) {
        const node = queue.shift();
        if (node.value !== 'emptyNode') {
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
      return undefined;
    }
    recursion(queue);
    return arr;
  }
}

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};
const treeObj = new BinarySearchTree(tree);
treeObj.printByLevel();
