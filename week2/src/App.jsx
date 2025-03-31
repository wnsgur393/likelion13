import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드
  return (
    <div>
      <header className="header">
        <h1>My Profile</h1>
        <p>나만의 웹사이트를 만들어봐요!</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#about">자기소개</a></li>
          <li><a href="#features">관심사</a></li>
          <li><a href="#contact">연락하기</a></li>
          <li><a href="https://skulikelion.com" target="_blank" >멋사 사이트 바로가기</a></li>
        </ul>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <h2>안녕하세요!</h2>
          <p>만나서 반갑습니다. 저는 컴퓨터공학과에 재학중인 22학번 홍길동입니다.</p>
          <p>함께 즐거운 동아리 생활 보내봐요 ^^</p>
          <img
            className="img"
            src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eViY/image/is3UFbmo7Gwuiln43EznmVZFwXo.jpg"
            alt="about_image"
          />
        </section>

        <section id="features" className="section">
          <h2>관심사</h2>
          
          <h3>취미</h3>
          <ul>
            <li>농구 보기</li>
            <li>음악 감상</li>
            <li>기타 치기</li>
            <li>코딩 ^^</li>
          </ul>
          <img
            className="img"
            src="https://i.ytimg.com/vi/dIt_N7yNTgk/mqdefault.jpg"
            alt="guitar_image"
          />

          <h3>좋아하는 음식 순위</h3>
          <ol>
            <li>타코</li>
            <li>떡볶이</li>
            <li>햄버거</li>
          </ol>
          <img
            className="img"
            src="https://i.pinimg.com/474x/7a/9e/ec/7a9eec73158b3e0a84691551180fef8e.jpg"
            alt="hamburger_image"
          />
        </section>

        <section id="contact" className="section">
          <h2>연락하기</h2>
          <p>이메일: skulikelion@example.com</p>
          <p>전화번호: 010-1234-5678</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
      </footer>
    </div>
  );
}
