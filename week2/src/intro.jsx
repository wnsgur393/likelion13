import "./intro.css"

export default function Intro() {
    return (
        <>
            <header className="intro">
                <h2>Let Me Introduce Myself</h2>
                <hr />
            </header>

            <nav className="links">
                <ul>
                    <li><a href="#page1">Profile</a></li>
                    <li><a href="#page2">Hobby</a></li>
                    <li><a href="#page3">More About Me</a></li>
                </ul>
                <hr />
            </nav>

            <main className="main">
                <h2> HELLO ! </h2>
                <h2>↓ My Profile ↓</h2>

                <section className="profile" id="page1">
                    <img className="mmtc" src="me.png" alt="미모티콘" />
                    <ul>
                        <li>Name : JunHyuk Kim</li>
                        <li>BirthDate : 2002.10.02</li>
                        <li>Residence : Eunpyeong-gu, Seoul</li>
                        <li>Major : Software</li>
                        <li>Part : Frontend</li>
                        <li>e-mail : 2021301022@skuniv.ac.kr</li>
                    </ul>
                </section>

                <h2>Hobby</h2>
                <section className="hobby" id="page2">
                    <div className="hobby-img">
                        <img src="X0wVa1pTlOH7lBXdoC1ZEIf6oJqO30GU2iodv1QBiWAiQ29sd9_-Q3q6OG2P-g4hSZ2kLuxH729GEZZ8dQqY4peDccv12jSWLaSk-vISZ5nOx2ZdJQK_nP0LDSH_b0wCX3cWNZe_qtxaMKH6PGN-1A.webp" alt="롤" />
                        <img src="kLc9ngwz_sViY6TAXEJmqZoYIontsLduJqZgiA_QzE09ZqzeXyZhxe035vTLzoNBUMj2LQRc1y-G-pUYdDKmKg.svg" alt="정글" />
                    </div>
                    <p>제 취미는 리그 오브 레전드라는 게임이며, 주 포지션은 정글입니다.</p>
                    <p>티어는 2024년 기준 마스터입니다.</p>
                    <p>배드민턴, 탁구, 노래도 좋아합니다.</p>
                </section>

                <section className="aboutme" id="page3">
                    <p>etc...</p>
                    <img src="virtuoso.svg" alt="istp" />
                    <p>MBTI : ISTP</p>
                    <p>개인적으로 연락하시고 싶으시면 010-5100-0410으로 연락주세요</p>
                    <p>Instagram : @02.___.jh DM 환영 카톡 환영</p>
                </section>
            </main>

            <footer className="footer">
                <hr />
                <p>© 2025. SKU LIKELION. All rights reserved.</p>
            </footer>
        </>
    )
}