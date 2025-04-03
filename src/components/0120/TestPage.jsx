/*
jwt token test page 

1. 저장한 token을 가져와서 저 api 요청의 token으로 넣어주면 된다. 
2. 성공하면 인증성공이 나올것이고 실패하면 인증 실패가 나올 것
3. 토큰을 잘 넣어 성공했다면, 토큰의 인증시간이 3분이니 3분 후에 다시 인증 실패가 나올것이다. 이때 로그인 페이지로 이동시켜라(저장되어있는 토큰은 쓸모없으니 삭제시켜라)
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { getToken } from "../storage/manageJWT";

const TestPage = () => {
  const [authResult, setAuthResult] = useState(null);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/test`, {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        });

        if (response.data === 1) {
          setAuthResult("✅ 인증 성공!");
        } else {
          setAuthResult("❌ 인증 실패 (서버에서 0 반환)");
        }
      } catch (error) {
        setAuthResult("❌ 인증 실패 (에러 발생)");
        console.error("Error during authentication:", error);
      }
    };

    fetchAuthStatus();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>JWT 인증 테스트</h2>
      <p>결과: {authResult}</p>
    </div>
  );
};

export default TestPage;
