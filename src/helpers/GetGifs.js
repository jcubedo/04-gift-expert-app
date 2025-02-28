export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XDenNb7cM7qvjZ59Z8e8RvGlwVtNHDi5&q=${category}&limit=10`;
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = await data.map( img => ({id: img.id, url: img.images.downsized_medium.url , title: img.title}));

    return gifs;
}