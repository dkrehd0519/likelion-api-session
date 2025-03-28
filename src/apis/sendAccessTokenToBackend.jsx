import axios from "axios";

const sendAccessTokenToBackend = async (code) => {
  try {
    const serverResponse = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/auth/loginFormalMethod/callback`, {
      params: { code: code },
    });
    // 서버로부터의 응답 처리
    console.log("Login successful with server response:", serverResponse);

    // memberId를 로컬 스토리지에 저장
    localStorage.setItem("memberId", serverResponse.data.memberId);

    return serverResponse.data;
  } catch (error) {
    console.error("Login failed with error:", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;
