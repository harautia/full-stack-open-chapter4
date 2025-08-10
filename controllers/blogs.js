const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// Exercise 4.8 change
blogsRouter.get('/', async (request, response) => { 
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  
  // Check that URL and TITLE fields are in request
  if (!body.url) {
    return response.status(400).json({ 
      error: 'URL is missing from the request' 
    })
  }
  if (!body.title) {
    return response.status(400).json({ 
      error: 'Title is missing from the request' 
    })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })
      
  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', (request, response, next) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
/*
blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})
*/

module.exports = blogsRouter