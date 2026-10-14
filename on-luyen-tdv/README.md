# Ôn luyện thẻ thẩm định viên

Ứng dụng ôn thi thẻ thẩm định viên về giá (Pháp luật · BĐS · Động sản), tạo lại từ artifact cùng tên.

- `standalone/index.html`: bản HTML gốc của artifact (140 câu, không có sơ đồ cây), mở trực tiếp bằng trình duyệt. Bản này không được cập nhật nữa.
- `src/`: bản React (Vite), là bản được phát triển tiếp. Dữ liệu nằm ở `src/data/`, giao diện ở `src/*.jsx`.

## Tính năng bản React
- 214 câu trắc nghiệm (140 câu gốc + 74 câu mới), 28 bài tính, 24 bài học.
- **Sai nhiều**: xếp câu theo số lần làm sai, chỉ ra chủ đề cần củng cố, luyện lại 10 câu sai nhiều nhất.
- **Sơ đồ cây**: 8 sơ đồ khái niệm tự soạn + 1 sơ đồ toàn cảnh tự sinh từ bài học; mỗi nhánh hiện tiến độ và liên kết sang bài học / luyện tập.

## Thêm câu hỏi
Thêm một dòng `q(môn, 'mã chủ đề', 'câu hỏi', [các đáp án], vị trí đáp án đúng (từ 0), 'giải thích', 'nguồn');` vào cuối `src/data/questions.js`. Mã chủ đề trùng với mã bài học (ví dụ `luatgia`, `thunhap`). Thêm cuối file để id các câu cũ không đổi và tiến độ đã lưu không bị lệch.

```bash
npm install
npm run dev      # chạy thử
npm run build    # build ra dist/
```

Tiến độ làm bài lưu trong `localStorage` của trình duyệt (khóa `tdv-on-luyen-v1`, dùng chung với bản HTML gốc).
