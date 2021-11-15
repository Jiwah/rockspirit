import { useState } from 'react';
import React from 'react';


const SettingContainer = () => {
  const [settingOpen, setSettingOpen] = useState(false)
  const settingClose = () => {
    setSettingOpen(!settingOpen)
  }
  return (
    <>
    <button
      onClick={settingClose} 
      className="settingBtn">
      <img src="./settings.png" alt="" className="settingImg"/>
    </button>
    { settingOpen && <Setting> {settingClose} </Setting> }
    </>
  )
}


const Setting = ({settingClose}) => {
  return (
    <div className = "settingBox">
      <button 
        onClick={settingClose}
        className="settingBtn">
          <img src="./settings.png" alt="" className="settingImg"/>
        </button>
      &nbsp;<SettingMenu />
      
    </div>
  )
}

const SettingMenu =() => {

  return (
    <div className="settingBox">
      <img src="./pen.png" alt="" className="menuImg"/>
      <button className="settingMenu">Change Your Diary</button>
      <img src="./bin.png" alt="" className="menuImg"/>
      <button className="settingMenu">Delete Your Diary</button>
      <img src="./plus.png" alt="" className="menuImg"/>
      <button className="settingMenu">Add Your Diary</button>
    </div>

  )
}


const User = ({ user }) =>{
    return (
      <div className="User">
        <img src="./folder.png" alt="" className="folderImg"/>
        <br />
        {user.groupName}
      </div>
    )
  }
  
  const UserList = () => {
    const users = [
      {
        id: 1,
        User: ['yosoynancy@naver.com', 'sj.min621@gmail.com'],
        groupName: "Group1"
      },
      {
        id: 2,
        User: ['sj.min621@gmail.com', 'yosoynancy@naver.com'],
        groupName: "gggg"
      }
    ]

    return (
      <div className="UserList">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    )
  }

  function GroupBox() {
    return (
      <>
      <button className="homeBtn">Home</button>
      <div className="container">
        <header className="header">
          <span>ONEUL's</span> 
          <header className="headerRight">X</header>
          </header>
          <SettingContainer />
          <UserList />
      </div>
      </>
    );
  }
  
  export default GroupBox;