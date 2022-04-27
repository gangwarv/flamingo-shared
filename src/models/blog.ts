export interface Blog {
    id?: number
    title: string
    body: string
    images: Array<string>
}

export function validateBlog(model: Blog): boolean | string {
    if (model.id)
        return true;
    else return 'Id is required.'
}