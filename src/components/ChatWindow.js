import React, {useState, useEffect, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import MessageItem from './MessageItem';
export default ({user}) =>{
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition()
    }

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
         {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
        {author: 123, body: 'Hello Word '},
        {author: 123, body: 'Hello Word !'},
        {author: 1234, body: 'Hello Word !!! '},
    ]);
    // Colocando para aparece sempre a ultima msg
    useEffect(() =>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) =>{
        setText(text+ emojiObject.emoji);
    }
    const handleOpenEmoji = () =>{
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () =>{
        setEmojiOpen(false);
    }
    const handleMicClick = ()=>{
        if(recognition !== null){
            recognition.onstart = () =>{
                setListening(true);
            }
            recognition.onend = () =>{
                setListening(false);
            }
            recognition.onresult = (e) =>{
                setText( e.results[0][0].transcript);
            }
            recognition.start();
        }
    }
    const handleSendClick = () => {

    }
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="avatar.png" alt=""/>
                    <div className="chatWindow--name">Will Smith</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>

            </div>
            
            <div ref={body} className="chatWindow--body">
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiarea" style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                />
            </div>
            
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div 
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40:0}}
                    >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <EmojiEmotionsIcon style={{color: emojiOpen?'#009688':'#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input className="chatWindow--input" type="text" placeholder="Digite uma mensaem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                    <div className="chatWindow--btn"
                        onClick={handleMicClick}
                    >
                        <MicIcon style={{color: listening ? '#126ece' :'#919191'}}/>
                    </div>
                    }
                    {text !== '' &&
                    <div className="chatWindow--btn"
                        onClick={handleSendClick}
                    >
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    );
}