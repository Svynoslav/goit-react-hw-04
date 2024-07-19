import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import fetchImgs from "../../img-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageGallery/ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImgs(query, page);
        setImgs((prevImgs) => {
          return [...prevImgs, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = async (newQuery) => {
    setImgs([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoad = () => {
    setPage(page + 1);
  };

  const openModal = (img) => {
    setModalOpen(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setModalImg(null);
    setModalOpen(false);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <SearchBar onSearch={handleSearch} />
      <ImageGallery data={imgs} onImgClick={openModal} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {imgs.length > 0 && <LoadMoreBtn onLoad={handleLoad} />}
      {modalOpen && (
        <ImageModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          img={modalImg}
        />
      )}
    </>
  );
}
