<template>
  <Transition name="toast">
    <Toast v-if="newsListData.showToast" />
  </Transition>
  <nav class="navbar">
    <div class="container-fluid d-flex justify-content-center">
      <span class="navbar-brand mb-0 h1 fs-sm-3"
        ><i class="bi bi-newspaper"></i> East Vantage News</span
      >
    </div>
  </nav>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <h1></h1>
        <div
          class="news-List-Container"
          v-for="(news, index) in newsListData.newsList"
          :key="index"
        >
          <div class="card news-card mb-2">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h1 class="card-title">{{ news.title }}</h1>
                <div>
                  <button
                    @click="newsListData.deleteNews(index)"
                    class="btn btn-sm mr-2 rounded-0"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                  <button
                    @click="newsListData.getNewsId(index)"
                    type="button"
                    class="btn btn-sm rounded-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="bi bi-pencil-square"></i> Edit
                  </button>
                </div>
                <EditNews></EditNews>
              </div>
              <hr />
              <p class="date">
                <small
                  ><i class="bi bi-calendar4-week"></i> {{ news.date }}</small
                >
              </p>
              <p>{{ news.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              <i class="bi bi-newspaper"> </i> Add News
            </h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitNews">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="newsTitle" class="form-label">News Title *</label>
                  <input
                    v-model="newsListData.newsTitle"
                    type="text"
                    class="form-control"
                    id="newsTitle"
                    ref="title"
                    name="newsTitle"
                    placeholder="Input new title"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="newsContent" class="form-label"
                    >News Content *</label
                  >
                  <textarea
                    v-model="newsListData.newsContent"
                    type="text"
                    class="form-control"
                    id="newsContent"
                    name="newsContent"
                    placeholder="input new content"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="newsContent" class="form-label"
                    >News Date *</label
                  >
                  <input
                    v-model="newsListData.newsDate"
                    type="date"
                    class="form-control"
                    id="newsContent"
                    name="newsDate"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">
                  <i class="bi bi-file-earmark-plus"></i> Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/newsList";
import EditNews from "./EditNews.vue";
import Toast from "./Toast.vue";

const newNews = {
  title: "",
  content: "",
  date: "",
};
const newsListData = useCounterStore();
const submitNews = (event) => {
  const { newsTitle, newsContent, newsDate } = Object.fromEntries(
    new FormData(event.target)
  );
  newNews.title = newsTitle;
  newNews.content = newsContent;
  newNews.date = newsDate;
  newsListData.addNews(newNews);
};
</script>
<style scoped>
/* ennter classes */
.toast-enter-from {
  opacity: 0;
  transition: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transition: translateY(0);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.news-card {
  background: #f4ffd5;
  border: 1px solid #cbcbcb;
  border-radius: 7px;
}
.card-title {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  padding: 0;

  color: #2237a9;
}
.navbar {
  background: #d95307;
  color: #fff;
}
.navbar-brand {
  font-family: "Jacques Francois", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 47px;
  color: #ffff;
  text-align: center;
}
.date {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  color: #ec0000;
  margin-bottom: 10px;
}
hr {
  margin: 5px 0;
}
</style>
