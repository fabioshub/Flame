type LineHolder = Array<string>;
type Listener = (l: Array<string>) => void;

class StorageClass {
    private lineHolder: LineHolder= [];
    private listener: Listener = () => this.lineHolder;
    
    addLine = (line: string): void => {
        this.lineHolder.push(line);
        this.listener(this.lineHolder);
    };

    subscribe = (l: Listener): void => {
        this.listener = l;
    };
}

export default new StorageClass();

