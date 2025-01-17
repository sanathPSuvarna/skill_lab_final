
class BookSorter 
{
    static sortByPopularity(books) 
    {
        return [...books].sort((a, b) =>b.popularity-a.popularity);
    }

    static sortByAvailability(books) 
    {
        return [...books].sort((a, b) => 
            (b.status === "available") - (a.status === "available")
        );
    }

    static sortByTitle(books) {
        return [...books].sort((a, b) => 
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
    }
}
module.exports = BookSorter;