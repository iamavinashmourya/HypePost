import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import Loader from "../components/loader.component";
import { UserContext } from "../App";

export const profileDataStrcuture = {
    personal_info: {
        fullname: "",
        username: "",
        profile_img: "",
        bio: "",
    },
    account_info: {
        total_posts: 0,
        total_blogs: 0
    },
    social_links: { },
    joinedAt: " "
}

const ProfilePage = () => {

    let { id: profileId } = useParams();

    let [ profile, setprofile ] = useState(profileDataStrcuture);
    let [ loading, setLoading ] = useState(true);

    let { personal_info: { fullname, username: profile_username, profile_img , bio }, account_info: { total_posts, total_reads}, social_links, joinedAt } = profile;

    let { userAuth: { username } } = useContext(UserContext)


    const fetchUserProfile = () => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-profile", {
        username: profileId })
        .then(({ data: user }) => {
            setprofile(user);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {

        resetStates();
        fetchUserProfile();

    }, [profileId])

    const resetStates = () => {
        setprofile(profileDataStrcuture);
        setLoading(true);
    }
    
    return (

        <AnimationWrapper>
            {
                loading ? <Loader /> :
                <section className="h-cover md:flex flex-row-reverse items-start gap-5 min-[1100px]:gap-12">
                    <div className="flex flex-col max-md:items-center gap-5 min-w-[250px]">

                        <img src={profile_img} className="w-48 h-48 bg-grey rounded-full md:w-32 md:h-32" />

                        <h1 className="text-2xl font-medium">@{profile_username}</h1>
                        <p className="text-xl capitalize h-6">{fullname}</p>

                        <p>{total_posts.toLocaleString()} Blogs - {total_reads.toLocaleString()} Reads </p>

                        <div className="flex gap-4 mt-2">
                            {
                                profileId == username ? 
                                <Link to="/setting/edit-profile" className="btn-light rounded-md">Edit Profile</Link>
                                : " "
                            }
                            
                        </div>

                    </div>


                </section>
            }
        </AnimationWrapper>

        
    )
}

export default ProfilePage;