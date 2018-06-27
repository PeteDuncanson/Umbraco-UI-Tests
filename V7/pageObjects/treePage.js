var TreePage = function() {
    
  this.expandTreeItem = nodeName => {
    var children = [];
    var contentNode = element(by.linkText(nodeName));
    if (contentNode != null && contentNode.isPresent()) {
      element.click();
      children = element.children;
    }

    return contentNode;
  };
};

module.exports = TreePage;
