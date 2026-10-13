# Ôn luyện thẻ thẩm định viên

Ứng dụng ôn thi thẻ thẩm định viên về giá (Pháp luật · BĐS · Động sản), tạo lại từ artifact cùng tên.

- `standalone/index.html`: bản HTML gốc của artifact, mở trực tiếp bằng trình duyệt.
- `src/`: bản React (Vite). Dữ liệu nằm ở `src/data/` (câu hỏi, bài tính, bài học); giao diện ở `src/*.jsx`.

```bash
npm install
npm run dev      # chạy thử
npm run build    # build ra dist/
```

Tiến độ làm bài lưu trong `localStorage` của trình duyệt (khóa `tdv-on-luyen-v1`, dùng chung với bản HTML gốc).
