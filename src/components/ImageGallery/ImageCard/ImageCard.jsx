//  description, user.username, likes, links.download, urls.raw\full\regular,  id
import css from "./ImageCard.module.css";
export default function ImageCard({ data, onImgClick }) {
  const {
    description,
    user: { username },
    likes,
    links: { download },
    urls: { small },
  } = data;

  return (
    <>
      <img src={small} alt={description} onClick={() => onImgClick(data)} />
      <div className={css.textWrap}>
        <p>Author: {username}</p>
        <p>👍🏻{likes}</p>
        <p>
          <a className={css.link} href={download}>
            Download
          </a>
        </p>
      </div>
    </>
  );
}
