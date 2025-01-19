import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [data, setData] = useState({
    name: "",
    author: "",
    price: "",
  });
  const navigate = useNavigate();
  const nameRef = useRef();
  const authorRef = useRef();
  const priceRef = useRef();

  const onClickBtn = () => {
    navigate(`/`);
  };

  const onChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function postDataToJSONFile() {
    if (!data.name) {
      alert("Name 칸을 입력해주세요.");
      nameRef.current.focus();
      return;
    }

    if (!data.author) {
      alert("Author 칸을 입력해주세요.");
      authorRef.current.focus();
      return;
    }

    if (!data.price) {
      alert("Price 칸을 입력해주세요.");
      priceRef.current.focus();
      return;
    }

    //post code
    fetch("https://674e9de9635bad45618f3c1c.mockapi.io/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        alert("책 리스트가 추가되었습니다.");
        onClickBtn();
      })
      .catch((error) => {
        alert("에러가 발생했습니다. ");
        console.error(error);
      });
  }
  return (
    <div>
      <h1 class="modal-title fs-5" id="exampleModalLabel">
        ADD BOOK
      </h1>

      <div class="input-group">
        NAME : <input onChange={onChangeInput} type="text" placeholder="name" name="name" />
      </div>
      <div class="input-group">
        AUTHOR : <input onChange={onChangeInput} type="text" placeholder="author" name="author" />
      </div>
      <div class="input-group">
        PRICE : <input onChange={onChangeInput} type="number" placeholder="price" name="price" />
      </div>
      <button type="button" onClick={onClickBtn}>
        Close
      </button>
      <button type="button" class="btn btn-primary" onClick={postDataToJSONFile}>
        Add
      </button>
    </div>
  );
}

export default Create;
