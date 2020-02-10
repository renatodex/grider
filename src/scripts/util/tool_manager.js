export function ToolManager (gameInstance) {
  let tools = []

  function add(toolObject) {
    tools.push(toolObject)
  }

  function get(name) {
    let tool = tools.find((tool) => tool.name == name)

    return {
      name: tool['name'],
      call (params) {
        const firstScene = gameInstance.scene.scenes[0]
        return tool['call']({
          ...params,
          gameFactory: new Phaser.GameObjects.GameObjectFactory(firstScene),
          gameScene: firstScene,
        })
      }
    }
  }

  function list() {
    return tools;
  }

  return {
    get, add, list
  }
}
