import React, { useState, useRef } from "react";
import "../styles.css";

const UseRefTest = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const idDataRef = useRef(null);
  //   const pwDataRef = useRef(null);

  const data = () => {
    return { id: idDataRef.current.value };
  };

  const init = () => {
    setId("");
    setPw("");
    idRef.current.focus();
    // idDataRef.current.value = "";
    // pwDataRef.current.value = "";
  };
  return (
    <>
      <div className="container_total">
        <div className="container_item">
          <p>아이디</p>
          <input
            id="id"
            type="text"
            onChange={(e) => {
              setId(e.currentTarget.value);
            }}
            value={id}
            ref={idRef}
          />
        </div>

        <p>id : {id}</p>

        <div className="container_item">
          <p>비밀번호</p>
          <input
            id="pw"
            type="text"
            onChange={(e) => {
              setPw(e.currentTarget.value);
            }}
            value={pw}
            ref={pwRef}
          />
        </div>
        <p>pw : {pw}</p>
        <div>
          <hr />
        </div>
        <div className="container_item">
          <p>아이디</p>
          <input id="id" type="text" ref={idDataRef} />
        </div>

        {/* <p>id : {idDataRef.current}</p> */}
        {/* <p value={idDataRef}>id : </p> */}
        <p>{data.id}</p>

        {/* <div className="container_item">
          <p>비밀번호</p>
          <input id="pw" type="text" ref={pwDataRef} />
        </div>
        <p>pw : {pwDataRef.current}</p> */}
        <div>
          <hr />
        </div>
        <button onClick={init}>초기화</button>
      </div>
    </>
  );
};

export default UseRefTest;
