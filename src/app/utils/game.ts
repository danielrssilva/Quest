const getCleanGameName = (gameName: string): string => {
  return gameName.replace(/\s/g, '-').replace(':', '');
};

export default getCleanGameName;
