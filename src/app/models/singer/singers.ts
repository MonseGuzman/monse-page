export class Singers {
    public id: string;
    public name: string;
    public photo: string;
    public position: boolean;
    public music: string;

    constructor(id: string, name: string, photo: string, position: boolean, music: string) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.position = position;
        this.music = music;
    }
}
