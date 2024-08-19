import axios from 'axios'
import {
  AREAS,
  ARTICLES,
  FEED_SHAPES,
  JOURNEYS,
  PAGES,
  PHASES,
  PRODUCTS,
  SPECIES,
} from './constant'

const serverAxios = () => axios.create({ withCredentials: true })

export const getArticles = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(ARTICLES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getProducts = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(PRODUCTS, config)
  } catch (error) {
    console.log(error)
  }
}
export const getPages = async ({ locale, filter }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
        'filters[url][$eq]': filter,
      },
    }

    return await serverAxios().get(PAGES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getAreas = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(AREAS, config)
  } catch (error) {
    console.log(error)
  }
}
export const getJourneys = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(JOURNEYS, config)
  } catch (error) {
    console.log(error)
  }
}
export const getFeedShapes = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(FEED_SHAPES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getPhases = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(PHASES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getSpecies = async ({ locale }) => {
  try {
    const config = {
      params: {
        'pagination[limit]': 10,
        'sort[1]': 'publishedAt:desc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(SPECIES, config)
  } catch (error) {
    console.log(error)
  }
}
