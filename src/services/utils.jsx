import _ from 'lodash';

export const mergeData = (currentList, targetList) => {
  targetList.forEach((tl) => {
    const index = _.findIndex(currentList, cl => cl.id === tl.id);

    if (index < 0) {
      currentList.push(tl);
    } else {
      currentList.splice(index, 1, tl);
    }
  });

  return [...currentList];
};
