import axios from 'axios';


const KEY = 'AIzaSyBwGGaR5GMJXUWjvXMSwttV6NbuwP9vQQQ'

export default axios.create({
   baseURL:"https://www.googleapis.com/youtube/v3",
   params:{
     part:'snippet',
     maxResults:'100',
     key:KEY
   }
})