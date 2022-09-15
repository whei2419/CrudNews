<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="bi bi-pencil-square"></i> Edit News
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submitEditNews">
          <div class="modal-body">
            <div class="mb-3">
              <label for="newsTitle" class="form-label">News Title</label>
              <input
                v-model="newsListData.newsDetails.title"
                type="text"
                class="form-control"
                id="newsTitle"
                name="newsEditTitle"
                required
              />
            </div>
            <div class="mb-3">
              <label for="newsContent" class="form-label">News Content</label>
              <textarea
                v-model="newsListData.newsDetails.content"
                type="text"
                class="form-control"
                id="newsContent"
                name="newsContent"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="newsContent" class="form-label">News Date</label>
              <input
                v-model="newsListData.newsDetails.date"
                type="date"
                class="form-control"
                id="newsDate"
                name="newsDate"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success shadow-sm"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="bi bi-box-arrow-down"></i> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/newsList";
const newsListData = useCounterStore();
const submitEditNews = (event) => {
  const { newsEditTitle, newsContent, newsDate } = Object.fromEntries(
    new FormData(event.target)
  );
  newsListData.editNews(newsEditTitle, newsContent, newsDate);
};
</script>

<style scoped></style>
