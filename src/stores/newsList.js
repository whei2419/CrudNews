import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("newsList", {
  state: () => ({
    newsList: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur.",
        content:
          "tincidunt malesuada. Aenean egestas consectetur faucibus. Quisque vel urna mollis, accumsan metus in, vulputate augue. In hac habitasse platea dictumst. Nulla in tellus nisl. Phasellus dignissim libero eu dui facilisis posuere. Sed faucibus purus a sapien blandit, at dignissim ex volutpat. Nunc ullamcorper diam nec lacus fermentum convallis. Nunc convallis ante erat. Praesent feugiat purus eu dolor fermentum, quis vulputate ante bibendum. Aenean venenatis rhoncus quam, a ultricies dolor faucibus vel. Pellentesque mi purus, consequat consequat felis nec, commodo dapibus lorem. Etiam porta, augue sodales malesuada condimentum, nunc ligula maximus quam, eu vulputate lorem elit ut tortor. Sed fringilla justo ut libero congue, ut iaculis urna rutrum. Vestibulum nec est eget mauris suscipit maximus non non arcu",
        date: "2022-09-10",
      },
      {
        title: "Etiam ut tempus sapien. Fusce sit !",
        content:
          "posuere sapien accumsan, porta elit. Nullam bibendum nisl eget interdum volutpat. In in malesuada sem. Aenean commodo eros eget efficitur finibus. Morbi a dui vel turpis bibendum facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
        date: "2022-09-10",
      },
    ],
    toEdit: 0,
    newsDetails: {
      title: "",
      content: "",
      date: "",
    },
    newsTitle: "",
    newsContent: "",
    newsDate: "",
    showToast: false,
    message: "",
    bgColor: "",
  }),
  actions: {
    addNews(news) {
      this.newsList.push({
        title: news.title,
        content: news.content,
        date: news.date,
        id: this.length++,
        completed: false,
      });
      this.newsTitle = "";
      this.newsContent = "";
      this.newsDate = "";
      this.bgColor = "bg-success";
      this.message = "Tile: " + news.title + " successfully Added!";
      this.showToast = true;
      setTimeout(() => (this.showToast = false), 2000);
    },
    deleteNews(id) {
      this.newsList.splice(id, 1);
      this.bgColor = "bg-danger";
      this.message = " successfully Deleted!";
      this.showToast = true;
      setTimeout(() => (this.showToast = false), 2000);
    },
    getNewsId(id) {
      this.toEdit = id;
      this.newsDetails.title = this.newsList[id].title;
      this.newsDetails.content = this.newsList[id].content;
      this.newsDetails.date = this.newsList[id].date;
    },
    editNews(newsEditTitle, newsContent, newsDate) {
      this.newsList[this.toEdit].title = newsEditTitle;
      this.newsList[this.toEdit].content = newsContent;
      this.newsList[this.toEdit].date = newsDate;
      this.message = newsEditTitle + " successfully Edited!";
      this.bgColor = "bg-success";
      this.showToast = true;
      setTimeout(() => (this.showToast = false), 2000);
    },
  },
  getters: {
    checkIndex: (state) => {},
  },
});
