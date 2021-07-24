import React from 'react';
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="avatar.png" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Will Smith</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?Tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}