class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  head: TreeNode | null;
  constructor(head?: TreeNode) {
    this.head = head || null;
  }

  insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    } else {
      if (value < node.data) {
        node.left = this.insert(node.left, value);
      } else if (value > node.data) {
        node.right = this.insert(node.right, value);
      }
      return node;
    }
  }

  search(node: TreeNode | null = this.head, value: number): TreeNode | null {
    let temp = node;
    if (temp === null) {
      return null;
    } else if (temp.data === value) {
      return temp;
    } else {
      if (value < temp.data) {
        return (temp.left = this.search(temp.left, value));
      } else {
        return (temp.right = this.search(temp.right, value));
      }
    }
  }

  findMin(node: TreeNode | null = this.head): number {
    console.log(node);
    if (node?.left === null) {
      return node.data;
    }
    return this.findMin(node?.left);
  }

  findMax(node: TreeNode | null = this.head): number {
    if (node?.right === null) {
      return node.data;
    }
    return this.findMin(node?.right);
  }

  inOrderTraversal(root: TreeNode | null = this.head) {
    let temp = root;
    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      console.log(temp.data);
      this.inOrderTraversal(temp.right);
    }
  }

  preOrderTraversal(root: TreeNode | null = this.head) {
    let temp = root;
    if (temp !== null) {
      console.log(temp.data);
      this.preOrderTraversal(temp.left);
      this.preOrderTraversal(temp.right);
    }
  }

  postOrderTraversal(root: TreeNode | null = this.head) {
    let temp = root;
    if (temp !== null) {
      this.postOrderTraversal(temp.left);
      this.postOrderTraversal(temp.right);
      console.log(temp.data);
    }
  }
}

const rootNode = new TreeNode(50);

rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const BSTree = new BinarySearchTree(rootNode);

BSTree.insert(BSTree.head, 30);
BSTree.insert(BSTree.head, 20);
BSTree.insert(BSTree.head, 40);
BSTree.insert(BSTree.head, 70);
BSTree.insert(BSTree.head, 60);
BSTree.insert(BSTree.head, 80);
// console.log(BSTree.search(BSTree.head, 10));

console.log(BSTree.findMin(BSTree.head));

// console.dir(JSON.stringify(BSTree));
// console.log('/////////');

// BSTree.inOrderTraversal();
// console.log('/////////');
// BSTree.preOrderTraversal();
// console.log('/////////');
// BSTree.postOrderTraversal();
// console.log('/////////');

// class Tree {
//   root: TreeNode | null;
//   constructor() {
//     this.root = null;
//   }
//   add(data: any, toNodeData?: any) {
//     const node = new TreeNode(data);
//     const parent = toNodeData ? this.findBFS(toNodeData) : null;

//     if (parent) {
//       parent.children?.push(node);
//     } else if (!this.root) {
//       this.root = node;
//     } else {
//       return 'Root already exists';
//     }
//   }

//   findBFS(data: any): TreeNode | null {
//     const queue = [this.root];
//     let _node = null;
//     this.traverseBFS((node) => {
//       if (node.data == data) {
//         _node = node;
//       }
//     });
//     return _node;
//   }

//   private traverseBFS(callback: (node: TreeNode) => void): void {
//     const queue = [this.root];
//     while (queue.length) {
//       const node = queue.shift();

//       callback(node);
//     }
//   }
// }

// class TreeNode implements ITreeNode {
//   children: ITreeNode[];
//   data: IData<any>;
//   constructor();
//   addChildren(): void {
//     throw new Error('Method not implemented.');
//   }
//   removeCildren(): void {
//     throw new Error('Method not implemented.');
//   }
// }
