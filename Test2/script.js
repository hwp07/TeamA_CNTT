function showToast(
  type = "info",
  message = "Hello",
  subMessage = "",
  duration = 4000,
) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = "toast toast-" + type;

  toast.innerHTML = `
    <div class="toast-content">
      <i class="${getIcon(type)}"></i>
      <div class="toast-text">
        <div class="toast-title">${message}</div>
        <div class="toast-sub">${subMessage}</div>
      </div>
    </div>
    <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
  `;

  container.appendChild(toast);

  // Ẩn toast
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Set icon
function getIcon(type) {
  if (type === "success") return "fa-regular fa-circle-check";
  if (type === "error") return "fa-regular fa-circle-xmark";
  if (type === "warning") return "fa-solid fa-triangle-exclamation";
  return "fa-solid fa-circle-info";
}

// Gắn sự kiện
document.querySelector(".btn-success").onclick = () => {
  showToast("success", "Thành công!", "Bài viết đã được lưu thành công.", 4000);
};

document.querySelector(".btn-error").onclick = () => {
  showToast(
    "error",
    "Có lỗi xảy ra",
    "Không thể kết nối với máy chủ. Vui lòng thử lại!",
    4000,
  );
};

document.querySelector(".btn-info").onclick = () => {
  showToast("info", "Thông tin", "Hệ thống sẽ bảo trì 23:00 tối nay.", 4000);
};

document.querySelector(".btn-warning").onclick = () => {
  showToast(
    "warning",
    "Cảnh báo",
    "Phiên đăng nhập sắp hết hạn sau 5 phút",
    4000,
  );
};
