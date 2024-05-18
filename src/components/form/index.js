import React from "react";

import "./formStyle.css";

function FormApplication() {
  return (
    <section className="formSection flex">
      <form 
        id="applicationForm" 
        className="flex" 
        onSubmit={() => {
          alert('Форма успешно отправлена!');
        }}
      >
        <h2>Форма заявок</h2>
        <input
          id="UserName"
          type="text"
          placeholder="Ваше имя"
          maxLength="25"
          required
        />
        <input
          id="UserMail"
          type="email"
          placeholder="Ваша почта"
          maxLength="50"
          required
        />
        <textarea
          id="UserComment"
          type="text"
          placeholder="Комментарий"
          size="200"
        />
        <input id="BtnSubmit" type="submit" value="ОТПРАВИТЬ" />
      </form>
    </section>
  );
}

export default FormApplication;
