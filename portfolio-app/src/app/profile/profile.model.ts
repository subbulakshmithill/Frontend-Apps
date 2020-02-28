export class Profile{
    public name: string;
    public imagePath: string;
    public description: string;

    constructor(name: string , description: string ,imgPath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imgPath;
    }
}