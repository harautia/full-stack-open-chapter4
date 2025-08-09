const Blog = require('../models/blog')

const uniqueBlogId = async () => {
    const blogs = await Blog.find ({})

    const ids = blogs.map(blog => blog.id);
    console.log(ids);

    // A Set in JavaScript automatically removes duplicates - it only stores unique values.
    const uniqueIds = new Set(ids);

    /*
    console.log(ids)
    console.log(uniqueIds)

    [ '6832dcc55c00b67dda022948', '683602e52da394c6a023a0a8' ]
    Set(2) { '6832dcc55c00b67dda022948', '683602e52da394c6a023a0a8' }
    
    So if none of duplicates are found & removed then then ids length
    is same that uniqueIds length --- Note also that since formation of set
    is different it using .size funtion
    */
    
    if (ids.length === uniqueIds.size)
        return true
    else
        return false
}
/*
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}
*/
module.exports = {
  uniqueBlogId
}