const reformatUserTasks = (userTasks) => {
  userTasks.forEach((userTask) => {
    const componentInfoDict = {};

    userTask.values.forEach((component) => {
      componentInfoDict[component.component._id] = {
        ...component.component,
        value: component.value,
        label: component.label,
      };
    });

    userTask.form.components.forEach((component, index, components) => {
      const componentId = component.component.toString();
      if (!componentInfoDict[componentId]) return;
      components[index].component = componentInfoDict[componentId];
      delete components[index]._id;
    });

    delete userTask.values;
  });

  return userTasks;
};

module.exports = {
  reformatUserTasks,
};
