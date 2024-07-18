// description, id, likes, links.download, urls.raw\full\regular, user.username

import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery({ data, onImgClick }) {
  return (
    <ul className={css.list}>
      {data.map((img) => (
        <li className={css.listItem} key={img.id}>
          <ImageCard data={img} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}
