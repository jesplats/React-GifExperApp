export const getGifs = async (Category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=f5nK9nau96CTT8IcsJCDTHx0z57735pj&q=${Category}&limit=2`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data)

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
