export interface Game {
    id: any;
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    rating: Array<Rating>;
    traielrs: Array<Trailer>;
}
    export interface APIResponse<T> {
        results: Array<T>;
    }

    interface Genre {
        name: string;
    }

    interface ParentPlatform {
        platform: {
            name: string;
            slug: any
        }
    }

    interface Publishers {
        name: string;
    }

    interface Rating {
        id: number;
        count: number;
        title: string;
    }

    interface Screenshots {
        image: string;
    }

    interface Trailer {
        data: {
            max: string;
        }
    }















