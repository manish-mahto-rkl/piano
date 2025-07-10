const allkeys = document.querySelectorAll(".piano .key");

allkeys.forEach((key,i)=>{
    
    key.onmouseover=()=>{
        const music_url="key"+(i+1)+".mp3";
        const audio=new Audio(music_url);
        audio.play();
        
    }
})

