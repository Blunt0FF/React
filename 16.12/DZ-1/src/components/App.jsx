import './App.css'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import ParagraphsComponent from './ParagraphsComponent'
import ListsComponent from './ListsComponent'
import {useState} from 'react';

function App() {
  return (
    <div>
      <ImageComponent/>
      <VideoComponent/>
      <ParagraphsComponent/>
      <ListsComponent/>
      
    </div>
  )
}

export default App