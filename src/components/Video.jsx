import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./Video.scss";
import VideoList from "./VideoList";
import CommentList from "./CommentList";

// The props from id is coming from HomePage1
// we are doing destructuring so we don't have to put props.id.
// <Video id={id} />
function Video({ id, videos, setVideos, api_key, api_url }) {
  //-----------------------------------

  // We are creating react states here.
  // We are doing react states because when we make changes in the variable, we want it to
  // re-render automatically, react does this for us.
  // note: make sure you import it at the very top of the page.
  // videos --> read. setVideos --> update.

  // It's square brackets because when we read a video, we want it to be an empty array.
  // No longer need this because we are now using the props
  // const [videos, setVideos] = useState([]);
  // It's curly brackets because when we read currentVideo, we want it to be an empty object.
  const [currentVideo, setCurrentVideo] = useState({});

  //----------THIS FUNCTION GETS A SPECIFIC VIDEO WITHIN THE API-------------------------

  // we are doing useCallback so it doesn't call the function twice.
  // useCallback caches the id of the function.
  // if there's no change, the useCallback prevents it from running again.
  const getVideoDetails = useCallback(
    async (id) => {
      // if statement is being used to see if "id" has something in it.
      // if the id is empty, the whole function will not run.
      if (id) {
        try {
          const response = await axios.get(
            `${api_url}/videos/${id}?api_key=${api_key}`
          );
          // console.log(response);
          // console.log(response);
          // We are creating a reference here. response.data is the orig version
          const withSortedComments = response.data;
          // we are sorting here based in date (timestamp).
          withSortedComments.comments.sort((a, b) => b.timestamp - a.timestamp);

          setCurrentVideo(withSortedComments);
          // This catches the error. you always need the "console.log(error)"
        } catch (error) {
          console.log(error);
        }
      }
    },
    // This a dependency. This useCallback will only be called when the id changes.
    // This is what is being cached by useCallback.
    [id]
  );

  //----------THIS FUNCTION GETS ALL THE VIDEOS AND STORES IT IN THE RESPONSE-------------------------
  //We don't need a parameter because we don't need additional data to do what it needs to do.
  async function getVideos() {
    try {
      const response = await axios.get(`${api_url}/videos/?api_key=${api_key}`);

      // This is where we update the videos. ctrl + click "setVideos" to see.
      setVideos(response.data);
      // This is being called from the function above.
      // We have response.data[0].id because we want the first selected video to be the first vid in the array.
      // This now specifies an id within the response that we received.
      getVideoDetails(response.data[0].id);
      // This catches the error.
    } catch (error) {
      console.log(error);
    }
  }

  // --------------------------

  //---------THIS POSTS A COMMENT TO THE API--------------------------

  // This pushes the comment (diving deeper)
  // takes a parameter called comment.
  // We need a parameter because we need the comment to perform this function.
  // "comment" parameter is THE PERSON TYPING THEIR COMMENT.
  // Note: We are using postNewComment in the component below, specifically in the Form component.
  async function postNewComment(comment) {
    try {
      // comment: comment links to the const comment. (react state)
      // This is creating a key value pair. ex. name: GJ or comment: comment.
      // we are packaging the payload in commentObject.
      let commentObject = { name: "GJ Pineda", comment: comment };
      const response = await axios.post(
        `${api_url}/videos/${currentVideo.id}/comments?api_key=${api_key}`,
        // Whenever we Post something, we always need a "payload" / data.
        // commentObject is the payload we are sending(posting).
        commentObject
      );

      // const numbers = [1,2,3,4]
      // [...numbers,5]   = [1,2,3,4,5]
      // ctrl +click the setCurrentVideo to find out what it does.
      setCurrentVideo({
        ...currentVideo,
        //response.data = to the new comment. ...currentVideo.comments are the existing comments.
        comments: [response.data, ...currentVideo.comments],
      });
      // This catches the error
    } catch (error) {
      console.log(error);
    }
  }
  //--------THIS DELETES COMMENTS---------------------------

  // We have a parameter id because the way the function works, it needs an id to delete a specific comment.
  async function deleteComment(id) {
    try {
      // comment: comment links to the const comment. (react state)
      // Note: look at delete.
      // This deletes a comment in the back end.
      const response = await axios.delete(
        `${api_url}/videos/${currentVideo.id}/comments/${id}?api_key=${api_key}`
      );

      // if looping through the comments, if the comment.id is equal to response.data.id, we remove it.
      // When the comment is deleted in the back end, we are deleting it in our front end here.
      // This is so you don't have to refresh to delete a comment.
      const updatedComments = currentVideo.comments.filter(
        (comment) => comment.id !== response.data.id
      );

      setCurrentVideo({
        // Rather than adding a new comment, we are putting the filtered version to the current video.
        //
        // const numbers = [1,2,3,4,5]
        // numbers.filter(i => i !== 5)
        // numbers = [1,2,3,4]
        ...currentVideo,
        comments: [...updatedComments],
      });
      // This catches the error.
    } catch (error) {
      console.log(error);
    }
  }

  //--------THIS RUNS FUNCTIONS IN THE BACKGROUND---------------------------
  // We use useEffect when we want to do background functions such as getting data

  useEffect(() => {
    // This means opposite of id.
    if (!id) {
      // This changes the current video to the first video via ID.
      getVideoDetails(videos[0]?.id);
    } else {
      // If the URL has the id, we use bottom, if not, we use above.
      getVideoDetails(id);
    }
    // if the id, videos, or getVideoDetails changes, then useEffect will run the if and else function above.
  }, [id, videos, getVideoDetails]);

  // This useEffect is here because we only want to get videos ONCE., which happens when the component
  // gets rendered.
  useEffect(() => {
    getVideos();
    // empty square brackets means useEffect only runs ONCE.
  }, []);

  //-----------THIS SETS THE DATE------------------------

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

  // -----------EVERYTHING AT THE TOP IS NOT BEING RENDERED BY JAVASCRIPT-------------
  // -----------THIS IS WHAT IS GETTING RENDERED------------

  return (
    <div>
      {/* This is something I need to work on to add a new video. */}
      {/* <button onClick={() => postNewVideo()}>Test New Video thing</button> */}
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
              // We are passing commentsData, postNewComment, and deleteComment to CommentList.
              // Note: everything in the curly braces, comes from the Video component, NOT CommentList.
              commentsData={currentVideo.comments}
              postNewComment={postNewComment}
              deleteComment={deleteComment}
            />
          )}
        </div>
        <VideoList
          // We are passing videos and currentVideo to VideoList component.
          videosData={videos}
          currentVideo={currentVideo}
        />
      </div>
    </div>
  );
}

export default Video;
