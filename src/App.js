import React, {useState, useEffect} from 'react';
import './App.css';

import ChartListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
	const [chatlist, setChatList] = useState([
		{chatId: 1, title: 'fulano de tal ', image:'avatar.png'},
		{chatId: 2, title: 'Cigrano de tal ', image:'avatar.png'},
		{chatId: 3, title: 'Tico de tal ', image:'avatar.png'},
		{chatId: 4, title: 'fulano de tal ', image:'avatar.png'},
	]);
	const [activeChat, setActiveChat] = useState({});
	const [user, setUser] = useState({
		id: 1234, 
		avatar: '20210214_142508_HDR.jpg',
		name: 'Will smith'
	});
	const [showNewChat, setShowNewChat] = useState(false);
	const handleNewChat = () =>{
		setShowNewChat(true);
	}
	return (
	<div className="appWindow">
		<div className="sidebar">
			<NewChat
				chatlist={chatlist}
				user={user}
				show={showNewChat}
				setShow= {setShowNewChat}
			/>
			<header>
				<img className="header--avatar" src={user.avatar} alt="avatar"/>
				<div className="header--buttons">
					<div className="header--btn">
						<DonutLargeIcon style={{color: '#919191'}}/>
					</div>
					<div className="header--btn" onClick={handleNewChat}>
						<ChatIcon style={{color: '#919191'}}/>
					</div>
					<div className="header--btn">
						<MoreVertIcon style={{color: '#919191'}}/>
					</div>
				</div>
			</header>

			<div className="search">
				<div className="search--input">
				<SearchIcon style={{color: '#919191'}} fontSize="small"/>
				<input type="search" placeholder="Procurar"/>
				</div>
			</div>

			<div className="chatlist">
				{chatlist.map((item, key) => (
					<ChartListItem 
						key={key}
						data={item}
						active={activeChat.chatId === chatlist[key].chatId}
						onClick={()=>setActiveChat(chatlist[key])}
					/>
				))}
			</div>

		</div>
		<div className="contentarea">
			{activeChat.chatId !== undefined && 
				<ChatWindow 
					user={user}
				/>
			}
			{activeChat.chatId === undefined && 
				<ChatIntro/>
			}
		</div>
	</div>
	);
}