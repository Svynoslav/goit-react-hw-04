import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoad }) {
  return (
    <button onClick={onLoad} className={css.btn}>
      Load more
    </button>
  );
}
