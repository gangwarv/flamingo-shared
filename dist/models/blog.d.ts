export declare class Blog {
    id?: number;
    title: string;
    body: string;
    images: Array<string>;
}
export declare function validateBlog(model: Blog): boolean | string;
