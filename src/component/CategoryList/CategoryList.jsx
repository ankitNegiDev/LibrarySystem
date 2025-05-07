function CategoryList({books}){
    // books array

    return(
        <>
            <ul>
                {books.map(function callback(book,index){
                    return(
                        <li key={index}>
                            {book.category}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default CategoryList;