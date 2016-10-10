import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';

class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleNotebooks = this.handleNotebooks.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleAddNote(e){
    const defaultNote = {"note": { "title": "", "body": "", "notebook_id": "1"}};
    this.props.createNote(defaultNote);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.notes.length > this.props.notes.length){
      this.props.switchNote(nextProps.notes[0]);
    }
  }

  handleNotes(e){
    //
  }

  handleNotebooks(e){
    //
  }

  handleTags(e){
    //
  }

  handleLogout(e){
    this.props.logout();
  }

  render (){
    return(
      <div className="sidebar-container">
        <div className="sidebar-logo"></div>

        <div className="newnote-button-container">
          <button className="sidebar-newnote-button" onClick={this.handleAddNote}></button>
          <div className="newnote-button-tooltip">NEW NOTE</div>
        </div>

        <div className="notes-button-container">
          <button className="sidebar-notes-button" onClick={this.handleNotes}></button>
          <div className="notes-button-tooltip">ALL NOTES</div>
        </div>

        <div className="notebooks-button-container">
          <button className="sidebar-notebooks-button" onClick={this.handleNotebooks}></button>
          <div className="notebooks-button-tooltip">NOTEBOOKS</div>
        </div>

        <div className="tags-button-container">
          <button className="sidebar-tags-button" onClick={this.handleTags}></button>
          <div className="tags-button-tooltip">TAGS</div>
        </div>

        <div className="logout-button-container">
          <button className="sidebar-logout-button" onClick={this.handleLogout}></button>
          <div className="logout-button-tooltip">LOG OUT</div>
        </div>

      </div>
    );
  }
}

// <div className="avatar-image-container">
//   <img src={this.props.user.avatar_url}></img>
//   <div></div>
// </div>


export default SideBar;