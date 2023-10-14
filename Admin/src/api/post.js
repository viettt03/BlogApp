import client from "./client";

export const getPosts = async (pageNo, limit) => {
    try {
        const { data } = await client(`/post/posts?pageNo=${pageNo}&limit=${limit}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data;
        }
        return { error: error || error.message }

    }

}
export const deletePost = async (postId) => {
    try {
        const { data } = await client.delete(`/post/${postId}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data;
        }
        return { error: error || error.message }

    }

}

export const searchPost = async (query) => {
    try {
        const { data } = await client(`/post/search?title=${query}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data;
        }
        return { error: error || error.message }

    }

}