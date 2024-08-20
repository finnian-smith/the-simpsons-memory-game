export const fetchSimpsonsCards = async () => {
  const response = await fetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from API.");
  }

  const data = await response.json();
  return data.map((item, index) => ({
    id: index,
    character: item.character,
    image: item.image,
  }));
};
