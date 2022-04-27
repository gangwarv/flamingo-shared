"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBlog = void 0;
function validateBlog(model) {
    if (model.id)
        return true;
    else
        return 'Id is required.';
}
exports.validateBlog = validateBlog;
