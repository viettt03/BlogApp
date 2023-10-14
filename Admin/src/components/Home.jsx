import React, { useEffect, useState } from 'react'
import { deletePost, getPosts } from '../api/post';
import PostCard from './PostCard';
import { useSearch } from '../context/SearchProvider';

let pageNo = 0;
const POST_LIMIT = 9;
const getPagination = (length) => {
    const devision = length / POST_LIMIT;
    if (devision % 1 !== 0)
        return Math.floor(devision) + 1;
    return devision;
}

export default function Home() {
    const { searchResult } = useSearch()
    const [posts, setPosts] = useState([]);
    const [totalPostCount, setTotlalPostCount] = useState([])
    const paginationCount = getPagination(totalPostCount);
    const paginationArr = new Array(paginationCount).fill(' ')
    console.log("check", paginationArr);

    const fetchPosts = async () => {
        const { error, posts, postCount } = await getPosts(pageNo, POST_LIMIT);
        if (error) return console.log((error));
        setPosts(posts);
        setTotlalPostCount(postCount)
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchMorePosts = (index) => {
        pageNo = index
        fetchPosts();
    }
    const handleDelete = async ({ id }) => {
        const confirmed = window.confirm("Are you sure!")
        if (!confirmed) return
        const { error, message } = await deletePost(id)
        if (error) return console.log(error);
        console.log(message);
        const newPosts = posts.filter(p => p.id !== id)
        setPosts(newPosts)
    }
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 mx-2 pb-9'>
                {searchResult.length ?
                    searchResult.map((post) => {
                        return (
                            <PostCard key={post.id} post={post}
                                onDeleteClick={() => handleDelete(post)}
                            />
                        )
                    })
                    :
                    posts.map((post) => {
                        return <PostCard key={post.id} post={post}
                            onDeleteClick={() => handleDelete(post)}
                        />
                    })}

            </div>
            {paginationArr.length > 1 && !searchResult.length ?
                (<div className='py-5 flex justify-center items-center space-x-1'>
                    {paginationArr.map((_, index) => {
                        return (
                            <button

                                onClick={() => fetchMorePosts(index)}
                                className={index === pageNo ? 'text-blue-500 border-2 border-blue-500 w-6 rounded-md' :
                                    "text-gray-500 border-2 border-gray-500 w-6 rounded-md"}
                                key={index}
                            >

                                {index + 1}
                            </button>
                        )
                    })}
                </div>) : null
            }
        </div>
    )
}
