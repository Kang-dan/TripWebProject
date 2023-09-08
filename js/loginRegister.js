function regist() {
    // 문서에서 id 로 input data 가져오기
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
  
    // 입력값 검증
    if (id.trim() === "" || password.trim() === "" || name.trim() === "" || email.trim() === "" || age.trim() === "") {
      alert("빈칸을 모두 채워주세요.");
      return;
    } else {
      // input data로 user 만들기
      const user = {
        id: id,
        password: password,
        name: name,
        email: email,
        age: age,
      };
  
      // user 객체 문자열로 바꿔서 로컬스토리지에 저장
      localStorage.setItem("user", JSON.stringify(user));
      alert("등록해주셔서 감사합니다 Ꙭ̮");
      // 로그인 화면으로 돌아가기
      location.replace("login.html");
    }
  }
  
  function login() {
    // 문서에서 id로 input data 가져오기
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
  
    // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
    const user = JSON.parse(localStorage.getItem("user"));
  
    // 입력값 검증
    if (user && id === user.id && password === user.password) {
      alert("🍦 즐거운 여행 되세요 🚉");
      // 로그인 성공하면 index 페이지로 이동.
      location.replace("../hmain.html");
    } else {
      alert("회원가입을 해주세요");
    }
  }
  