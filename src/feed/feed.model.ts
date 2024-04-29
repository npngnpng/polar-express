export class Feed {
    id: bigint;
    title: string;
    content: string;

    constructor(id: bigint, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}