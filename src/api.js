export const fetchSimpsonsCards = async () => {
  const uniqueCharacters = new Map();
  const desiredSize = 10;
  const batchSize = 20; // increase chance of unique characters

  while (uniqueCharacters.size < desiredSize) {
    const response = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${batchSize}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from API.");
    }

    const data = await response.json();

    // add unique characters to map
    data.forEach((item) => {
      if (
        !uniqueCharacters.has(item.character) &&
        uniqueCharacters.size < desiredSize
      ) {
        uniqueCharacters.set(item.character, {
          id: `${item.character}_${uniqueCharacters.size}`,
          character: item.character,
          image: item.image,
        });
      }
    });

    // have desired unique characters -> break
    if (uniqueCharacters.size >= desiredSize) break;
  }

  return Array.from(uniqueCharacters.values());
};
