const API_KEY = '584f511ea51c3efd42ab36e400450642';
const API_BASE = 'https://api.themoviedb.org/3/movie/550?';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia 
- terror 
- romance 
- documentários 
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}

export default {
    getHomeList: async () => {
        return[
            {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'trending',
                title: 'Recomendados para você',
                items:await basicFetch(`/trending/all/weel?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Em alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },

            {
                slug: 'horror',
                title: 'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },

            {
                slug: 'romance',
                title: 'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },

            {
                slug: 'documentary',
                title: 'Documentários',
                items:await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            },

        ];
    }
}