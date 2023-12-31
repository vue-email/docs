import { Octokit } from '@octokit/rest'

export default cachedEventHandler(async (_) => {
  const npmData = await fetch('https://api.npmjs.org/downloads/point/last-month/vue-email')
    .then(res => res.json())
    .catch(() => {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
      })
    })

  if (!process.env.GITHUB_TOKEN)
    return []

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const githubData = await octokit.repos.get({
    owner: 'vue-email',
    repo: 'vue-email',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).catch(() => {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  })

  const githubContibutorsData = await octokit.repos.listContributors({
    owner: 'vue-email',
    repo: 'vue-email',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).catch(() => {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  })

  return {
    stats: {
      downloads: npmData.downloads,
      stars: githubData.data.stargazers_count,
    },
    contributors: githubContibutorsData.data && githubContibutorsData.data.length
      ? githubContibutorsData.data.map((contributor: any) => ({
        id: contributor.id,
        username: contributor.login,
        contributions: contributor.contributions,
      }))
      : [],
  }
}, {
  maxAge: 60 * 60,
})
