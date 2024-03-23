import React from 'react';
import '../wrap/scss/Footer.scss'

export default function FooterComponent(){
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer-top">
                </div>
                <div className="footer-middle">
                </div>
                <div className="footer-bottom">
                    <ul>
                        <li>
                            <div className="li-right">(주)카카오</div>
                            <div className="li-left">대표이사 홍은택</div>
                        </li>
                        <li>
                            <div className="li-right">주소</div>
                            <div className="li-left">제주특별자치도 제주시 첨단로 242</div>
                        </li>
                        <li>
                            <div className="li-right">사업자등록번호</div>
                            <div className="li-left"> 120-81-47521<a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208147521" class="link_info link_emph">등록정보확인</a></div>
                        </li>
                        <li>
                            <div className="li-right">통신판매업신고번호</div>
                            <div className="li-left">제2015 - 제주아라 - 0032호</div>
                        </li>
                        <li>
                            <div className="li-right">호스팅서비스사업자</div>
                            <div className="li-left">(주)카카오</div>
                        </li>
                        <li>
                            <div className="li-right">구매안전서비스</div>
                            <div className="li-left"><a href="https://st.kakaocdn.net/commerce_ui/static/kakao_certification_2023.jpg" class="link_info link_emph">신한은행 구매안전서비스 확인</a></div>
                        </li>
                        <li>
                            <div className="li-right">이메일</div>
                            <div className="li-left"><a href="mailto:friends.cs@kakaocorp.com" class="link_info ng-star-inserted">friends.cs@kakaocorp.com </a></div>
                        </li>
                        <li>
                            <div className="li-right">고객센터</div>
                            <div className="li-left">
                                <a class="link_info" href="tel:1577-6263 (통화료발생)">1577-6263 (통화료발생)</a>
                                <br/> 전화상담 (평일 09:00~18:00)
                                <br/> 카카오톡 상담 (평일 09:00~18:00)
                                <br/> ※ 점심시간 12:00 ~ 13:00/
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
