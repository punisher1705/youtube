class VideoChannel {
    protected channelTitle: string;
    protected subscribers: string;
    protected videosListCount: number;
    constructor(channelTitle:string) {
        this.channelTitle = channelTitle;
        this.subscribers = "1.3M";
        this.videosListCount = 60;
    }
    
    getChannelName = () => {
        return this.channelTitle;
    }
    
    getSubscribers = () => {
        return this.subscribers;
    }
}
let BeardMeetsFood = new VideoChannel("BeardMeetsFood");
let channelName = BeardMeetsFood.getChannelName();
console.log(`Channel: ${channelName}`);
let subscribersCount = BeardMeetsFood.getSubscribers();
console.log(`Subscribers: ${subscribersCount}`);

class VideoPageDetails extends VideoChannel{
    protected videoTitle:string;
    protected videoViews:number;
    protected likes:number;
    protected dislikes:number;
    protected publishedOn: string;
    protected videoDescription: string;
    protected comments:string;
    //I have set stictPropertyInitialization to false still i am getting this error,Please do let me know where i am going wrong in that!
    constructor (channelTitle:string, videoTitle:string, videoViews:number, likes:number, dislikes:number, publishedOn:string) {
        super(channelTitle);
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.likes = likes;
        this.dislikes = dislikes;
        this.publishedOn = publishedOn;
        this.videoDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tincidunt mi ullamcorper tristique. Morbi eleifend vulputate lorem quis placerat. Quisque quis felis eleifend, hendrerit diam eget, condimentum orci. Nulla eu sapien velit. Suspendisse a ultrices orci. Vivamus vel leo accumsan, tincidunt arcu ut, iaculis nibh. Nullam eget metus at metus varius porta. Fusce consequat nulla vitae ultrices eleifend. Donec consequat eu est ut efficitur.`;
    }
    getVideoTitle = () => {
        return this.videoTitle;
    }
    getVideoViews = () => {
        return this.videoViews;
    }
    getVideolikes = () => {
        return this.likes;
    }
    getVideodislikes = () => {
        return this.dislikes;
    }
    getVideoPublishedOn = () => {
        return this.publishedOn;
    }
    getVideoDesc = () => {
        return this.videoDescription;
    }
    getComments = () => {
        return this.comments;
    }
    setComments = (comment:string) => {
        this.comments = comment;
    }
}
let videoPageContents = new VideoPageDetails("BeardMeetsFood", "THE BIGGEST CHINESE MUNCH BOX IN THE UNIVERSE | BeardMeatsFood", 500000, 25000, 500, "31st of Auggust 2018");
let videoName = videoPageContents.getVideoTitle();
let videoChannelName = videoPageContents.getChannelName();
let videoViewsDisplay = videoPageContents.getVideoViews();
let videoLikesDisplay = videoPageContents.getVideolikes();
let videoDislikesDisplay = videoPageContents.getVideodislikes();
let videoPublishedOnDate = videoPageContents.getVideoPublishedOn();
let videoDescriptionDisplay = videoPageContents.getVideoDesc();
videoPageContents.setComments("Nice Video! Appreciate You work!!");
let videoComments = videoPageContents.getComments();
console.log(`Video Title: ${videoName}`);
console.log(`Video Channel: ${videoChannelName}`);
console.log(`Views: ${videoViewsDisplay}`);
console.log(`Likes: ${videoLikesDisplay}`);
console.log(`Dislikes: ${videoDislikesDisplay}`);
console.log(`Published On: ${videoPublishedOnDate}`);
console.log(`Description: ${videoDescriptionDisplay}`);
console.log(`Comments: ${videoComments}`);