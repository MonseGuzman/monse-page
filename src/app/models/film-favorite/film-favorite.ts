export class FilmFavorite {
    public id: string;
    public name: string;
    public description: string;
    public img: string;

    public constructor(id: string, name: string, description: string, img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
}
