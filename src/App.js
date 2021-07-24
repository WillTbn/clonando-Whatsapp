import React, {useState, useEffect} from 'react';
import './App.css';

import ChartListItem from './components/ChatListItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
	const [chatlist, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
	return (
	<div className="appWindow">
		<div className="sidebar">
			<header>
				<img className="header--avatar" src="avatar.png" alt="avatar"/>
				<div className="header--buttons">
					<div className="header--btn">
						<DonutLargeIcon style={{color: '#919191'}}/>
					</div>
					<div className="header--btn">
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
					/>
				))}
			</div>

		</div>
		<div className="contentarea">
			Ola Mundo ! -contentarea
		</div>
	</div>
	);
}