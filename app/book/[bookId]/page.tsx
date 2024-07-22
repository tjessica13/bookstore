
// /book/bookid

import { Books } from '@/data';

const page = ({ params } : {params: {bookId:string}}) => {
    return (
        <div>Book {params.bookId}</div>
    );
}

export default page