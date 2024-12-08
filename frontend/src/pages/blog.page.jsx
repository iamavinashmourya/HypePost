import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimationWrapper from "../common/page-animation";
import Loader from "../components/loader.component";

export const blogStructure = {
    title: '',
    des: '',
    content: [],
    tags: [],
    author: { personal_info: { } },
    banner: '',
    publishedAt: ''
}

const BlogPage = () => {
    const { blog_id } = useParams();
    const [blog, setBlog] = useState(blogStructure);
    const [ loading, setLoading ] = useState(true);

    let { title, content, banner, author: { personal_info: { fullname, username, profile_img } }, publishedAt } = blog;

    const fetchBlog = () => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-blog", { blog_id })
            .then(({ data: { blog } }) => {
                setBlog(blog);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <AnimationWrapper>
            {
                loading ? <Loader />
                :
                <div className="max-w-[900px] center py-10 max-lg:px-[5vw]">

                    <img src={banner} className="aspect-video" />

                    <div className="mt-12">
                        <h2>{title}</h2>
                    </div>

                </div>
            }
        </AnimationWrapper>
    );
};

export default BlogPage;