"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBlog = exports.Blog = void 0;
class Blog {
}
exports.Blog = Blog;
function validateBlog(model) {
    if (model.id)
        return true;
    else
        return 'Id is required.';
}
exports.validateBlog = validateBlog;
