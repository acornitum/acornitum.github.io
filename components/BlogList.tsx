import styles from "../styles/BlogList.module.css"

// const BlogList = ({ allBlogs }: { allBlogs: any }) => {
//     return (
//     <div className={styles.bloglist__container}>
//       <h3>List of all blog posts will go here</h3>
//     </div>
//     )
// }

function BlogList({ allBlogs }: { allBlogs: any }) {
  return (
  <div className={styles.bloglist__container}>
    <h3>List of all blog posts will go here</h3>
  </div>
  )
}

export default BlogList
