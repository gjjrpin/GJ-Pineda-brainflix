import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./Video.scss";
import VideoList from "./VideoList";
import CommentList from "./CommentList";

function Video({ id }) {
  const api_url = "https://project-2-api.herokuapp.com";
  const api_key = "bdd57ec0-fa70-4c84-9316-db69b13293c7";

  const [videos, setVideos] = useState([]);

  const [currentVideo, setCurrentVideo] = useState({});

  //-----------------------------------

  const getVideoDetails = useCallback(
    async (id) => {
      if (id) {
        try {
          const response = await axios.get(
            `${api_url}/videos/${id}?api_key=${api_key}`
          );
          const withSortedComments = response.data;

          withSortedComments.comments.sort((a, b) => b.timestamp - a.timestamp);

          setCurrentVideo(withSortedComments);
        } catch (error) {
          console.log(error);
        }
      }
    },
    [id]
  );

  //-----------------------------------

  async function getVideos() {
    try {
      const response = await axios.get(`${api_url}/videos/?api_key=${api_key}`);

      setVideos(response.data);
      getVideoDetails(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }

  //---------POST COMMENT--------------------------

  // This pushes the comment (diving deeper)
  async function postNewComment(comment) {
    try {
      // comment: comment links to the const comment in line 7. (react state)
      let commentObject = { name: "nigel", comment: comment };
      const response = await axios.post(
        `${api_url}/videos/${currentVideo.id}/comments?api_key=${api_key}`,
        commentObject
      );

      // const numbers = [1,2,3,4]
      // [...numbers,5]   = [1,2,3,4,5]
      setCurrentVideo({
        ...currentVideo,
        //response.data = to the new comment. ...currentVideo.comments are the existing comments.
        comments: [response.data, ...currentVideo.comments],
      });
    } catch (error) {
      console.log(error);
    }
  }
  //--------DELETES COMMENTS---------------------------

  async function deleteComment(id) {
    try {
      // comment: comment links to the const comment in line 7. (react state)
      const response = await axios.delete(
        `${api_url}/videos/${currentVideo.id}/comments/${id}?api_key=${api_key}`
      );

      // if looping through the comments, if the comment.id is equal to response.data.id, we remove it.
      const updatedComments = currentVideo.comments.filter(
        (comment) => comment.id !== response.data.id
      );

      setCurrentVideo({
        ...currentVideo,
        comments: [...updatedComments],
      });
    } catch (error) {
      console.log(error);
    }
  }

  //-----------------------------------

  useEffect(() => {
    // This means opposite of id.
    if (!id) {
      // This changes the current video to the first video via ID.
      getVideoDetails(videos[0]?.id);
    } else {
      // If the URL has the id, we use bottom, if not, we use above.
      getVideoDetails(id);
    }
  }, [id, videos, getVideoDetails]);

  useEffect(() => {
    getVideos();
  }, []);

  //-----------------------------------

  const dateFormat = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(currentVideo.timestamp).toLocaleDateString(
    "en-US",
    dateFormat
  );

  return (
    <div>
      <video
        className="content__video"
        controls
        width="250"
        poster={currentVideo.image}
        src={`${currentVideo.video}?api_key=test`}
      >
        <source
          src={`${currentVideo.video}?api_key=${api_key}`}
          type="video/mp4"
        />
      </video>
      <div className="video-side">
        <div className="content">
          <h2 className="content__title">{currentVideo.title}</h2>
          <div className="content__container">
            <div className="content__items">
              <p className="content__channel">By {currentVideo.channel}</p>
              <p className="content__timestamp">{formattedDate}</p>
            </div>

            <div className="content__items">
              <p className="content__views">
                <span className="content__icons content__icons--eye"></span>
                {currentVideo.views}
              </p>

              <p className="content__likes">
                {" "}
                <span className="content__icons content__icons--heart"></span>
                {currentVideo.likes}
              </p>
            </div>
          </div>
          <p className="content__description">{currentVideo.description}</p>
          {/* && if currentVideo.comments is "TRUTHY", render <CommentList>  */}
          {currentVideo.comments && (
            <CommentList
              commentsData={currentVideo.comments}
              postNewComment={postNewComment}
              deleteComment={deleteComment}
            />
          )}
        </div>
        <VideoList
          videosData={videos}
          currentVideo={currentVideo}
          handleChangeVideo={getVideoDetails}
        />
      </div>
    </div>
  );
}

export default Video;
