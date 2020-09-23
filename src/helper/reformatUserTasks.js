const reformatUserTasks = (userTasks) => {
  const result = JSON.parse(JSON.stringify(userTasks));
  for (let j = 0; j < result.length; j += 1) {
    const userTask = result[j];
    const componentInfoDict = {};
    result.values.forEach((component) => {
      componentInfoDict[component.component._id] = component;
    });
    for (let i = 0; i < userTask.form.components.length; i += 1) {
      let component = userTask.form.components[i];
      const componentId = component.component.toString();
      if (!componentInfoDict[componentId]) return;
      component = componentInfoDict[componentId].component;
      component.value = componentInfoDict[componentId].value;
      component.label = componentInfoDict[componentId].label;
    }
    delete userTask.values;
  }
  return result;
};

module.exports = {
  reformatUserTasks,
};
