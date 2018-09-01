var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VideoChannel = /** @class */ (function () {
    function VideoChannel(channelTitle) {
        var _this = this;
        this.getChannelName = function () {
            return _this.channelTitle;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.channelTitle = channelTitle;
        this.subscribers = "1.3M";
        this.videosListCount = 60;
    }
    return VideoChannel;
}());
var BeardMeetsFood = new VideoChannel("BeardMeetsFood");
var channelName = BeardMeetsFood.getChannelName();
console.log("Channel: " + channelName);
var subscribersCount = BeardMeetsFood.getSubscribers();
console.log("Subscribers: " + subscribersCount);
var VideoPageDetails = /** @class */ (function (_super) {
    __extends(VideoPageDetails, _super);
    function VideoPageDetails(channelTitle, videoTitle, videoViews, likes, dislikes, publishedOn) {
        var _this = _super.call(this, channelTitle) || this;
        _this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        _this.getVideoViews = function () {
            return _this.videoViews;
        };
        _this.getVideolikes = function () {
            return _this.likes;
        };
        _this.getVideodislikes = function () {
            return _this.dislikes;
        };
        _this.getVideoPublishedOn = function () {
            return _this.publishedOn;
        };
        _this.getVideoDesc = function () {
            return _this.videoDescription;
        };
        _this.getComments = function () {
            return _this.comments;
        };
        _this.setComments = function (comment) {
            _this.comments = comment;
        };
        _this.videoTitle = videoTitle;
        _this.videoViews = videoViews;
        _this.likes = likes;
        _this.dislikes = dislikes;
        _this.publishedOn = publishedOn;
        _this.videoDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tincidunt mi ullamcorper tristique. Morbi eleifend vulputate lorem quis placerat. Quisque quis felis eleifend, hendrerit diam eget, condimentum orci. Nulla eu sapien velit. Suspendisse a ultrices orci. Vivamus vel leo accumsan, tincidunt arcu ut, iaculis nibh. Nullam eget metus at metus varius porta. Fusce consequat nulla vitae ultrices eleifend. Donec consequat eu est ut efficitur.";
        return _this;
    }
    return VideoPageDetails;
}(VideoChannel));
var videoPageContents = new VideoPageDetails("BeardMeetsFood", "THE BIGGEST CHINESE MUNCH BOX IN THE UNIVERSE | BeardMeatsFood", 500000, 25000, 500, "31st of Auggust 2018");
var videoName = videoPageContents.getVideoTitle();
var videoChannelName = videoPageContents.getChannelName();
var videoViewsDisplay = videoPageContents.getVideoViews();
var videoLikesDisplay = videoPageContents.getVideolikes();
var videoDislikesDisplay = videoPageContents.getVideodislikes();
var videoPublishedOnDate = videoPageContents.getVideoPublishedOn();
var videoDescriptionDisplay = videoPageContents.getVideoDesc();
videoPageContents.setComments("Nice Video! Appreciate You work!!");
var videoComments = videoPageContents.getComments();
console.log("Video Title: " + videoName);
console.log("Video Channel: " + videoChannelName);
console.log("Views: " + videoViewsDisplay);
console.log("Likes: " + videoLikesDisplay);
console.log("Dislikes: " + videoDislikesDisplay);
console.log("Published On: " + videoPublishedOnDate);
console.log("Description: " + videoDescriptionDisplay);
console.log("Comments: " + videoComments);
