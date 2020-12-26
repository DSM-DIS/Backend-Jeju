import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request");
export const ForbiddenDiaryBook = new HttpError(403, "Forbidden", "diary book");
export const ForbiddenPage = new HttpError(403, "Forbidden", "page");
export const NotFoundApi = new HttpError(404, "Not Found");
export const NotFoundDiaryBook = new HttpError(404, "Not Found", "diary book");
export const NotFoundPage = new HttpError(404, "Not Found", "page");