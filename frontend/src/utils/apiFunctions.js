import axios from "axios"

// back-end url
export const api = axios.create({
    baseURL: "http://localhost:3000"
})

const handleApiError = (err) => {
    console.error('API error:', err);
    return { success: false, message: err.message };
};


export const getDomains = async () => {
    try {
        const response = await api.get('/getdomains')
        return { success: true, data: response.data.data }
    } catch (err) {
        return handleApiError(err)
        // throw new Error("Error fetching domains")
    }
}

export const searchStory = async (domain, query) => {
    try {
        const searchPath = `/${domain}/search?keyword=${query}`
        // console.log("search path", searchPath)
        const response = await api.get(searchPath)
        const data = response.data.data.matchedNovels
        const novels = data.map((novel) => {
            const splitArray = novel.link?.split('/')
            return {
                ...novel,
                nameUrl: splitArray[splitArray.length - 1] != "" ? splitArray[splitArray.length - 1] : splitArray[splitArray.length - 2],
                source: domain
            }
        })
        return { success: true, data: novels }
    } catch (err) {
        return handleApiError(err)
        // throw new Error("Error searching stories with query")
    }
}

export const getStoryByName = async (domain, name) => {
    try {
        const getPath = `/${domain}/${name}`
        // console.log("get story path", getPath)
        const response = await api.get(getPath)
        return {
            success: true,
            data: response.data.data
        }
    } catch (err) {
        handleApiError(err)
        // throw new Error("Cannot find the story with name ", name)
    }
}

export const getFeaturedStories = async (domain) => {
    try {
        if (!domain) {
            return{success: true, data: []};
        }
        const response = await api.get(`/${domain}`)
        // console.log("featured stories", response.data)
        const data = response.data.data
        const stories = data.map(story => {
            const splitArray = story.link.split("/")
            const nameUrl = splitArray[splitArray.length - 1] != "" ? splitArray[splitArray.length - 1] : splitArray[splitArray.length - 2]
            return {
                ...story,
                nameUrl: nameUrl,
            }
        })
        return { success: true, data: stories }
    } catch (err) {
        handleApiError(err)
    }
}

export const getDetailChapterNovel = async (domain, name, chapter) => {
    try {
        const response = await api.get(`/${domain}/${name}/${chapter}`)
        // console.log("featured stories", response.data)
        
            const data = response?.data?.data?.content
            if(!data)
                {
                return { success: false, data: '' }
            }
        return { success: true, data: data }
    } catch (err) {
        handleApiError(err)
    }
}