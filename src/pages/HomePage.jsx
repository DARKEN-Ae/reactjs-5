import React, { Fragment, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import request from "../server/server.js";
import Card from "../components/card/CardPage.jsx";
import Loading from "../components/loading/Loading.jsx";
import { toast } from "react-toastify";
import "./Home.scss";

const HomePage = () => {
  const { searchText } = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  async function getPosts() {
    try {
      setLoading(true);
      let { data } = await request("top-headlines", {
        params: {
          country: "us",
          apiKey: "5f8e935426ac4a47a0c3c1ab33cb4c81",
        },
      });

      setPosts(data.articles || []);
      setFilteredPosts(data.articles || []);
    } catch (error) {
      toast.error("API bilan ulanishda Muammo");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (searchText) {
      setFilteredPosts(
        posts.filter((post) =>
          post.author
            ? post.author.toLowerCase().includes(searchText.toLowerCase())
            : false
        )
      );
    } else {
      setFilteredPosts(posts);
    }
    setCurrentPage(1);
  }, [searchText, posts]);

  // Pagination logikasi
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container">
      <div className="card_father">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => <Card {...post} key={index} />)
            ) : (
              <div className="news_father">
                <h1 className="news-p">Yangiliklar topilmadi.</h1>
              </div>
            )}
          </Fragment>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            style={{
              padding: "10px",
              border: "none",
              backgroundColor: "purple",
              color: "white",
              cursor: "pointer",
              borderRadius: "15px",
            }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            style={{
              padding: "10px",
              border: "none",
              backgroundColor: "purple",
              color: "white",
              cursor: "pointer",
              borderRadius: "15px",
            }}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
