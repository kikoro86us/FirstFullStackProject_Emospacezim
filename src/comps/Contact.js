// 컨택트에는 감성터진으로 연락을 할 수 있는 연락방법이랑 라이트 쳇을 추가한다

// 전화번호 010-9247-9289 (편집장) / 070-8745-8199 (사무실)
// 카카오톡 emospacezim
// 이메일 emospace_zim@naver.com


import contactbg from '../vids/ContactBG.webm'
import React, { Component } from 'react'
import Testmap from './GoogleMaps/Testmap'

class Contact extends Component {
    render() {
        return (
            <div className='contactdiv' id='contact'>
                <div className='content'>
                    <div className='overlay'>
                        <p id='titlecontact'>Contact</p>
                        <div id='contactbody'>
                            <p className='cinfo'>📞 010-9247-9289 / 070-8745-8199 (office)</p>
                            <p className='cinfo'>KakaoTalk 💬 emospacezim</p>
                            <p className='cinfo'>📧 emospace_zim@naver.com</p>
                            <div id='mapmapmap'><Testmap /></div>
                        </div>
                    </div>
                </div>
                <video id='contactvid' autoPlay muted loop className="css-background-video" data-state="play">
                        <source src={contactbg} type="video/webm"/>
                </video>
                 
            </div>
        );
    }
}

export default Contact;