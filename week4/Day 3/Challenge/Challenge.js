class Video{
    constructor(uploader,time, title  ){
      
        this.uploader=uploader;
        this.time=time;  
        this.title=title;
    }
    watch(){
        return `${this.uploader} watched all ${this.time}  of ${this.title}`
    }
}
const myVideo1 = new Video("AZIZA", 3600, "Learn JS");

console.log(myVideo1.watch())
const myVideo2 = new Video("Louis", 1800, "Funny Cats Compilation");

console.log(myVideo2.watch());

// 1. Tableau avec les données des 5 vidéos
const videosData = [
  { title: "JavaScript Basics", uploader: "Alice", time: 300 },
  { title: "Cooking Pasta", uploader: "Bob", time: 600 },
  { title: "Funny Cats", uploader: "Carol", time: 120 },
  { title: "Travel Vlog", uploader: "Dave", time: 900 },
  { title: "Yoga for Beginners", uploader: "Eve", time: 450 }
];

// 2. Instanciation des vidéos à partir du tableau
const videoInstances = videosData.map(
  data => new Video(data.uploader, data.time, data.title)
);

// 3. Affichage des résultats
videoInstances.forEach(video => {
  console.log(video.watch());
});