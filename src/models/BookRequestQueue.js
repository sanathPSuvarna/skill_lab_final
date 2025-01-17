class BookRequestQueue 
{
    constructor() 
    {
        this.requests = [];
    }
    addRequest(studentId, bookId) 
    {
        const request= 
        {
            studentId,
            bookId,
            timestamp:new Date()
        };
        this.requests.push(request);
    }
    processNextRequest() 
    {
        if (!this.isEmpty()) 
        {
            return this.requests.shift();
        }
        return null;
    }
    isEmpty() 
    {
        return this.requests.length===0;
    }
}
module.exports = BookRequestQueue;