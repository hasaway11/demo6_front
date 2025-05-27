import api from "../util/aplClient"

const usePostStore=create((set)=>({
    posts: [],
    post: null,
    comments: [],
    loading: false,
    error:null,

    fetchPosts: async (pageno) => {
      set({ loading: true });
      try {
        const { data } = await api.get(`/posts?pageno=${pageno}`);
        set({ posts: data });
      } catch (err) {
        set({error:err});
        console.error('Failed to fetch posts:', error);
      } finally {
        set({ loading: false });
      }
    },

    fetchPost: async (pno) => {
      set({ loading: true });
      try {
        const { data } = await api.get(`/posts/post?pno=${pno}`);
        set({ post: data.post });
        set({ comments: data.comments});
      } catch (err) {
        set({error:err});
        console.error('Failed to fetch post:', error);
      } finally {
        set({ loading: false });
      }
    },

    // 댓글 목록 가져오기
    fetchComments: async (pno) => {
      set({ loading: true });
      try {
        const { data } = await api.get(`/posts/${postId}/comments`);
        set({ comments: data });
      } catch (err) {
        set({error:err});
        console.error('Failed to fetch comments:', error);
      } finally {
        set({ loading: false });
      }
    },
}))

export default usePostStore;