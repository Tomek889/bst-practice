const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    if (!sortedArray.length) {
      return null;
    }

    let start = 0;
    let end = sortedArray.length - 1;
    let mid = Math.floor((start + end) / 2);

    let root = new Node(sortedArray[mid]);

    root.left = this.buildTree(sortedArray.slice(start, mid));
    root.right = this.buildTree(sortedArray.slice(mid + 1, end + 1));

    return root;
  }

  insertNode(currentNode, value) {
    if (currentNode === null) {
      return new Node(value);
    }

    if (currentNode.data === value) {
      return currentNode;
    }

    if (value < currentNode.data) {
      currentNode.left = insertNode(currentNode.left, value);
    } else if (value > currentNode.data) {
      currentNode.right = insertNode(currentNode.right, value);
    }

    return currentNode;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }
}
