import { http, graphql, HttpResponse } from 'msw'

export const handlers = [
  http.post('https://api.example.com/user', async ({request}) => {
    console.log("beofore body")
    console.log(request.url)
    const formData = await request.formData();
    console.log("after body", formData)
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings',
          },
          {
            title: 'The Matrix',
          },
          {
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),
]
