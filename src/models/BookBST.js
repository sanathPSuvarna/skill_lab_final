class BookNode
{
    constructor(book)
    {
        this.book=book;
        this.left=null;
        this.right=null;
    }
}

class BookBST 
{
    constructor() 
    {
        this.root = null;
    }

    insert(book) 
    {
        if(!this.root) 
        {
            this.root=new BookNode(book);
        } 
        else 
        {
            this._insertRecursive(this.root, book);
        }
    }

    _insertRecursive(node, book) 
    {
        if(book.title < node.book.title) 
        {
            if(node.left === null) 
            {
                node.left=new BookNode(book);
            } 
            else 
            {
                this._insertRecursive(node.left, book);
            }
        }
        else 
        {
            if(node.right === null)
            {
                node.right = new BookNode(book);
            } 
            else 
            {
                this._insertRecursive(node.right, book);
            }
        }
    }

    search(title) 
    {
        return this._searchRecursive(this.root, title);
    }

    _searchRecursive(node, title) 
    {
        if (node===null||node.book.title===title) 
        {
            return node;
        }
        if(title < node.book.title) 
        {
            return this._searchRecursive(node.left, title);
        }
        return this._searchRecursive(node.right, title);
    }
}
module.exports = BookBST;