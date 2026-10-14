import { LES, MON } from './lessons.js';

/* Nút: { t: nội dung, h?: hash bài học, q?: mã chủ đề (để hiện tiến độ), k?: [nút con] } */
const n = (t, k, extra) => ({ t, k, ...extra });

export const TREES = [
  {
    id: 'luat',
    title: 'Luật Giá và thẩm định giá',
    root: n('Thẩm định giá (Luật Giá 2023, hiệu lực 01/07/2024)', [
      n('Bản chất', [n('Hoạt động TƯ VẤN xác định giá trị tài sản (Đ.4 k16)'), n('Khác "định giá": định giá là xác định GIÁ hàng hóa, dịch vụ (Đ.4 k11)')]),
      n('Hai loại hoạt động (Đ.40)', [n('Dịch vụ thẩm định giá: doanh nghiệp thẩm định giá, hợp đồng dân sự'), n('Thẩm định giá của Nhà nước: hội đồng thẩm định giá (Đ.59)')]),
      n('Ba nguyên tắc (Đ.41)', [n('Tuân thủ pháp luật và Chuẩn mực'), n('Độc lập, khách quan, trung thực'), n('Chịu trách nhiệm theo quy định pháp luật')]),
      n('Chuẩn mực (Đ.42)', [n('Do Bộ trưởng Bộ Tài chính ban hành'), n('11 chuẩn mực: 8 áp dụng chung + 3 cho tài sản cụ thể (doanh nghiệp, vô hình, BĐS)')]),
      n('Điều tiết giá (Đ.4 k8)', [n('Bình ổn giá'), n('Định giá'), n('Hiệp thương giá'), n('Kê khai giá, niêm yết giá, giá tham chiếu'), n('Kiểm tra yếu tố hình thành giá')]),
      n('Giá dịch vụ và tranh chấp', [n('Giá dịch vụ: hai bên thỏa thuận, bù đắp chi phí thực tế hợp lý (Đ.57)'), n('Tranh chấp: thương lượng, hòa giải → trọng tài thương mại → Tòa án (Đ.58)')]),
      n('Bình ổn giá: nhớ các nhóm hàng', [n('Xăng dầu thành phẩm, LPG'), n('Sữa trẻ em dưới 06 tuổi'), n('Thóc tẻ, gạo tẻ'), n('Phân đạm, DAP, NPK; thức ăn chăn nuôi, thủy sản'), n('Vắc-xin gia súc gia cầm; thuốc bảo vệ thực vật; thuốc thiết yếu')]),
    ], { h: 'hoc-luatgia', q: 'luatgia' }),
  },
  {
    id: 'nhanluc',
    title: 'Từ thẻ đến doanh nghiệp thẩm định giá',
    root: n('Nhân lực và doanh nghiệp thẩm định giá', [
      n('Thi cấp thẻ (Đ.44)', [n('Năng lực hành vi dân sự đầy đủ'), n('Bằng đại học trở lên'), n('Chứng chỉ nghiệp vụ TĐG (trừ CĐ chuyên ngành giá/TĐG)'), n('Hai lĩnh vực: tài sản / doanh nghiệp (thẻ doanh nghiệp được hành nghề cả hai)')], { h: 'hoc-tdv', q: 'tdv' }),
      n('Đăng ký hành nghề (Đ.45)', [n('Hợp đồng lao động với DN (trừ người đại diện theo pháp luật)'), n('36 tháng làm việc; 24 tháng nếu ĐH chuyên ngành giá/TĐG định hướng ứng dụng'), n('Cập nhật kiến thức (miễn nếu thẻ cấp dưới 01 năm)'), n('Không thuộc diện cấm: công chức; quân đội, công an...'), n('Không đăng ký đồng thời 2 doanh nghiệp')], { h: 'hoc-tdv' }),
      n('Thẩm định viên về giá (Đ.46)', [n('= có thẻ + đã đăng ký hành nghề + Bộ Tài chính thông báo')]),
      n('Quyền và hành vi cấm (Đ.47, Đ.7)', [n('Quyền: ký chứng thư, quan điểm độc lập, từ chối khi sai lĩnh vực / hồ sơ không tin cậy'), n('Cấm: ký với tư cách cá nhân, cho mượn thẻ, ký sai lĩnh vực, lập khống, thông đồng')]),
      n('Doanh nghiệp thẩm định giá', [
        n('Điều kiện (Đ.49)', [n('Chung: ít nhất 05 người có thẻ hành nghề tại DN'), n('TNHH 2TV+ / cổ phần: ≥ 02 thành viên/cổ đông có thẻ'), n('Thành viên là tổ chức: tổng vốn góp ≤ 35%'), n('Thành viên là thẩm định viên: > 50% vốn điều lệ')]),
        n('Người đại diện theo pháp luật (Đ.51)', [n('Là thẩm định viên tại DN, đủ 36 tháng'), n('Từng đại diện DN bị thu hồi: hạn chế 12 tháng (lần 1) / 60 tháng (lần 2)')]),
        n('Mất điều kiện (Đ.52)', [n('Báo cáo Bộ Tài chính trong 10 ngày'), n('Khắc phục tối đa 03 tháng')]),
        n('Đình chỉ (Đ.54 k1)', [n('Không đủ điều kiện 03 tháng liên tục'), n('Phát hành chứng thư do người không phải thẩm định viên ký')]),
        n('Thu hồi (Đ.54 k2)', [n('Kê khai gian lận hồ sơ'), n('Không phát hành chứng thư 12 tháng liên tục'), n('60 ngày sau đình chỉ không khắc phục'), n('Tự chấm dứt / bị thu hồi đăng ký doanh nghiệp')]),
        n('Nghĩa vụ (Đ.53)', [n('Kiểm soát chất lượng, bồi thường thiệt hại'), n('Mua bảo hiểm trách nhiệm nghề nghiệp hoặc trích lập dự phòng rủi ro'), n('Quản lý thẩm định viên, lưu trữ hồ sơ')]),
      ], { h: 'hoc-dntdg', q: 'dntdg' }),
    ]),
  },
  {
    id: 'hoso',
    title: 'Hội đồng, chứng thư và hồ sơ',
    root: n('Sản phẩm và chủ thể thẩm định giá', [
      n('Hội đồng thẩm định giá (Đ.60)', [n('Số lượng: tối thiểu 03 thành viên, có Chủ tịch'), n('Chuyên môn: ≥ 50% thành viên, gồm cả Chủ tịch, có chứng nhận chuyên môn'), n('Họp: có mặt ≥ 2/3; hội đồng 03 người phải đủ 03'), n('Biểu quyết: đa số; ngang phiếu thì bên Chủ tịch quyết định'), n('Thành viên không đồng ý: bảo lưu ý kiến')], { h: 'hoc-hdtdg', q: 'hdtdg' }),
      n('Báo cáo thẩm định giá', [n('Trình bày quá trình thẩm định, căn cứ lập chứng thư'), n('Thẩm định viên ký; người đại diện pháp luật PHÊ DUYỆT'), n('Dẫn chiếu nguồn số liệu; có thuyết minh, lập luận'), n('Không thể tách rời chứng thư')]),
      n('Chứng thư thẩm định giá', [n('Thông báo giá trị tài sản cho khách hàng'), n('Thẩm định viên ký; người đại diện (hoặc đứng đầu chi nhánh) ký và đóng dấu'), n('Hiệu lực tối đa 06 tháng'), n('Cập nhật Cơ sở dữ liệu quốc gia về giá'), n('Ủy quyền ký: người được ủy quyền phải là thẩm định viên tại DN'), n('Chỉ dùng đúng mục đích, đúng thông tin và số lượng tài sản')], { h: 'hoc-chungthu', q: 'chungthu' }),
      n('Hồ sơ thẩm định giá', [n('Lưu trữ tối thiểu 10 năm kể từ ngày phát hành chứng thư'), n('Gồm: báo cáo, chứng thư, hợp đồng, tài liệu tài sản và tài sản so sánh, biên bản khảo sát, ảnh')]),
    ]),
  },
  {
    id: 'cosogt',
    title: 'Cơ sở giá trị và thông tin',
    root: n('Cơ sở giá trị: nền tảng của thẩm định giá', [
      n('Giá trị thị trường', [n('Khoản tiền ƯỚC TÍNH, không phải giá bán thực tế'), n('Người sẵn sàng mua - bán; giao dịch khách quan; tiếp thị đầy đủ; không bị ép buộc')]),
      n('Giá trị thuê thị trường', [n('Ước tính để thuê một quyền lợi BĐS theo điều khoản thuê thích hợp')]),
      n('Giá trị đầu tư', [n('Với MỘT chủ sở hữu hoặc chủ sở hữu tiềm năng cụ thể; đo hiệu quả đầu tư')]),
      n('Giá trị bắt buộc phải bán', [n('Thời gian hạn chế, không tiếp thị đầy đủ')]),
      n('Giá trị ngang bằng', [n('Hai bên cụ thể xác định, phản ánh lợi ích tương ứng của hai bên')]),
      n('Giá trị hợp lý', [n('Theo pháp luật lập báo cáo tài chính và IFRS')]),
      n('Giả thiết (Đ.10)', [n('Giả thiết: thông tin hạn chế, chưa chắc chắn'), n('Giả thiết ĐẶC BIỆT: khác thực tế; phải thông báo và có đồng thuận bằng văn bản')]),
      n('Thu thập, phân tích thông tin', [n('≥ 03 tài sản so sánh, giao dịch trong vòng 24 tháng'), n('Điều chỉnh về thời điểm thẩm định giá trước'), n('Sử dụng tốt nhất và hiệu quả nhất: chỉ áp dụng cho BĐS'), n('Điều chỉnh thuần có dấu (+/−); gộp cộng giá trị tuyệt đối')], { h: 'hoc-thongtin', q: 'thongtin' }),
    ], { h: 'hoc-cosogt', q: 'cosogt' }),
  },
  {
    id: 'dn',
    title: 'Loại hình doanh nghiệp',
    root: n('Pháp luật doanh nghiệp', [
      n('TNHH một thành viên', [n('Có tư cách pháp nhân; trách nhiệm hữu hạn'), n('1 chủ sở hữu (cá nhân hoặc tổ chức); không phát hành cổ phần')]),
      n('TNHH hai thành viên trở lên', [n('Pháp nhân; trách nhiệm hữu hạn'), n('Số thành viên: 2 đến 50'), n('Không phát hành cổ phần')]),
      n('Công ty cổ phần', [n('Pháp nhân; trách nhiệm hữu hạn'), n('Tối thiểu 03 cổ đông, không hạn chế tối đa'), n('Vốn chia thành cổ phần bằng nhau; được phát hành chứng khoán'), n('Cổ đông sáng lập: hạn chế chuyển nhượng 3 năm')]),
      n('Công ty hợp danh', [n('Vẫn là pháp nhân'), n('≥ 02 thành viên hợp danh (cá nhân): trách nhiệm VÔ HẠN'), n('Thành viên góp vốn: trách nhiệm hữu hạn'), n('Không phát hành chứng khoán')]),
      n('Doanh nghiệp tư nhân', [n('KHÔNG có tư cách pháp nhân'), n('1 cá nhân làm chủ; trách nhiệm vô hạn'), n('Không phát hành chứng khoán')]),
      n('Khái niệm liên quan', [n('Vốn điều lệ: vốn góp hoặc cam kết góp, ghi trong Điều lệ'), n('Vốn pháp định: mức tối thiểu cho ngành đặc thù'), n('Phá sản: Luật Phá sản 2014, hiệu lực 01/01/2015')]),
    ], { h: 'hoc-phapluatdn', q: 'phapluatdn' }),
  },
  {
    id: 'bds',
    title: 'Bất động sản và thị trường',
    root: n('Thẩm định giá bất động sản', [
      n('Khái niệm (BLDS 2015, Đ.107 k1): 5 nhóm', [n('Đất đai'), n('Nhà, công trình xây dựng gắn liền với đất'), n('Tài sản gắn liền với đất, nhà, công trình xây dựng'), n('Các tài sản khác gắn liền với đất'), n('Tài sản khác theo quy định pháp luật')]),
      n('Tám đặc điểm', [n('Khan hiếm'), n('Cố định về vị trí'), n('Thanh khoản kém'), n('Lâu bền'), n('Giá trị lớn'), n('Khác biệt'), n('Thích ứng'), n('Ảnh hưởng lẫn nhau')]),
      n('Thị trường BĐS', [n('Không hoàn hảo, mang tính khu vực'), n('Cung cầu ít co giãn'), n('Chịu kiểm soát của Nhà nước'), n('Liên hệ với thị trường tài chính, tín dụng')]),
      n('Yếu tố ảnh hưởng giá', [n('Quan hệ cung cầu'), n('Yếu tố trực tiếp: tự nhiên, kinh tế, pháp lý'), n('Yếu tố khác: chính sách, quy hoạch, vĩ mô, xã hội')]),
      n('Phạm vi công việc', [n('Trao đổi với bên yêu cầu'), n('Lập kế hoạch'), n('Thu thập, phân tích thông tin'), n('Chọn và áp dụng phương pháp'), n('Xác định giá trị'), n('Lập báo cáo, chứng thư')]),
    ], { h: 'hoc-bds_tq', q: 'bds_tq' }),
  },
  {
    id: 'cachtc',
    title: 'Ba cách tiếp cận và thặng dư (BĐS)',
    root: n('Phương pháp thẩm định giá BĐS', [
      n('Thị trường: phương pháp so sánh', [
        n('5 bước', [n('Thu thập (≥ 03 tài sản, ≤ 24 tháng)'), n('Phân tích thông tin'), n('Điều chỉnh sự khác biệt'), n('Xác định mức giá chỉ dẫn'), n('Xác định giá trị tài sản thẩm định')]),
        n('Quy tắc điều chỉnh', [n('Lấy BĐS thẩm định làm chuẩn'), n('Pháp lý, điều kiện giao dịch trước; kinh tế - kỹ thuật sau'), n('Tỷ lệ = mục tiêu / so sánh − 1'), n('Mức giá chỉ dẫn lệch trung bình ≤ 15%')]),
        n('Chọn kết quả', [n('Gộp nhỏ nhất'), n('Số lần điều chỉnh ít nhất'), n('Biên độ một yếu tố nhỏ nhất'), n('Thuần nhỏ nhất'), n('Chất lượng ngang nhau: lấy bình quân')]),
        n('Chiết trừ', [n('Giá đất = giá bán cả BĐS − giá trị còn lại công trình')]),
      ], { h: 'hoc-sosanh', q: 'sosanh' }),
      n('Chi phí', [
        n('5 bước', [n('Giá đất (như đất trống, sử dụng tốt nhất)'), n('Chi phí xây lại công trình'), n('Tổng hao mòn'), n('Giá trị công trình = (2) − (3)'), n('Giá trị BĐS = (1) + (4)')]),
        n('Tái tạo và thay thế', [n('Tái tạo: giống hệt, mới 100%'), n('Thay thế: công dụng tương tự, vật liệu, công nghệ hiện đại'), n('Công trình mới: hai loại bằng nhau')]),
        n('Ba loại hao mòn', [n('Vật lý'), n('Chức năng'), n('Ngoại biên')]),
      ], { h: 'hoc-chiphi', q: 'chiphi' }),
      n('Thu nhập', [
        n('Vốn hóa trực tiếp', [n('V = I / R'), n('I = thu nhập tiềm năng − thất thu − chi phí hoạt động'), n('R = M × Rm + (1 − M) × Re')]),
        n('Dòng tiền chiết khấu', [n('V = Σ CFt / (1 + r)^t'), n('Giá trị cuối kỳ: Vn = CF(n+1) / (r − g), với g < r'), n('Dòng tiền sau thuế đi với r sau thuế')]),
      ], { h: 'hoc-thunhap', q: 'thunhap' }),
      n('Thặng dư (BĐS có tiềm năng phát triển)', [n('V = doanh thu phát triển − chi phí phát triển'), n('Chi phí phát triển gồm cả lợi nhuận nhà đầu tư'), n('Nhiều năm: chiết khấu đúng năm phát sinh'), n('Giá đất là ẩn: đặt X rồi giải phương trình')], { h: 'hoc-thangdu', q: 'thangdu' }),
    ]),
  },
  {
    id: 'dongsan',
    title: 'Máy thiết bị và tài sản vô hình',
    root: n('Thẩm định giá động sản (Môn 3)', [
      n('Máy thiết bị: cách tiếp cận chi phí', [n('Giá trị = chi phí tái tạo / thay thế − hao mòn'), n('Lợi nhuận NSX: ≥ 3 năm, ≥ 3 doanh nghiệp, BCTC kiểm toán'), n('Máy nhập khẩu: CIF × tỷ giá + thuế nhập khẩu + vận chuyển, lắp đặt, chạy thử'), n('Phương pháp tổng cộng: cộng giá trị các bộ phận')], { h: 'hoc-may_cp', q: 'may_cp' }),
      n('Máy thiết bị: hao mòn', [
        n('Ba loại', [n('Vật lý'), n('Chức năng (chi phí vốn cao / chi phí vận hành cao)'), n('Ngoại biên (thường không khắc phục được)')]),
        n('Ba kỹ thuật', [n('So sánh (≥ 02 tài sản, ≤ 01 năm)'), n('Tuổi đời: hiệu quả / kinh tế'), n('Tổng cộng')]),
        n('Ba khái niệm tuổi đời', [n('Thực tế'), n('Hiệu quả'), n('Kinh tế')]),
        n('Khấu hao nhanh: hệ số 1,5 / 2 / 2,5')
      ], { h: 'hoc-may_hm', q: 'may_hm' }),
      n('Máy thiết bị: thị trường và thu nhập', [n('Thị trường: điều chỉnh điều khoản thanh toán về hiện tại trước'), n('Giá trị thu hồi nhân (1 − thuế)'), n('WACC = E% × re + D% × rd × (1 − t)'), n('NPV > 0 ⇔ IRR > r')], { h: 'hoc-may_tn', q: 'may_tn' }),
      n('Tài sản vô hình', [
        n('Năm đặc điểm', [n('Không có hình thái vật chất'), n('Nhận biết được, có bằng chứng tồn tại'), n('Pháp luật công nhận, bảo vệ'), n('Có khả năng tạo thu nhập'), n('Giá trị định lượng được')]),
        n('Cách tiếp cận thu nhập', [n('Tiền sử dụng tiết kiệm được'), n('Lợi nhuận vượt trội'), n('Thu nhập tăng thêm')]),
        n('Cách tiếp cận chi phí: thay thế / tái tạo, trừ hao mòn'),
        n('Cách tiếp cận thị trường: so sánh giao dịch tương tự'),
      ], { h: 'hoc-tsvh', q: 'tsvh' }),
    ]),
  },
];

/* Cây toàn cảnh: Môn → bài học → các ý "Nhớ nhanh", sinh tự động từ dữ liệu bài học */
export const OVERVIEW = {
  id: 'toancanh',
  title: 'Toàn cảnh 3 môn (tự động)',
  root: n('Ôn thi thẻ thẩm định viên về giá',
    [1, 2, 3].map((m) =>
      n(`${MON[m].n}: ${MON[m].t}`,
        LES.filter((l) => l.m === m).map((l) => n(l.title.replace(/:.*/, ''), (l.k || []).map((x) => n(x)), { h: `hoc-${l.t}`, q: l.t })),
      ),
    ),
  ),
};
