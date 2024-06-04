import { privateAxios } from "./helper";
import { myAxios } from "./helper";
//create post function
export const createPost = (postData) => {
  //   console.log(postData);
  return privateAxios
    .post(
      `api/user/${postData.userId}/category/${postData.categoryId}/post`,
      postData
    )
    .then((response) => response.data);
};

//get all posts

export const loadAllPosts = (pageNumber, pageSize) => {
  return myAxios
    .get(
      `api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
    )
    .then((response) => response.data);
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxios.get("api/post/" + postId).then((reponse) => reponse.data);
};

export const createComment = (comment, postId) => {
  return privateAxios.post(`api/post/${postId}/comment`, comment);
};

//upload post banner image

export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`api/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//get cateory wise posts
export function loadPostCategoryWise(categoryId) {
  return privateAxios
    .get(`api/category/${categoryId}/posts`)
    .then((res) => res.data);
}

export function loadPostUserWise(userId) {
  return privateAxios.get(`api/user/${userId}/posts`).then((res) => res.data);
}

//delete post
export function deletePostService(postId) {
  return privateAxios.delete(`api/post/${postId}`).then((res) => res.data);
}

//update post
export function updatePost(post, postId) {
  console.log(post);
  return privateAxios.put(`api/post/${postId}`, post).then((resp) => resp.data);
}
