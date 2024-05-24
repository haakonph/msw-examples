/**
 * @vitest-environment node
 */

it('fetches the user info', async () => {
  const formData = new FormData();
  formData.append('type', 'nisse');
  const file = new File(['gyldig xml'], 'filnavn.xml');
  formData.append('fil', file)

  const response = await fetch('https://api.example.com/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': ''
    },
    body: formData,
  })

  expect(response.status).toBe(200)
  expect(response.statusText).toBe('OK')
  expect(await response.json()).toEqual({
    firstName: 'John',
    lastName: 'Maverick',
  })
})

it('fetches the list of movies', async () => {
  const response = await fetch('https://api.example.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query ListMovies {
          movies {
            title
          }
        }
      `,
    }),
  })

  expect(response.status).toBe(200)
  expect(response.statusText).toBe('OK')
  expect(await response.json()).toEqual({
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
})
