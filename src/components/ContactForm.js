import React from "react";
import "./ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgrzazb");

  if (state.succeeded) {
    return <p>送信されました。</p>;
  }

  return (
    <div className="contactForm">
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
        <button type="submit" disabled={state.submitting}>
          送信
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
