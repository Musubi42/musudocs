// posts/[id].paths.js
import { loadEnv } from 'vitepress'

const env = loadEnv('development', process.cwd())

export default {
  async paths() {
    const response = await fetch('https://backoffice.roulerpouraider.fr/api/vite-presses', {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${env.VITE_STRAPI_API_TOKEN}`
      }
    })
    const { data } = await response.json()

    console.log(data);

    return data.map((pkg) => {
      return {
        params: {
          id: pkg.id,
          title: pkg.attributes.Title
        }
      }
    })
    // const result = data.map(entry => ({
    //   params: { id: entry.id },
    //   title: entry.attributes.Title,
    // }))

    // console.log("je suis un ", result);

  }
}
