export default class Download {
    private _data: any;
    constructor () {
        this._data;
    }

    public outPutData () {
        return new Promise ((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", '../assets/data/data.json');
            request.send();
            request.onload = () => {
                if(request.status === 200) {
                    resolve (JSON.parse(request.response));
                    this._data = JSON.parse(request.response)
                }else {
                    reject("failed request");
                }
            };
        });
    }
}