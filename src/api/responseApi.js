import axios from 'axios'
import {
  AREAS,
  ARTICLES,
  FEED_SHAPES,
  GET_ARTICLE_BY_ID,
  GET_PRODUCT_BY_ID,
  GET_SPECIES_BY_ID,
  JOURNEYS,
  PAGES,
  PHASES,
  PRODUCTS,
  SOLUTIONS,
  SPECIES,
  CITIES,
  ADDRESS,
  VALUES,
} from './constant'

const serverAxios = () => axios.create({ withCredentials: true })

export const getArticles = async ({ locale }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'published_date:desc',
        locale,
        populate: 'deep',
      },
    }

    return await serverAxios().get(ARTICLES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getProducts = async ({
  locale,
  species,
  populates,
  shapes,
  phases,
}) => {
  try {
    const populate = { ...populates }
    let shape = {}
    let phase = {}
    if (shapes && shapes != '*' && shapes != 'Type')
      shape = { 'filters[feed_shapes][name][$eq]': shapes }
    if (phases && phases != 'Phases')
      phase = { 'filters[phases][name][$eq]': phases }

    const config = {
      params: {
        'pagination[limit]': 30,
        'sort[0]': 'feed_name:asc',
        locale,
        'filters[species][name][$eq]': species,
        ...shape,
        ...phase,
        ...populate,
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
        'sort[0]': 'publishedAt:desc',
        locale,
        populate: 'content.image',
        'filters[url][$eq]': filter,
      },
    }

    return await serverAxios().get(PAGES, config)
  } catch (error) {
    console.log(error)
  }
}

export const getValues = async ({ locale, filter }) => {
  try {
    const config = {
      params: {
        locale,
        populate: 'deep',
      },
    }

    return await serverAxios().get(VALUES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getAreas = async ({ locale }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'publishedAt:desc',
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
        'sort[0]': 'publishedAt:desc',
        locale,
        populate: 'deep',
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
        'sort[0]': 'name:asc',
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
        'sort[0]': 'name:asc',
        locale,
        populate: 'deep',
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
        'sort[0]': 'name:asc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(SPECIES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getSolutions = async ({ locale }) => {
  try {
    const config = {
      params: {
        locale,
        populate: 'deep',
      },
    }

    return await serverAxios().get(SOLUTIONS, config)
  } catch (error) {
    console.log(error)
  }
}
export const getSpeciesById = async ({ locale, id }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'name:asc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(GET_SPECIES_BY_ID(id), config)
  } catch (error) {
    console.log(error)
  }
}
export const getSpeciesBySlug = async ({ locale, id }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'name:asc',
        locale,
        populate: '*',
        'filters[slug][$eq]': id,
      },
    }

    return await serverAxios().get(SPECIES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getProductById = async ({ locale, id_product }) => {
  try {
    const config = {
      params: {
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(GET_PRODUCT_BY_ID(id_product), config)
  } catch (error) {
    console.log(error)
  }
}
export const getProductBySlug = async ({ locale, id_product }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'feed_name:asc',
        locale,
        populate: '*',
        'filters[slug][$eq]': id_product,
      },
    }
    
    return await serverAxios().get(PRODUCTS, config)
  } catch (error) {
    console.log(error)
  }
}
export const getRelatedById = async ({ locale, id_product }) => {
  try {
    const config = {
      params: {
        locale,
        populate: 'relateds.image',
      },
    }

    return await serverAxios().get(GET_PRODUCT_BY_ID(id_product), config)
  } catch (error) {
    console.log(error)
  }
}
export const getArticleById = async ({ locale, id }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'name:asc',
        locale,
        populate: '*',
      },
    }

    return await serverAxios().get(GET_ARTICLE_BY_ID(id), config)
  } catch (error) {
    console.log(error)
  }
}
export const getArticleBySlug = async ({ locale, id }) => {
  try {
    const config = {
      params: {
        locale: locale,
        populate: 'deep',
        'filters[slug][$eq]': id,
      },
    }    
    return await serverAxios().get(ARTICLES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getArticlesByCategory = async ({ locale, category }) => {
  try {
    const config = {
      params: {
        'sort[0]': 'published_date:desc',
        locale: locale,
        populate: 'deep',
        'filters[category][$eq]': category,
      },
    }

    return await serverAxios().get(ARTICLES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getCities = async () => {
  try {
    const config = {
      params: {
        'pagination[limit]': 1000,
        'sort[0]': 'name:asc',
        'fields[0]': 'code',
        'fields[1]': 'name',
      },
    }

    return await serverAxios().get(CITIES, config)
  } catch (error) {
    console.log(error)
  }
}
export const getAddress = async () => {
  try {
    const config = {
      params: {
        'pagination[limit]': 1000,
        'sort[0]': 'title:asc',
      },
    }

    return await serverAxios().get(ADDRESS, config)
  } catch (error) {
    console.log(error)
  }
}
