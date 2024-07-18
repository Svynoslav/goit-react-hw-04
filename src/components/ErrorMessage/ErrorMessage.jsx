import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      🤪 Woops! Looks like someone broke something! Sure wasn't me 👀
    </p>
  );
}
