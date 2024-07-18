import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.load}>
      <InfinitySpin
        visible={true}
        width="200"
        color="deepskyblue"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
