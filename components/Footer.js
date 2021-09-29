import styles from "../styles/Layout.module.css";
import { useForm, ValidationError } from "@formspree/react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Footer = () => {
  const [state, handleSubmit] = useForm("mdoyjogw");
  if (state.succeeded) {
    return <p>Thanks for reaching out, we will be in touch shortly!</p>;
  }
  return (
    <div className={styles.footer}>
      <h3 id={styles.fancyText}>Contact</h3>
      <h6>Interested in working together?</h6>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.topForm}>
          <label htmlFor="name">Name</label>
          <input id="name" type="name" name="name" placeholder="Name..." />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" placeholder="Email..." />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
          <ArrowForwardOutlinedIcon fontSize="medium" />
        </button>
      </form>
    </div>
  );
};

export default Footer;
