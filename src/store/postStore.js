import { create } from "zustand";
import api from "../util/aplClient"

const usePostStore=create((set)=>({
    data: null,
    post: null,
    comments: [],
    loading: false,
    error:null,

    fetchData: async (pageno) => {
      set({ loading: true });
      try {
        const { data } = await api.get(`/api/posts?pageno=${pageno}`);
        set({ data: data });
      } catch (err) {
        set({error:err});
        console.error('Failed to fetch posts:', err);
      } finally {
        set({ loading: false });
      }
    },

    fetchPost: async (pno) => {
      set({ loading: true });
      try {
        const { data } = await api.get(`/api/posts/post?pno=${pno}`);
        const {comments, ...postWithoutComments} = data;
        set({ post: postWithoutComments });
        set({ comments: comments});
      } catch (err) {
        set({error:err});
        console.error('Failed to fetch post:', err);
      } finally {
        set({ loading: false });
      }
    },

    fetchComments:(data)=>{
      set({comments:data});
    }
}))

export default usePostStore;