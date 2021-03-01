import Download from './ts/Download';

export class App {
    private _appName: string;

    constructor(name:string) {
        this._appName = name;
    }

    public createApp ():void {
        console.log(`create app  -  ${this._appName}`);
    }

    public checkData ():void {
        const data = new Download().outPutData();
        data.then((result)=> console.log(result));
    }

    public checkSound ():void {
        document.body.addEventListener("click", () => {
            const sound = new Audio("../assets/sounds/background/good-result.wav");
            sound.play();
            console.log("sound");
        })
    }
}