import React from "react";
import styles from "../styles/components/ContactForm.module.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm({setSubmitStatus}) {
  const [state, handleSubmit] = useForm("mzbojwzy");

  if (state.succeeded) {
    setSubmitStatus(true);
    return (
      <div className={styles.submitted}>
        <p>お問い合わせありがとうございます。</p>
        <p>一日以内に返信いたします。</p>
      </div>
    )
  }

  return (
    <div className={styles.contact_form}>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mrgrzazb"
      >
        <div>
          <label htmlFor="name">お名前</label>
          <input name="name" type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input name="email" type="email" id="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">ご用件</label>
          <textarea name="message" id="message"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting} className={state.submitting && styles.submitting} >
          送信
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
