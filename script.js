const downloadBtn = document.querySelector(".Dowload-btn")
const filelink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

const initTimer =() => {
   let timer = downloadBtn.dataset.timer;
 downloadBtn.classList.add("timer");
 downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`

 const initCounter = setInterval(() => {
    if (timer >0){
     timer--;
      return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`
    }
    // console.log("cleared");
    clearInterval(initCounter);
    location.href = filelink;
    downloadBtn.textcontent =  "your file is downloading....";
    setTimeout(() => {
        downloadBtn.classList.replace("timer", "disable-timer")
        downloadBtn.innerHTML =` <span class=" icon material-symbols-rounded">vertical_align</span>
    <span class="text">Download files again</span>`;
    },3000)

 },1000)
}


downloadBtn.addEventListener("click",initTimer)