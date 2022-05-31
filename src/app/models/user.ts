import Book from "./book";

export default interface User {
    id?: number,
    name?: string,
    passowrd?: string,
    points?: number,
    books?: Book[]
}