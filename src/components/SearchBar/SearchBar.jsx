import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.head}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast("SUBMITTING EMPTY FIELDS IS UNACEEEPTAAABLEEE!!!", {
              icon: "👺",
              style: {
                borderRadius: "10px",
                background: "red",
                color: "#fff",
              },
              duration: 1500,
            });
            actions.setSubmitting(false);
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <FaSearch fill="deeppink" />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
