"use strict";
class Vertex {
    constructor(body, children = []) {
        this.body = body;
        this.children = children;
    }
}
class Tree {
    constructor(sun) {
        this.root = new Vertex(sun);
    }
    add(body, parent) {
        Tree.search(this.root, parent, body);
    }
    static search(node, parent, child) {
        if (node.body.name === parent)
            return node.children.push(new Vertex(child));
        if (node.children.length === 0)
            return false;
        const childNodes = node.children.values();
        for (const childNode of childNodes) {
            const lengthOfArray = Tree.search(childNode, parent, child);
            if (lengthOfArray)
                return true;
        }
    }
    animate(ctx) {
        Tree.draw(this.root, ctx);
    }
    static draw(node, ctx) {
        node.body.update();
        node.body.draw(ctx);
        if (node.children.length === 0)
            return;
        node.children.forEach((childNode) => {
            ctx.save();
            Tree.draw(childNode, ctx);
            ctx.restore();
        });
    }
}
//# sourceMappingURL=dataStructure.js.map