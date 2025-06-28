const dummy = (blogs) => {
  // console.log(blogs)
  return 1
}

const sumOfLikes =(blogs) => {

// Basic for loop approach
/*  for (let i = 0; i < blogs.length; i++) {
    let = likeAmount = blogs[i].likes
    console.log(likeAmount)
    }
*/

// Functional way of doing with forEach
/*
let totalLikes = 0
blogs.forEach(function(blog) {
    totalLikes = blog.likes + totalLikes
})
*/

// Functional way of doing with Reduce 

/* var totalLikes = blogs.reduce (function(sum, blogs){
  return sum + blogs.likes
 }, 0)
*/

// The same function as above defined like this:
var totalLikes = blogs.reduce ((sum, blogs) => sum + blogs.likes,0)

return totalLikes
}  

module.exports = {
  dummy, sumOfLikes
}