import { CREATE_BLOG, DELETE_BLOG, GET_BLOG, UPDATE_BLOG } from "../constants/types";

const blogData = {
  blogs: [
    {
      id: "1",
      title: "Hello",
      description: "We Are there",
      length: "20"
    },

    {
      id: "2",
      title: "Iam",
      description: "We Are there",
      length: "20"
    },

    {
      id: "3",
      title: "There",
      description: "We Are there",
      length: "20"
    }
  ],
  blog: {

  },
};

const dataReducer = (data = blogData, action) => {
  console.log('inside DataReducer js');
  console.log(data);
  console.log(action);
  console.log(action.blogs);
  switch (action.type) {
    case CREATE_BLOG:
      return {
        blogs: [...data.blogs, action.data]

      };

    case GET_BLOG:
      // console.warn("data.blogs::", data.blogs);
      let arr = data.blogs.filter((blog) => blog.id == action.payload);
      arr = arr.values();
      
      for(let elem of arr) {
        arr = elem;
      }
      return {
        ...data,
        blog: arr,
      }

      case UPDATE_BLOG:
        return {
          ...data,
          blogs: data.blogs.map((blog) => blog.id == action.payload ? payload : blog),

        }

      case DELETE_BLOG:
        return {
          ...data,
          blogs: data.blogs.filter((blog) =>  {
            return(
              blog.id != action.payload
            )
          })
        }
    

      
      
      // arr = arr.values();
      // console.log("arr::", arr);
      // for(let val of arr) {
      //   arr = val;
      // }
      // return {
      //   ...data,
      //   blog:arr,
      // };

    // case "DELETE_BLOG":
    //   return {
    //     data.filter((elem) => {
    //       return 
    //     })
    //   }
    default:
      return data;
  }
};

export default dataReducer;
