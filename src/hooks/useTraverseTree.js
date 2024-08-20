import React from "react";

export default function useTraverseTree() {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      const newItem = {
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      };
      return { ...tree, items: [newItem, ...tree.items] };
    }
    let latestTree = [];

    latestTree = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestTree };
  };

  return {
    insertNode,
  };
}
