// 페이지 로드 시 이전 상태 복원
    document.addEventListener("DOMContentLoaded", (event) => {
      const buckets = document.querySelectorAll(".bucket");
      buckets.forEach((bucket, index) => {
        // 로컬 스토리지에서 상태 읽기
        const isDone = localStorage.getItem("bucket" + index) === "done";
        if (isDone) {
          bucket.classList.add("done");
        }
      });
    });

    // 버킷 리스트 클릭 이벤트
    const buckets = document.querySelectorAll(".bucket");
    buckets.forEach((bucket, index) => {
      bucket.addEventListener("click", function () {
        // 클래스 토글
        bucket.classList.toggle("done");
        alert("🔥👊🏻!!!!뿌셔뿌셔!!!!👊🏻🔥")

        // 로컬 스토리지에 상태 저장
        if (bucket.classList.contains("done")) {
          localStorage.setItem("bucket" + index, "done");
        } else {
          localStorage.setItem("bucket" + index, "");
        }
      });
    });
