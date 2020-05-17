class Vertex {
  constructor(public body: CelestialBody, public children: Vertex[] = []) {}
}

class Tree {
  private root: Vertex;

  constructor(sun: CelestialBody) {
    this.root = new Vertex(sun);
  }

  add(body: CelestialBody, parent: string) {
    Tree.search(this.root, parent, body);
  }

  static search(node: Vertex, parent: string, child: CelestialBody) {
    if (node.body.name === parent)
      return node.children.push(new Vertex(child));

    if (node.children.length === 0) return false;

    const childNodes = node.children.values();

    for (const childNode of childNodes) {
      const lengthOfArray = Tree.search(childNode, parent, child);

      if (lengthOfArray) return true;
    }
  }

  animate(ctx: CanvasRenderingContext2D) {
    Tree.draw(this.root, ctx);
  }

  static draw(node: Vertex, ctx: CanvasRenderingContext2D) {
    node.body.update();
    node.body.draw(ctx);

    if (node.children.length === 0) return;

    node.children.forEach((childNode) => {
      ctx.save();
      Tree.draw(childNode, ctx);
      ctx.restore();
    });
  }
}
