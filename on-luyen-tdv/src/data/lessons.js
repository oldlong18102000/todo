// Bài học. t = mã chủ đề (khớp với câu hỏi và bài tính). k = các ý cần nhớ.
const MON={1:{n:'Môn 1',t:'Pháp luật và nguyên lý',d:'Luật Giá 2023, doanh nghiệp, thuế, hợp đồng, sở hữu trí tuệ, cơ sở giá trị, toán ứng dụng'},2:{n:'Môn 2',t:'Thẩm định giá bất động sản',d:'Ba cách tiếp cận, phương pháp thặng dư, bài tính và đề 2017'},3:{n:'Môn 3',t:'Động sản: máy, thiết bị, tài sản vô hình',d:'Hao mòn, cách tiếp cận chi phí, thu nhập, thị trường; tài sản vô hình'}};
const LES=[];
const L=(m,t,title,sum,html,k)=>LES.push({m,t,title,sum,html,k});

/* ====== MÔN 1 ====== */
L(1,'luatgia','Luật Giá 2023: khái niệm, nguyên tắc, điều tiết giá','Hiệu lực 01/07/2024. Thẩm định giá là tư vấn, khác định giá.',`
<p>Luật Giá 2023 có hiệu lực từ <b>01/07/2024</b>; hướng dẫn bởi Nghị định <b>85/2024/NĐ-CP</b> (chi tiết Luật) và <b>78/2024/NĐ-CP</b> (về thẩm định giá). Phần thẩm định giá của Luật nằm ở Điều 40–66.</p>
<h4>Khái niệm cần phân biệt</h4>
<div class="tw"><table><tr><th>Khái niệm</th><th>Nội dung (Điều 4)</th></tr>
<tr><td>Thẩm định giá (k16)</td><td>Hoạt động <b>tư vấn</b> xác định giá trị tài sản tại một địa điểm, thời điểm, cho một mục đích nhất định, do doanh nghiệp thẩm định giá hoặc hội đồng thẩm định giá thực hiện theo Chuẩn mực</td></tr>
<tr><td>Định giá (k11)</td><td>Cơ quan nhà nước có thẩm quyền hoặc tổ chức, cá nhân kinh doanh xác định <b>giá</b> hàng hóa, dịch vụ</td></tr>
<tr><td>Điều tiết giá (k8)</td><td>Bình ổn giá; định giá; hiệp thương giá; kê khai giá, niêm yết giá, giá tham chiếu; kiểm tra yếu tố hình thành giá</td></tr></table></div>
<h4>Hai loại hoạt động thẩm định giá (Điều 40)</h4>
<ul><li><b>Dịch vụ thẩm định giá</b>: doanh nghiệp thẩm định giá, hợp đồng dân sự.</li><li><b>Thẩm định giá của Nhà nước</b>: hội đồng thẩm định giá, theo quyết định của người có thẩm quyền (Điều 59).</li></ul>
<h4>Nguyên tắc thẩm định giá (Điều 41): ba ý</h4>
<p>Tuân thủ pháp luật và Chuẩn mực; độc lập, khách quan, trung thực; chịu trách nhiệm theo quy định của pháp luật. Chuẩn mực do <b>Bộ trưởng Bộ Tài chính</b> ban hành (Điều 42).</p>
<h4>Quản lý nhà nước và hành vi cấm</h4>
<p>Chính phủ thống nhất quản lý; <b>Bộ Tài chính</b> chịu trách nhiệm trước Chính phủ; bộ quản lý trong lĩnh vực của mình; UBND cấp tỉnh ở địa phương. Điều 7 cấm riêng từng nhóm: cơ quan quản lý, tổ chức cá nhân, doanh nghiệp thẩm định giá, thẩm định viên, hội đồng và thành viên, khách hàng và bên thứ ba. Chung cho các nhóm: <b>mua chuộc, hối lộ, cấu kết làm sai lệch giá trị</b>, thông đồng về giá.</p>
<p>Danh mục <b>bình ổn giá</b> (Phụ lục 1): xăng dầu thành phẩm; LPG; sữa trẻ em dưới 06 tuổi; thóc tẻ, gạo tẻ; phân đạm, DAP, NPK; thức ăn chăn nuôi, thủy sản; vắc-xin phòng bệnh gia súc, gia cầm; thuốc bảo vệ thực vật; thuốc thiết yếu tại cơ sở khám chữa bệnh.</p>
<p>Giá dịch vụ thẩm định giá do hai bên thỏa thuận trong hợp đồng, bảo đảm <b>bù đắp chi phí thực tế hợp lý</b> (Điều 57). Tranh chấp: thương lượng/hòa giải, trọng tài thương mại, Tòa án (Điều 58).</p>`,
['Luật Giá 2023 hiệu lực 01/07/2024','Thẩm định giá = tư vấn; định giá = xác định giá','Điều 41: 3 nguyên tắc','Chuẩn mực do Bộ trưởng BTC ban hành','Danh mục bình ổn giá: nhớ sữa trẻ em dưới 06 tuổi']);

L(1,'tdv','Thẻ thẩm định viên và hành nghề','Dự thi (Điều 44) khác đăng ký hành nghề (Điều 45).',`
<h4>Dự thi cấp thẻ (Điều 44 k2)</h4>
<ul><li>Năng lực hành vi dân sự đầy đủ.</li><li>Bằng đại học trở lên.</li><li>Chứng chỉ đào tạo nghiệp vụ thẩm định giá phù hợp lĩnh vực, <b>trừ</b> người có bằng cao đẳng trở lên chuyên ngành giá hoặc thẩm định giá.</li></ul>
<p>Thẻ có hai lĩnh vực: <b>thẩm định giá tài sản</b> và <b>thẩm định giá doanh nghiệp</b>. Người có thẻ lĩnh vực doanh nghiệp được hành nghề cả hai; thẻ tài sản không được thẩm định giá doanh nghiệp.</p>
<h4>Đăng ký hành nghề (Điều 45 k1)</h4>
<div class="tw"><table><tr><th>Điều kiện</th><th>Chi tiết</th></tr>
<tr><td>a</td><td>Năng lực hành vi dân sự đầy đủ</td></tr>
<tr><td>b</td><td>Hợp đồng lao động còn hiệu lực với doanh nghiệp (trừ người đại diện theo pháp luật)</td></tr>
<tr><td>c</td><td>Làm việc tại DN thẩm định giá, cơ quan quản lý giá và thẩm định giá với trình độ đại học trở lên <b>đủ 36 tháng</b>; <b>24 tháng</b> nếu đại học chuyên ngành giá/thẩm định giá theo chương trình định hướng ứng dụng</td></tr>
<tr><td>d</td><td>Đã cập nhật kiến thức (trừ thẻ cấp dưới 01 năm)</td></tr>
<tr><td>đ</td><td>Không thuộc diện không được hành nghề</td></tr></table></div>
<h4>Ai không được hành nghề (k2)</h4>
<p>Cán bộ, công chức; sĩ quan, quân nhân chuyên nghiệp, công nhân quốc phòng; sĩ quan, hạ sĩ quan nghiệp vụ, chuyên môn kỹ thuật, công nhân công an; người đang bị cấm hành nghề; đang bị khởi tố, truy tố, xét xử; đã bị kết án một số tội kinh tế, chức vụ chưa xóa án tích; người đang bị tước thẻ…</p>
<p>Đăng ký với Bộ Tài chính <b>thông qua doanh nghiệp thẩm định giá</b>; <b>không</b> được đăng ký đồng thời ở hai doanh nghiệp. Thẩm định viên về giá (Điều 46) = có thẻ + đã đăng ký hành nghề + Bộ Tài chính thông báo.</p>
<h4>Quyền, nghĩa vụ, hành vi cấm (Điều 47, Điều 7 k4)</h4>
<p>Quyền: ký chứng thư, báo cáo; quan điểm độc lập; yêu cầu khách hàng phối hợp; <b>từ chối</b> khi không đúng lĩnh vực hoặc hồ sơ không đủ, không tin cậy. Cấm: thông tin sai về trình độ; giả mạo, cho thuê, cho mượn thẻ; lập chứng thư với tư cách cá nhân; ký sai lĩnh vực; thẩm định giá cho người có liên quan; lập khống; mua chuộc, thông đồng.</p>`,
['Dự thi: đại học + chứng chỉ nghiệp vụ (trừ CĐ chuyên ngành giá)','Hành nghề: HĐLĐ + 36 tháng (24 tháng) + cập nhật kiến thức','Không đăng ký đồng thời 2 doanh nghiệp','Có thẻ chưa phải là thẩm định viên: phải đăng ký và được BTC thông báo','Cấm: ký với tư cách cá nhân, cho mượn thẻ']);

L(1,'dntdg','Doanh nghiệp thẩm định giá','Điều kiện, đình chỉ và thu hồi, nghĩa vụ.',`
<h4>Điều kiện cấp giấy chứng nhận đủ điều kiện (Điều 49)</h4>
<div class="tw"><table><tr><th>Loại hình</th><th>Điều kiện</th></tr>
<tr><td>Chung</td><td>Ít nhất <b>05</b> người có thẻ thẩm định viên đủ điều kiện hành nghề tại doanh nghiệp</td></tr>
<tr><td>DNTN, TNHH một thành viên, hợp danh</td><td>Chủ doanh nghiệp/người đại diện đáp ứng Điều 51; chủ sở hữu cá nhân hoặc các thành viên hợp danh phải là người có thẻ hành nghề tại doanh nghiệp</td></tr>
<tr><td>TNHH hai thành viên trở lên, cổ phần</td><td>Ít nhất <b>02</b> thành viên/cổ đông có thẻ hành nghề tại DN; thành viên là tổ chức: tổng vốn góp <b>không quá 35%</b> vốn điều lệ; vốn góp của thành viên/cổ đông là thẩm định viên <b>trên 50%</b> vốn điều lệ</td></tr></table></div>
<h4>Người đại diện theo pháp luật, Giám đốc/Tổng giám đốc (Điều 51)</h4>
<p>Ghi tên trên Giấy chứng nhận đăng ký doanh nghiệp; là thẩm định viên tại doanh nghiệp đó; <b>đủ 36 tháng</b> là thẩm định viên; duy trì điều kiện hành nghề; không từng giữ vị trí này ở doanh nghiệp bị thu hồi giấy chứng nhận (12 tháng nếu thu hồi lần 1, 60 tháng nếu lần 2).</p>
<h4>Mất điều kiện, đình chỉ, thu hồi</h4>
<div class="tw"><table><tr><th>Tình huống</th><th>Hậu quả</th></tr>
<tr><td>Không đáp ứng điều kiện Điều 49, 50</td><td>Báo cáo Bộ Tài chính trong <b>10 ngày</b>; khắc phục trong tối đa <b>03 tháng</b></td></tr>
<tr><td><b>Đình chỉ</b> (Điều 54 k1)</td><td>Không đáp ứng Điều 49 k1 trong 03 tháng liên tục; phát hành chứng thư do người không phải thẩm định viên ký; các trường hợp theo luật khác</td></tr>
<tr><td><b>Thu hồi</b> giấy chứng nhận (k2)</td><td>Kê khai gian lận hồ sơ; không phát hành chứng thư trong 12 tháng liên tục; 60 ngày sau đình chỉ vẫn không khắc phục; tự chấm dứt; bị thu hồi đăng ký doanh nghiệp</td></tr></table></div>
<p>Nghĩa vụ (Điều 53 k2): kiểm soát chất lượng báo cáo; chứng thư tuân thủ Chuẩn mực; bồi thường thiệt hại; <b>mua bảo hiểm trách nhiệm nghề nghiệp hoặc trích lập dự phòng rủi ro nghề nghiệp</b>; quản lý thẩm định viên; lưu trữ hồ sơ.</p>`,
['5 thẻ; 2 thành viên/cổ đông có thẻ','Tổ chức ≤ 35%; thẩm định viên > 50% vốn điều lệ','Báo cáo 10 ngày, khắc phục ≤ 3 tháng','Đình chỉ (3 tháng, ký sai) khác thu hồi (12 tháng không phát hành, gian lận)']);

L(1,'hdtdg','Thẩm định giá của Nhà nước và hội đồng thẩm định giá','Điều 59–64: thành phần, họp, biểu quyết.',`
<p>Thẩm định giá của Nhà nước (Điều 59) là một trong các cơ sở để xem xét, quyết định, phê duyệt giá khi bán, thanh lý, cho thuê, liên doanh, liên kết, chuyển giao tài sản công hoặc mua, thuê hàng hóa, dịch vụ, tài sản có dùng vốn nhà nước. <b>Không áp dụng</b> với hàng hóa, dịch vụ thuộc Danh mục Nhà nước định giá. Thực hiện qua <b>hội đồng thẩm định giá</b>.</p>
<div class="tw"><table><tr><th>Nội dung</th><th>Quy định (Điều 60)</th></tr>
<tr><td>Số thành viên</td><td>Tối thiểu <b>03</b>, gồm Chủ tịch; là cán bộ, công chức, viên chức, người lao động thuộc quyền quản lý của người thành lập; cần thiết có thể thuê người có chứng nhận chuyên môn</td></tr>
<tr><td>Chuyên môn</td><td>Ít nhất <b>50%</b> thành viên, gồm cả Chủ tịch, có một trong: bằng CĐ trở lên chuyên ngành giá/thẩm định giá; thẻ thẩm định viên; chứng chỉ đào tạo nghiệp vụ thẩm định giá; chứng chỉ bồi dưỡng thẩm định giá nhà nước</td></tr>
<tr><td>Họp</td><td>Tập thể, quyết định theo đa số; có mặt ít nhất <b>2/3</b>; hội đồng 3 người phải đủ 3; vắng mặt phải có văn bản nêu lý do và ý kiến độc lập</td></tr>
<tr><td>Biểu quyết</td><td>Theo đa số; ngang nhau thì ý kiến bên có biểu quyết của <b>Chủ tịch</b> là quyết định; thành viên có quyền bảo lưu</td></tr></table></div>
<p>Quyền của hội đồng: yêu cầu cung cấp thông tin; thuê tổ chức giám định; thuê doanh nghiệp thẩm định giá làm một phần hoặc toàn bộ (phải rà soát đánh giá quá trình); báo cáo cấp có thẩm quyền khi không đủ thông tin. Thông báo kết quả và báo cáo của hội đồng chỉ có giá trị trong thời gian hiệu lực, đúng mục đích, đúng tài sản và số lượng (Điều 64).</p>`,
['≥ 3 thành viên; ≥ 50% có chứng nhận chuyên môn (gồm Chủ tịch)','Họp: ≥ 2/3; hội đồng 3 người phải đủ 3','Ngang phiếu: bên Chủ tịch','Không áp dụng với hàng hóa Nhà nước định giá']);

L(1,'chungthu','Chứng thư, báo cáo thẩm định giá và hồ sơ','Chữ ký, hiệu lực 6 tháng, lưu trữ 10 năm.',`
<div class="tw"><table><tr><th></th><th>Báo cáo thẩm định giá</th><th>Chứng thư thẩm định giá</th></tr>
<tr><td>Bản chất</td><td>Văn bản trình bày quá trình thẩm định giá, căn cứ để lập chứng thư</td><td>Văn bản thông báo giá trị tài sản và nội dung chính của báo cáo cho khách hàng, bên liên quan</td></tr>
<tr><td>Chữ ký (Điều 55)</td><td>Thẩm định viên thực hiện ký; người đại diện theo pháp luật <b>phê duyệt</b></td><td>Thẩm định viên thực hiện ký; người đại diện theo pháp luật (hoặc người đứng đầu chi nhánh) ký và <b>đóng dấu</b></td></tr>
<tr><td>Quan hệ</td><td colspan="2">Báo cáo <b>không thể tách rời</b> chứng thư. Cả hai chỉ có giá trị trong thời hạn hiệu lực, đúng mục đích, đúng thông tin và số lượng tài sản trong hợp đồng.</td></tr></table></div>
<ul><li><b>Hiệu lực chứng thư</b> (Chuẩn mực Hồ sơ, Điều 7): tính từ ngày phát hành; xác định theo đặc điểm tài sản, biến động pháp lý/thị trường, mục đích; <b>tối đa 06 tháng</b>. Thông báo kết quả của hội đồng cũng tối đa 06 tháng.</li>
<li>Người đại diện được ủy quyền cho người quản lý doanh nghiệp ký chứng thư, duyệt báo cáo; người được ủy quyền phải là <b>thẩm định viên tại doanh nghiệp</b>.</li>
<li>Chứng thư phải được cập nhật vào <b>Cơ sở dữ liệu quốc gia về giá</b> (trừ bí mật nhà nước).</li>
<li>Báo cáo cần thuyết minh, lập luận, phân tích; số liệu dẫn chiếu nguồn cụ thể; có thể phát hành điện tử với chữ ký điện tử.</li>
<li><b>Lưu trữ hồ sơ</b>: tối thiểu <b>10 năm</b> kể từ ngày phát hành chứng thư. Hồ sơ gồm báo cáo, chứng thư, hợp đồng, tài liệu tài sản và tài sản so sánh, báo cáo chuyên gia, biên bản khảo sát, ảnh, tài liệu phân tích.</li></ul>`,
['Chứng thư ≤ 6 tháng; lưu hồ sơ ≥ 10 năm','Báo cáo: ký + phê duyệt; chứng thư: ký + đóng dấu','Người được ủy quyền ký phải là thẩm định viên tại DN','Cập nhật CSDL quốc gia về giá']);

L(1,'cosogt','Cơ sở giá trị và giả thiết','Năm cơ sở giá trị, khi nào dùng giả thiết đặc biệt.',`
<p>Cơ sở giá trị là nền tảng của thẩm định giá: ảnh hưởng đến chọn phương pháp, thông tin đầu vào, giả thiết, quan điểm giá trị. Xác định theo <b>mục đích</b> và tình huống giao dịch, sau khi trao đổi với bên yêu cầu.</p>
<div class="tw"><table><tr><th>Cơ sở giá trị</th><th>Từ khóa</th></tr>
<tr><td>Giá trị thị trường</td><td>Khoản tiền <b>ước tính</b>; người sẵn sàng mua – bán; giao dịch khách quan, độc lập; tiếp thị đầy đủ; hiểu biết, thận trọng, không bị ép buộc. Không phải giá bán thực tế hay mức ấn định trước</td></tr>
<tr><td>Giá trị thuê thị trường</td><td>Ước tính để thuê một quyền lợi từ BĐS theo điều khoản thuê thích hợp; dùng khi thẩm định hợp đồng thuê</td></tr>
<tr><td>Giá trị đầu tư</td><td>Đối với <b>một</b> chủ sở hữu hoặc chủ sở hữu tiềm năng cụ thể, cho hoạt động đầu tư cụ thể; đo hiệu quả đầu tư</td></tr>
<tr><td>Giá trị bắt buộc phải bán</td><td>Bán trong thời gian hạn chế, <b>không tiếp thị đầy đủ</b>; người mua có thể không kiểm tra đủ</td></tr>
<tr><td>Giá trị ngang bằng</td><td>Hai bên đã xác định cụ thể, phản ánh lợi ích tương ứng của hai bên</td></tr>
<tr><td>Giá trị hợp lý</td><td>Theo pháp luật về lập báo cáo tài chính và IFRS</td></tr></table></div>
<h4>Giả thiết và giả thiết đặc biệt (Điều 10)</h4>
<ul><li><b>Giả thiết</b>: dùng khi thông tin còn hạn chế, chưa chắc chắn mà không khắc phục được (hạn chế hồ sơ pháp lý, đặc điểm tài sản, thông tin khác).</li>
<li><b>Giả thiết đặc biệt</b>: tình trạng tài sản <b>khác thực tế</b> tại thời điểm thẩm định giá nhưng phù hợp mục đích; phải <b>thông báo</b> và có <b>đồng thuận bằng văn bản</b> của bên yêu cầu, phù hợp pháp luật. Nếu làm thẩm định giá không khả thi thì loại bỏ.</li></ul>`,
['Giá trị thị trường là ước tính','Đầu tư: chủ thể cụ thể; ngang bằng: hai bên cụ thể','Bắt buộc phải bán: thiếu tiếp thị','Giả thiết đặc biệt cần văn bản đồng thuận']);

L(1,'thongtin','Thu thập, đánh giá, phân tích thông tin','Chuẩn mực áp dụng chung: nguồn, bằng chứng, 03 tài sản so sánh.',`
<ul><li><b>Xem xét thông tin</b>: dùng thông tin tin cậy, phù hợp. Khi hồ sơ khách hàng khác kết quả khảo sát hoặc không đầy đủ: <b>kịp thời trao đổi</b> để bổ sung, làm rõ, bảo đảm khách quan; nghiêm cấm tác động ảnh hưởng đến giá trị.</li>
<li><b>Phân tích thông tin</b> theo nhóm: thông tin bên yêu cầu, mục đích, thời điểm, căn cứ pháp lý, cơ sở giá trị; đặc điểm pháp lý, kinh tế–kỹ thuật; thị trường; <b>sử dụng tốt nhất và hiệu quả nhất (chỉ BĐS)</b>.</li>
<li><b>Sử dụng tốt nhất và hiệu quả nhất</b>: phù hợp pháp luật, khả thi về vật chất, kỹ thuật, mang lại hiệu quả kinh tế cao nhất.</li>
<li><b>Tài sản so sánh</b>: ít nhất <b>03</b> tài sản từ các tổ chức, cá nhân khác nhau; thời điểm giao dịch/chào giá gần nhất, không quá <b>24 tháng</b> (hướng dẫn trong chuyên đề); ưu tiên gần nhất về khoảng cách, không bị giới hạn bởi ranh giới hành chính cấp xã, huyện trong tỉnh; mở rộng ra ngoài tỉnh phải nêu lý do.</li>
<li>Biến động giá theo thời gian: điều chỉnh <b>về thời điểm thẩm định giá trước</b>, rồi mới điều chỉnh yếu tố so sánh. Giá chào bán/mua cần đánh giá để tìm mức giá phù hợp.</li>
<li><b>Bằng chứng</b>: phiếu thu thập thông tin có chữ ký; trên internet phải dẫn chiếu đường link, lưu hình ảnh, chỉ từ website chính thức của cơ quan, tổ chức hoạt động hợp pháp; báo giá chào phải có tên, địa chỉ, mã số thuế (nếu có), dấu, thời điểm, hiệu lực.</li>
<li><b>Thuần và gộp</b>: tổng điều chỉnh thuần có dấu (+/−); tổng điều chỉnh gộp cộng giá trị tuyệt đối.</li></ul>`,
['≥ 03 tài sản so sánh, ≤ 24 tháng','Điều chỉnh về thời điểm trước','Tốt nhất và hiệu quả nhất: chỉ BĐS','Thuần có dấu, gộp là tuyệt đối']);

L(1,'phapluatdn','Pháp luật doanh nghiệp','Loại hình, tư cách pháp nhân, vốn, phá sản.',`
<div class="tw"><table><tr><th>Loại hình</th><th>Pháp nhân?</th><th>Trách nhiệm</th><th>Số thành viên</th><th>Ghi nhớ</th></tr>
<tr><td>TNHH một thành viên</td><td>Có</td><td>Hữu hạn</td><td>1 (cá nhân/tổ chức)</td><td>Không phát hành cổ phần; hợp mô hình công ty mẹ–con</td></tr>
<tr><td>TNHH hai thành viên trở lên</td><td>Có</td><td>Hữu hạn</td><td>2–<b>50</b></td><td>Ưu tiên các thành viên khác khi chuyển nhượng; không phát hành cổ phần</td></tr>
<tr><td>Công ty cổ phần</td><td>Có</td><td>Hữu hạn</td><td>≥ <b>3</b> cổ đông</td><td>Vốn chia cổ phần bằng nhau; tự do chuyển nhượng; được phát hành chứng khoán</td></tr>
<tr><td>Công ty hợp danh</td><td>Có</td><td>Thành viên hợp danh <b>vô hạn</b>; thành viên góp vốn hữu hạn</td><td>≥ 2 thành viên hợp danh (cá nhân)</td><td>Không phát hành chứng khoán</td></tr>
<tr><td>Doanh nghiệp tư nhân</td><td><b>Không</b></td><td>Vô hạn</td><td>1 cá nhân</td><td>Không phát hành chứng khoán</td></tr></table></div>
<ul><li><b>Pháp nhân</b> (BLDS Điều 84): thành lập hợp pháp; cơ cấu tổ chức chặt chẽ; tài sản độc lập và tự chịu trách nhiệm; nhân danh mình tham gia quan hệ pháp luật.</li>
<li><b>Vốn điều lệ</b>: vốn góp hoặc cam kết góp trong thời hạn nhất định, ghi vào Điều lệ (DNTN: vốn đăng ký). <b>Vốn pháp định</b>: mức tối thiểu để thành lập ở ngành đặc thù.</li>
<li>Đối tượng bị cấm thành lập doanh nghiệp: cơ quan nhà nước, đơn vị vũ trang; cán bộ, công chức, quân nhân; lãnh đạo DN 100% vốn nhà nước; người hạn chế hoặc mất năng lực hành vi; người bị phạt tù hoặc cấm kinh doanh.</li>
<li>Hạn chế chuyển nhượng: cổ đông sáng lập không tự do chuyển nhượng ra ngoài trong <b>3 năm</b> kể từ khi thành lập; cổ phần phát hành riêng lẻ: 1 năm (Luật Chứng khoán).</li>
<li>Đại diện theo pháp luật: (Tổng) Giám đốc hoặc Chủ tịch HĐTV/HĐQT (TNHH, cổ phần); Chủ tịch công ty (TNHH một thành viên); chủ doanh nghiệp (DNTN); thành viên hợp danh.</li>
<li><b>Phá sản</b>: Luật Phá sản 2014 (hiệu lực 01/01/2015); chủ nợ không bảo đảm hoặc bảo đảm một phần, đại diện doanh nghiệp, cổ đông đại diện 20% cổ phần phổ thông… có quyền nộp đơn.</li></ul>`,
['TNHH 2+ TV: tối đa 50; cổ phần: tối thiểu 3 cổ đông','DNTN không là pháp nhân; hợp danh vẫn là pháp nhân','Cổ đông sáng lập hạn chế chuyển nhượng 3 năm','Phá sản: Luật 2014']);

L(1,'thue','Pháp luật thuế và quản lý thuế','Đặc trưng, tự khai tự nộp, kiểm tra và thanh tra.',`
<p>Nguồn trong bộ tài liệu chỉ nêu khái quát; phần số liệu thuế suất GTGT, TNDN cần tra thêm luật hiện hành (không có trong tài liệu dự án).</p>
<ul><li><b>Đặc trưng của thuế</b>: bắt buộc; không hoàn trả trực tiếp; không đối giá; không đối khoản; do Quốc hội quyết định bằng luật.</li>
<li><b>Cấu trúc luật thuế</b>: tên gọi; phạm vi áp dụng (đối tượng chịu thuế, người nộp thuế, đối tượng không chịu thuế); căn cứ tính thuế (giá tính thuế, thuế suất); chế độ thu nộp; miễn giảm; điều khoản thi hành.</li>
<li><b>Các loại thuế</b>: GTGT; TNDN; TTĐB; TNCN; xuất nhập khẩu; sử dụng đất nông nghiệp; sử dụng đất phi nông nghiệp; tài nguyên; bảo vệ môi trường.</li>
<li><b>Trốn thuế</b> (gian lận): giảm hoặc không nộp thuế. <b>Tránh thuế</b>: chọn mức thuế thấp để nộp (chuyển giá, thiên đường thuế); giải pháp: quản lý giá và định mức chi phí, thỏa thuận trước về phương pháp xác định giá tính thuế (APA).</li>
<li>Cơ sở pháp lý quản lý thuế: <b>Luật Quản lý thuế 2019</b>. Cơ chế <b>tự khai, tự nộp</b>.</li>
<li><b>Kiểm tra thuế</b> tại trụ sở người nộp thuế: không quá <b>5 ngày</b>, gia hạn một lần không quá 5 ngày. <b>Thanh tra thuế</b>: tối đa <b>30 ngày</b>, gia hạn không quá 30 ngày; quy trình: quyết định → thanh tra → kết luận → giao quyết định.</li>
<li>Quyền tự vệ của doanh nghiệp: từ chối khi không có quyết định; từ chối thông tin không liên quan; nhận biên bản, kết luận; bảo lưu ý kiến; khiếu nại, khởi kiện, tố cáo.</li></ul>`,
['Thuế: không đối giá, không đối khoản','Kiểm tra tại trụ sở: ≤ 5 ngày (+5)','Thanh tra: ≤ 30 ngày (+30)','Luật Quản lý thuế 2019; tự khai, tự nộp']);

L(1,'hopdong','Pháp luật hợp đồng và giải quyết tranh chấp','Vô hiệu, thời hiệu, hòa giải, trọng tài, Tòa án.',`
<ul><li><b>Hợp đồng vô hiệu</b>: chỉ vô hiệu khi có tuyên bố của Tòa án (hoặc trọng tài); có thể vô hiệu toàn bộ, từng phần hoặc không vô hiệu. <b>Hậu quả</b>: các bên khôi phục tình trạng ban đầu, hoàn trả; bên có lỗi bồi thường thiệt hại.</li>
<li><b>Thời hiệu</b> đề nghị tuyên vô hiệu: <b>2 năm</b> kể từ ngày giao dịch được xác lập; một số trường hợp không hạn chế thời hiệu.</li>
<li><b>Giải quyết tranh chấp</b>: thương lượng, hòa giải; trọng tài thương mại (cần có <b>thỏa thuận trọng tài</b>, giải quyết một lần); Tòa án theo tố tụng dân sự.</li>
<li>Áp dụng cho thẩm định giá: hợp đồng thẩm định giá là hợp đồng dân sự (Điều 40, 57, 58 Luật Giá); khách hàng và bên thứ ba có tên trong hợp đồng có quyền, nghĩa vụ riêng (Điều 56).</li></ul>`,
['Thời hiệu tuyên vô hiệu 2 năm','Vô hiệu: hoàn trả, bên có lỗi bồi thường','Trọng tài cần thỏa thuận; giải quyết một lần']);

L(1,'shtt','Sở hữu trí tuệ','Xác lập quyền và đối tượng bảo hộ; nền cho tài sản vô hình.',`
<ul><li>Luật Sở hữu trí tuệ 2005, sửa đổi bổ sung 2009, 2019, 2022.</li>
<li><b>Quyền tác giả và quyền liên quan</b>: phát sinh từ khi tác phẩm được sáng tạo và thể hiện dưới hình thức vật chất nhất định, <b>không phụ thuộc</b> đã công bố hoặc đăng ký hay chưa.</li>
<li><b>Quyền sở hữu công nghiệp</b> (sáng chế, kiểu dáng công nghiệp, thiết kế bố trí, nhãn hiệu, chỉ dẫn địa lý…): xác lập trên cơ sở <b>quyết định cấp văn bằng bảo hộ</b> của cơ quan có thẩm quyền; các đối tượng như tên thương mại, bí mật kinh doanh, nhãn hiệu nổi tiếng có quy tắc xác lập riêng.</li>
<li><b>Quyền đối với giống cây trồng</b>: Bằng bảo hộ giống cây trồng.</li>
<li>Thời hạn bảo hộ theo từng đối tượng quy định trong Luật SHTT; ôn thêm trong bài giảng vì có thể được hỏi.</li>
<li>Hành vi xâm phạm điển hình: sử dụng sáng chế, kiểu dáng, nhãn hiệu, chỉ dẫn địa lý được bảo hộ khi chưa được phép.</li>
<li>Ý nghĩa với thẩm định giá: tài sản vô hình phải được pháp luật công nhận và bảo vệ (đặc điểm thứ ba của tài sản vô hình).</li></ul>`,
['Quyền tác giả phát sinh tự động','Quyền công nghiệp theo văn bằng bảo hộ','Luật SHTT sửa đổi 2009, 2019, 2022']);

L(1,'nguyenly','Nguyên lý hình thành giá và nguyên lý căn bản về thẩm định giá','Bốn loại tài sản, đặc trưng, mục đích, vai trò.',`
<h4>Nguyên lý hình thành giá cả thị trường (tóm lược)</h4>
<p>Giá cả là biểu hiện bằng tiền của giá trị hàng hóa. Quy luật giá trị: giá cả xoay quanh giá trị; trong điều kiện tiền tệ ổn định và quỹ mua hàng xác định, tổng giá cả bằng tổng giá trị (nhóm hàng giá cao hơn giá trị thì nhóm khác thấp hơn). Cung cầu tác động lên giá; các hình thái giá trị phát triển từ giản đơn đến tiền tệ.</p>
<h4>Nguyên lý căn bản về thẩm định giá</h4>
<ul><li><b>Đối tượng</b>: tài sản, hàng hóa, dịch vụ được yêu cầu thẩm định giá. Tài sản thẩm định giá gồm <b>4 loại</b>: bất động sản, động sản, doanh nghiệp, tài sản vô hình.</li>
<li><b>Đặc trưng</b>: (1) nghiên cứu có lựa chọn một khu vực thị trường, một loại tài sản; (2) dùng nhiều dữ liệu, phải kiểm chứng nguồn; (3) kỹ thuật phân tích định lượng; (4) kiến thức đa ngành và kinh nghiệm; (5) ý kiến về giá trị dựa trên bằng chứng thị trường.</li>
<li><b>Mục đích</b>: mua bán, chuyển nhượng, thế chấp, bảo hiểm, tính thuế, đền bù, cho thuê, thanh lý, đầu tư, cổ phần hóa, sáp nhập, thi hành án… Cùng tài sản, cùng thời điểm, <b>mục đích khác thì kết quả có thể khác</b>.</li>
<li><b>Vai trò</b>: minh bạch hóa thị trường; hỗ trợ Nhà nước quản lý tài sản, ngân sách; hỗ trợ người dân, doanh nghiệp giao dịch và đầu tư; thuận lợi cho hội nhập.</li>
<li><b>Chuẩn mực</b>: 11 chuẩn mực, trong đó <b>8 chuẩn mực áp dụng chung</b> (đạo đức nghề nghiệp; phạm vi công việc; cơ sở giá trị; hồ sơ; thu thập và phân tích thông tin; cách tiếp cận thị trường; chi phí; thu nhập) là nội dung thi của phần này; 3 chuẩn mực cho tài sản cụ thể (doanh nghiệp, vô hình, BĐS).</li></ul>`,
['4 loại tài sản','8 chuẩn mực áp dụng chung','Mục đích khác thì giá trị có thể khác']);

L(1,'toan','Toán ứng dụng: giá trị thời gian của tiền','Các công thức nền cho cả ba môn.',`
<p>Kí hiệu: r lãi suất mỗi kỳ; n số kỳ; PV hiện giá; FV giá trị tương lai; A khoản tiền đều mỗi kỳ (cuối kỳ).</p>
<div class="tw"><table><tr><th>Cần tính</th><th>Công thức</th><th>Ví dụ (r = 7,5%, n = 5)</th></tr>
<tr><td>FV của một khoản</td><td>FV = PV × (1+r)<sup>n</sup></td><td>3.000 × 1,075<sup>5</sup> = 4.306,89</td></tr>
<tr><td>PV của một khoản</td><td>PV = FV / (1+r)<sup>n</sup></td><td>5.000 / 1,075<sup>5</sup> = 3.482,79</td></tr>
<tr><td>FV niên kim</td><td>FV = A × [(1+r)<sup>n</sup> − 1] / r</td><td>140 × 5,8084 = 813,17</td></tr>
<tr><td>A để đạt FV</td><td>A = FV × r / [(1+r)<sup>n</sup> − 1]</td><td>693,11 × 0,075/0,4356 = 119,33</td></tr>
<tr><td>PV niên kim</td><td>PV = A × [1 − (1+r)<sup>−n</sup>] / r</td><td></td></tr>
<tr><td>A trả nợ đều</td><td>A = PV × r / [1 − (1+r)<sup>−n</sup>]</td><td>2.000 (10%) → 527,59</td></tr>
<tr><td>Lãi suất thực</td><td>(1 + r<sub>dn</sub>/m)<sup>m</sup> − 1</td><td>12%, m = 4 → 12,55%</td></tr></table></div>
<ul><li>Luôn đổi <b>kỳ</b> và <b>lãi suất mỗi kỳ</b> về cùng đơn vị (quý: r/4, n × 4).</li>
<li>Muốn so sánh nguồn vay ghép lãi khác nhau: so <b>lãi suất thực</b>.</li>
<li>Dòng tiền sau thuế đi với tỷ suất sau thuế; chi phí vay đưa vào WACC phải nhân (1 − t).</li></ul>`,
['PV, FV, niên kim, trả nợ đều','So lãi thực khi kỳ ghép khác nhau','WACC: vay × (1 − thuế)']);

/* ====== MÔN 2 ====== */
L(2,'bds_tq','Tổng quan bất động sản, thị trường BĐS và thẩm định giá BĐS','Điều 107 BLDS, 8 đặc điểm, khái niệm, phạm vi công việc.',`
<h4>Khái niệm (BLDS 2015, Điều 107 k1)</h4>
<p>BĐS gồm: đất đai; nhà, công trình xây dựng gắn liền với đất; tài sản gắn liền với đất, nhà, công trình xây dựng; các tài sản khác gắn liền với đất; tài sản khác theo quy định của pháp luật.</p>
<h4>Tám đặc điểm của BĐS</h4>
<p>Khan hiếm · cố định về vị trí · <b>thanh khoản kém</b> · lâu bền · giá trị lớn · khác biệt · thích ứng · ảnh hưởng lẫn nhau.</p>
<h4>Phân loại và yếu tố ảnh hưởng giá</h4>
<ul><li>Theo đặc tính vật chất: đất đai; công trình xây dựng và tài sản gắn liền; tài sản khác gắn liền. Theo khả năng phát triển: có / không có khả năng phát triển.</li>
<li>Yếu tố ảnh hưởng: quan hệ <b>cung cầu</b>; nhóm yếu tố liên quan trực tiếp (tự nhiên, kinh tế, pháp lý); nhóm khác (chính sách Nhà nước, quy hoạch, vĩ mô, xã hội).</li></ul>
<h4>Thị trường BĐS</h4>
<p>Dạng điển hình của thị trường <b>không hoàn hảo</b>; mang tính khu vực; cung cầu ít co giãn; hàng hóa và địa điểm giao dịch tách biệt; chịu kiểm soát của Nhà nước; liên hệ mật thiết với thị trường tài chính, tiền tệ, tín dụng; cần tổ chức trung gian; giao dịch các quyền và lợi ích hợp pháp liên quan đến BĐS.</p>
<h4>Thẩm định giá BĐS</h4>
<p>Khái niệm như Luật Giá, đối tượng là BĐS. Phạm vi công việc: trao đổi với bên yêu cầu → lập kế hoạch → thu thập, phân tích thông tin → chọn và áp dụng phương pháp → xác định giá trị → lập báo cáo, chứng thư. Cơ sở giá trị: thị trường, thuê thị trường, đầu tư, bắt buộc phải bán, ngang bằng, hợp lý.</p>
<table class="tw"><tr><th>Cách tiếp cận</th><th>Phương pháp</th></tr><tr><td>Thị trường</td><td>So sánh (kèm chiết trừ)</td></tr><tr><td>Chi phí</td><td>Chi phí thay thế; chi phí tái tạo</td></tr><tr><td>Thu nhập</td><td>Vốn hóa trực tiếp; dòng tiền chiết khấu</td></tr><tr><td>Kết hợp</td><td>Thặng dư (BĐS có tiềm năng phát triển)</td></tr></table>`,
['BĐS: 5 nhóm theo Điều 107','Thanh khoản kém','Thị trường BĐS không hoàn hảo, mang tính khu vực','3 cách tiếp cận + thặng dư']);

L(2,'sosanh','Phương pháp so sánh (và chiết trừ)','5 bước, thứ tự điều chỉnh, nguyên tắc khống chế 15%.',`
<p><b>Khái niệm.</b> Đối chiếu, phân tích, đánh giá các yếu tố so sánh của tài sản so sánh với tài sản thẩm định, rồi điều chỉnh giá của tài sản so sánh làm cơ sở ước tính giá trị.</p>
<h4>5 bước</h4>
<ol><li>Khảo sát, thu thập thông tin tài sản so sánh (≥ 03, ≤ 24 tháng).</li><li>Phân tích thông tin (định lượng: theo cặp, thống kê, hồi quy, chi phí; định tính: so sánh tương quan, xếp hạng, phỏng vấn).</li><li>Điều chỉnh sự khác biệt.</li><li>Xác định mức giá chỉ dẫn.</li><li>Xác định giá trị tài sản thẩm định.</li></ol>
<h4>Quy tắc điều chỉnh</h4>
<ul><li>Lấy <b>BĐS thẩm định làm chuẩn</b>: yếu tố có ở mục tiêu mà tài sản so sánh không có thì cộng (+) và ngược lại.</li>
<li>Thứ tự: nhóm <b>pháp lý và điều kiện giao dịch</b> trước (thời gian, thanh toán, hợp thức hóa); sau đó <b>kinh tế–kỹ thuật</b> (số tiền tuyệt đối trước, tỷ lệ % sau; % tính trên giá sau điều chỉnh tuyệt đối).</li>
<li>Tỷ lệ điều chỉnh: <b>mục tiêu / so sánh − 1</b> theo thang quy đổi (đưa các tình huống về thang 100). Đọc kỹ đề: "A cao hơn B 10%" nghĩa là A = 110% B.</li>
<li><b>Nguyên tắc khống chế</b>: mỗi mức giá chỉ dẫn lệch so với trung bình các mức giá chỉ dẫn <b>không quá 15%</b>.</li></ul>
<h4>Chọn kết quả (bước 5)</h4>
<p>Phân tích chất lượng thông tin và 4 chỉ tiêu: tổng điều chỉnh <b>gộp</b> nhỏ nhất; <b>số lần</b> điều chỉnh ít nhất; <b>biên độ</b> điều chỉnh một yếu tố nhỏ nhất; tổng điều chỉnh <b>thuần</b> nhỏ nhất. Nếu chất lượng thông tin ngang nhau và chênh lệch nhỏ: lấy bình quân.</p>
<h4>Chiết trừ</h4>
<p>Giá đất = giá bán cả BĐS − giá trị còn lại công trình (xây mới × chất lượng còn lại) → đơn giá đất/m² → điều chỉnh các yếu tố của đất. Dùng khi thiếu giao dịch đất trống. Nhiều bài tập chỉ đòi hỏi điều chỉnh nhiều yếu tố nối tiếp hoặc cộng tổng tỷ lệ; chọn một cách, nêu rõ và dùng nhất quán.</p>
<h4>Ưu, nhược điểm và trường hợp áp dụng</h4>
<p>Ưu: ít khó khăn kỹ thuật, dựa trên giá thị trường, được công nhận, là cơ sở cho các phương pháp khác. Nhược: phụ thuộc chất lượng thông tin; thông tin mang tính lịch sử; chủ quan. Áp dụng: BĐS đồng nhất (căn hộ, đất trống, dãy nhà cùng kiểu); mục đích mua bán, thế chấp, tính thuế.</p>`,
['Lấy BĐS thẩm định làm chuẩn','Pháp lý, thanh toán điều chỉnh trước','Lệch ≤ 15% so với trung bình','Chọn: gộp, số lần, biên độ, thuần nhỏ nhất']);

L(2,'chiphi','Cách tiếp cận chi phí cho bất động sản','Đất + công trình − hao mòn; ba loại hao mòn.',`
<p>Dựa trên <b>nguyên tắc thay thế</b>: giá trị BĐS có thể đo bằng chi phí tạo ra BĐS tương tự.</p>
<h4>5 bước</h4>
<ol><li>Ước tính giá đất (như đất trống, sử dụng tốt nhất và hiệu quả nhất).</li><li>Chi phí xây lại công trình hiện có.</li><li>Tổng hao mòn tích lũy (mọi nguyên nhân).</li><li>Giá trị hiện tại của công trình = (2) − (3).</li><li>Giá trị BĐS = (1) + (4).</li></ol>
<h4>Chi phí tái tạo và thay thế</h4>
<p><b>Tái tạo</b>: giống hệt, mới 100%. <b>Thay thế</b>: chức năng, công dụng tương tự, công nghệ vật liệu mới hơn. Công trình mới: thay thế = tái tạo. Thành phần: vật liệu, máy thiết bị, nhân công, thiết kế, tư vấn, quản lý, tài chính, thuế không hoàn lại, lắp đặt chạy thử, lợi nhuận nhà thầu/nhà đầu tư, thuế phí.</p>
<h4>Hao mòn</h4>
<div class="tw"><table><tr><th>Loại</th><th>Cách ước tính</th></tr>
<tr><td>Vật lý</td><td>Chi phí khắc phục − thu thanh lý; hoặc theo mức độ đã dùng / thiết kế; hoặc tuổi đời hiệu quả / tuổi đời vật lý; hoặc bình quân gia quyền tỷ lệ hao mòn các kết cấu chính theo tỷ trọng giá trị</td></tr>
<tr><td>Chức năng</td><td>Khắc phục được: chi phí khắc phục − thu thanh lý. Chi phí vốn cao: chi phí tái tạo − chi phí thay thế. Chi phí vận hành cao: hiện giá chênh lệch vận hành hằng năm (sau thuế)</td></tr>
<tr><td>Ngoại biên</td><td>Phân tích giá giao dịch tương tự; hoặc vốn hóa thu nhập bị mất</td></tr></table></div>
<p>Ba kỹ thuật chung: <b>so sánh</b> (hao mòn từ giao dịch tài sản tương tự), <b>tuổi đời</b>, <b>tổng cộng</b> (cộng các loại hao mòn). Tránh tính trùng hao mòn.</p>
<p><b>Ưu/nhược.</b> Dùng khi không có thị trường để so sánh hoặc không dự báo được dòng tiền; bảo hiểm, đấu thầu; kiểm tra cho phương pháp khác. Nhược: chi phí ≠ giá trị; tổng các bộ phận chưa chắc bằng giá trị cả; hao mòn chủ quan; cần am hiểu kỹ thuật xây dựng.</p>`,
['Giá trị = đất + chi phí xây lại − hao mòn','Ba hao mòn: vật lý, chức năng, ngoại biên','Chi phí vận hành cao: chiết khấu chênh lệch sau thuế','Tránh tính trùng hao mòn']);

L(2,'thunhap','Cách tiếp cận từ thu nhập: vốn hóa trực tiếp và dòng tiền chiết khấu','Khung 5 mảnh: khái niệm, công thức, các bước, điều kiện, ưu nhược.',`
<div class="tw"><table><tr><th></th><th>Vốn hóa trực tiếp</th><th>Dòng tiền chiết khấu</th></tr>
<tr><td>Khái niệm</td><td>Quy đổi thu nhập thuần ổn định hằng năm về giá trị bằng tỷ suất vốn hóa</td><td>Quy đổi các dòng tiền dự báo trong tương lai về hiện tại bằng tỷ suất chiết khấu</td></tr>
<tr><td>Công thức</td><td><b>V = I / R</b></td><td>V = Σ CF<sub>t</sub>/(1+r)<sup>t</sup>; đều: V = A × [1−(1+r)<sup>−n</sup>]/r; hai giai đoạn: + V<sub>n</sub>/(1+r)<sup>n</sup>, V<sub>n</sub> = CF<sub>n+1</sub>/(r−g)</td></tr>
<tr><td>Các bước</td><td>Thu nhập thuần → tỷ suất vốn hóa → V</td><td>Giai đoạn dự báo → dòng tiền → giá trị cuối kỳ V<sub>n</sub> → tỷ suất chiết khấu → V</td></tr>
<tr><td>Điều kiện</td><td>Thu nhập ổn định, dài hạn; có ≥ 03 tài sản tương tự</td><td>Dòng tiền dự báo được, thay đổi theo năm</td></tr></table></div>
<h4>Thu nhập thuần (I)</h4>
<p>I = tổng thu nhập tiềm năng − thất thu (do không sử dụng hết công suất, rủi ro thanh toán = tỷ lệ thất thu × thu nhập tiềm năng) − chi phí hoạt động. Ước tính từ ≥ 03 tài sản tương tự. Tính trước hay sau thuế phải <b>nhất quán với R</b>.</p>
<h4>Tỷ suất vốn hóa R</h4>
<ul><li><b>Phương pháp so sánh</b>: rút từ R của ≥ 03 tài sản tương tự.</li>
<li><b>Vốn vay – vốn sở hữu</b>: R = M × R<sub>m</sub> + (1 − M) × R<sub>e</sub>. R<sub>m</sub> = (thanh toán mỗi kỳ × số kỳ/năm) / gốc vay; R<sub>e</sub> = lợi nhuận vốn chủ hằng năm / vốn sở hữu.</li></ul>
<h4>Dòng tiền chiết khấu</h4>
<ul><li>Giai đoạn dự báo n căn cứ: tuổi đời kinh tế, giai đoạn nắm giữ, độ tin cậy thông tin, đủ dài để đạt thu nhập ổn định.</li>
<li>Dòng tiền = thu nhập − chi phí (có tính lãi vay), trước hay sau thuế nhất quán với r.</li>
<li>Giá trị cuối kỳ: giá thanh lý, giá thị trường tài sản tương tự, hoặc công thức hai giai đoạn (<b>g &lt; r</b>).</li>
<li>Tỷ suất chiết khấu r: thống kê tỷ suất sinh lời trung bình tài sản tương tự; WACC; CAPM. Phản ánh giá trị thời gian của tiền và rủi ro.</li></ul>
<p><b>Ưu/nhược.</b> Đơn giản, chính xác tương đối khi có chứng cứ thương vụ so sánh; nhưng cần nhiều điều chỉnh, giả định về tương lai hạn chế, thường dùng một R cố định.</p>`,
['V = I / R','R = M·Rm + (1−M)·Re','CF đều: niên kim; hai giai đoạn: Vn = CFn+1/(r−g)','Sau thuế đi với R sau thuế']);

L(2,'thangdu','Phương pháp thặng dư','Giá trị đất = giá trị phát triển − mọi chi phí phát triển.',`
<p><b>Khái niệm.</b> Giá trị BĐS có tiềm năng phát triển = giá trị ước tính của sự phát triển giả định − tất cả chi phí để tạo ra sự phát triển đó (<b>gồm lợi nhuận nhà đầu tư</b>). Nguyên tắc: sử dụng tốt nhất và hiệu quả nhất; đóng góp; dự kiến lợi ích tương lai.</p>
<h4>5 bước</h4>
<ol><li>Xác định phương án <b>sử dụng tốt nhất và hiệu quả nhất</b> (đặc điểm BĐS, quy hoạch sử dụng đất, quy hoạch xây dựng, giao thông, chuyển mục đích, quy định đầu tư xây dựng).</li><li>Giai đoạn dự báo dòng tiền.</li><li>Tổng doanh thu phát triển (≥ 03 BĐS tương tự; cách tiếp cận thị trường hoặc thu nhập).</li><li>Tổng chi phí phát triển.</li><li>Giá trị BĐS.</li></ol>
<h4>Chi phí phát triển gồm</h4>
<p>Chi phí đầu tư xây dựng (hạ tầng, công trình, thiết bị, tư vấn, quản lý dự án); chi phí dự phòng; chi phí kinh doanh (quảng cáo, bán hàng, quản lý vận hành); chi phí tài chính, thuế; chi phí hợp lý khác; <b>lợi nhuận nhà đầu tư</b>.</p>
<h4>Công thức</h4>
<ul><li>Thu và chi cùng một năm: <b>V = DT − CP</b> (mặt bằng giá tại thời điểm thẩm định giá).</li>
<li>Kéo dài nhiều năm: <b>V = Σ (DT<sub>t</sub> − CP<sub>t</sub>)/(1+r)<sup>t</sup></b>. Chiết khấu <b>đúng số năm</b> phát sinh của từng khoản.</li>
<li>Giá đất là ẩn số nếu lãi vay và lợi nhuận mua đất phụ thuộc vào nó: đặt X rồi giải phương trình.</li></ul>
<p>Tỷ suất chiết khấu phản ánh giá trị thời gian của tiền và rủi ro dòng tiền trong quá trình xây dựng, hoàn thành, vận hành.</p>`,
['V = DT − CP (lợi nhuận NĐT nằm trong CP)','Nhiều năm: chiết khấu đúng năm phát sinh','Giá đất cần tìm không đưa vào CP; dùng ẩn X nếu có lãi vay trên giá đất']);

L(2,'de2017','Đề thi BĐS 2017 (kỳ thi XII): cấu trúc và cách làm','Đề 150 phút: lý thuyết 2 điểm, bài tập 5 điểm, thặng dư 3 điểm.',`
<div class="tw"><table><tr><th>Câu</th><th>Điểm</th><th>Nội dung</th><th>Làm gì</th></tr>
<tr><td>1</td><td>2</td><td>Cách tiếp cận từ thu nhập: khái niệm, công thức, các bước, điều kiện áp dụng của phương pháp vốn hóa trực tiếp</td><td>Trả lời theo <b>khung 5 mảnh</b>; xem bài học thu nhập</td></tr>
<tr><td>2</td><td>5</td><td>BĐS 112 m² mặt tiền, nhà 3 tầng: a) chiết trừ ra giá đất; b) chi phí ra giá trị BĐS; c) thu nhập thuê hằng tháng; d) tỷ suất sinh lợi vốn chủ khi vay 30% lãi 8%; e) lãi vay tối đa</td><td>Làm 4 bài tính trong mục "Bài tính" (Đề 2017)</td></tr>
<tr><td>3</td><td>3</td><td>Thặng dư: khu đất 20.000 m² xây chung cư 18 tầng</td><td>Bài tính "Đề 2017, câu 3"</td></tr></table></div>
<ul><li>Đề ghi chú: các số % và tiền <b>làm tròn 2 số lẻ</b>.</li>
<li>Đề không cho diện tích sàn xây dựng trực tiếp và không cho đáp án; lời giải trên web là cách làm của trợ giảng, <b>nêu rõ giả định</b> (sàn = đất × số tầng). Khi thi nên ghi giả định ở đầu bài.</li>
<li>Câu d, e (đòn bẩy tài chính): vay có lợi khi lãi vay thấp hơn tỷ suất sinh lợi tài sản; lãi vay tối đa bằng tỷ suất sinh lợi đó.</li></ul>
<p>Các đề 2017 và 2019 trong dự án là ảnh quét; đề thi các kỳ gần đây không công bố công khai, nên chỉ có thể luyện theo dạng.</p>`,
['Câu 1: khung 5 mảnh cho vốn hóa trực tiếp','Câu 2: chiết trừ → chi phí → thu nhập thuê → đòn bẩy','Câu 3: thặng dư, chiết khấu 1 năm, đòn bẩy vay 60%']);

/* ====== MÔN 3 ====== */
L(3,'may_cp','Máy, thiết bị: cách tiếp cận chi phí','Chi phí tái tạo, thay thế, lợi nhuận nhà sản xuất, phương pháp tổng cộng.',`
<ul><li><b>Cách tiếp cận chi phí</b>: giá trị = chi phí tạo ra máy giống hệt hoặc tương tự − hao mòn.</li>
<li><b>Phương pháp chi phí thay thế</b>: Giá trị = chi phí thay thế (đã gồm lợi nhuận NSX/nhà đầu tư) − tổng hao mòn (không gồm hao mòn chức năng đã phản ánh trong chi phí thay thế).</li>
<li><b>Phương pháp chi phí tái tạo</b>: Giá trị = chi phí tái tạo (gồm lợi nhuận) − tổng hao mòn.</li>
<li><b>Phương pháp tổng cộng</b> (tài sản): cộng giá trị các bộ phận cấu thành; dùng khi giá trị máy phụ thuộc chủ yếu vào giá trị các bộ phận.</li>
<li><b>Thành phần chi phí</b>: vật liệu; máy thiết bị; nghiên cứu, thử nghiệm; nhân công, vận chuyển, thiết kế; tư vấn, quản lý; tài chính trong thời gian chế tạo; thuế không hoàn lại; lắp đặt, chạy thử; lợi nhuận nhà thầu, nhà sản xuất; thuế phí.</li>
<li><b>Lợi nhuận NSX</b>: tỷ lệ bình quân lợi nhuận trước thuế / (giá vốn + bán hàng + quản lý + tài chính) trong ≥ 03 năm gần nhất, ≥ 03 doanh nghiệp, số liệu từ báo cáo tài chính đã kiểm toán; nhân với chi phí chưa gồm lợi nhuận. Không xác định được thì dùng định mức nhà nước (nếu có).</li>
<li>Máy nhập khẩu: chi phí = giá CIF × tỷ giá + thuế nhập khẩu + vận chuyển, lắp đặt, chạy thử… Dùng cho máy mới hoặc được chế tạo; để đối chiếu với các cách tiếp cận khác.</li></ul>`,
['Giá trị = chi phí tái tạo/thay thế − hao mòn','Lợi nhuận NSX: ≥ 3 năm, ≥ 3 DN, BCTC kiểm toán','Tổng cộng: cộng giá trị bộ phận']);

L(3,'may_hm','Máy, thiết bị: ba loại hao mòn và các kỹ thuật','So sánh, tuổi đời, tổng cộng; tuổi đời hiệu quả.',`
<h4>Ba loại hao mòn</h4>
<ul><li><b>Vật lý</b>: tổn thất tính hữu dụng do sử dụng, thời gian, tác động môi trường.</li><li><b>Chức năng</b>: do chi phí vốn cao hoặc chi phí vận hành cao so với máy thay thế.</li><li><b>Ngoại biên</b>: do nhân tố bên ngoài (thị trường, thuế, quy định); thường không khắc phục được.</li></ul>
<p>Mỗi loại chia khắc phục được và không khắc phục được (chỉ coi là khắc phục được nếu chi phí khắc phục nhỏ hơn giá trị tăng thêm).</p>
<h4>Ba kỹ thuật xác định giá trị hao mòn</h4>
<div class="tw"><table><tr><th>Kỹ thuật</th><th>Công thức/cách làm</th></tr>
<tr><td><b>So sánh</b> (≥ 02 tài sản, ≤ 01 năm)</td><td>Hao mòn tài sản so sánh = chi phí mới − giá bán (đã loại giá đất nếu BĐS) → tỷ lệ hao mòn lũy kế → chia số năm (hao mòn hằng năm) → áp cho tuổi đời hiệu quả của tài sản thẩm định</td></tr>
<tr><td><b>Tuổi đời</b></td><td>Tỷ lệ hao mòn = tuổi đời hiệu quả / tuổi đời kinh tế (hoặc vật lý) × 100%</td></tr>
<tr><td><b>Tổng cộng</b></td><td>Cộng hao mòn vật lý (chi phí khắc phục; hoặc theo giá trị sử dụng; hoặc tuổi đời; hoặc Σ hao mòn bộ phận × tỷ trọng), chức năng, ngoại biên</td></tr></table></div>
<h4>Ba khái niệm tuổi đời</h4>
<ul><li><b>Thực tế</b>: số năm từ khi chế tạo xong.</li><li><b>Hiệu quả</b>: thể hiện thực trạng tại thời điểm thẩm định, phụ thuộc bảo dưỡng; có thể lớn hơn hoặc nhỏ hơn tuổi đời thực tế.</li><li><b>Kinh tế</b>: thời gian sử dụng còn phát huy hiệu quả kinh tế.</li></ul>
<h4>Hao mòn chức năng do chi phí vận hành cao (6 bước)</h4>
<p>Chi phí vận hành/đơn vị sản phẩm của máy thẩm định → của máy thay thế → chênh lệch; thời gian sử dụng còn lại; chênh lệch hằng năm (× sản lượng); giảm trừ thuế TNDN trên phần thu nhập tăng thêm; <b>hiện tại hóa</b> tổng chênh lệch.</p>
<h4>Khấu hao (nền kiến thức)</h4>
<p>Ba phương pháp: đường thẳng; số dư giảm dần có điều chỉnh (hệ số 1,5 cho thời gian ≤ 4 năm; 2 cho trên 4–6 năm; 2,5 cho trên 6 năm; cuối kỳ chuyển đường thẳng); theo sản lượng. Khung thời gian trích khấu hao trong tài liệu theo Thông tư 45/2013 (ví dụ: cần cẩu 10–20 năm; phương tiện vận tải đường bộ 6–10 năm; thiết bị viễn thông, điện tử, tin học 3–15 năm). Văn bản này đã được sửa đổi nhiều lần; kiểm tra bản hiện hành trước khi thi.</p>`,
['Hao mòn = vật lý + chức năng + ngoại biên','Tuổi đời hiệu quả ≠ thực tế','Kỹ thuật so sánh: ≥ 2 tài sản, ≤ 1 năm','Khấu hao nhanh: hệ số 1,5 / 2 / 2,5']);

L(3,'may_tn','Máy, thiết bị: cách tiếp cận thị trường và thu nhập','Điều chỉnh thanh toán, bảng điều chỉnh, NPV, IRR, WACC.',`
<h4>Thị trường (phương pháp so sánh)</h4>
<ul><li>Yếu tố so sánh của máy: nhãn hiệu, năm sản xuất, công suất, kích thước, trọng lượng, tình trạng, điều kiện thanh toán, thời điểm bán…</li>
<li>Điều chỉnh <b>điều khoản thanh toán</b> = phần trả ngay + phần trả chậm/(1+r)<sup>t</sup>.</li>
<li>Bảng điều chỉnh: giá thị trường → điều chỉnh từng yếu tố (tỷ lệ %, mức điều chỉnh, giá sau điều chỉnh) → giá chỉ dẫn → trung bình, chênh lệch so với trung bình (≤ 15%) → tổng điều chỉnh gộp, số lần, biên độ, tổng điều chỉnh thuần.</li>
<li>Chọn giá: bình quân (chất lượng thông tin ngang nhau) hoặc theo tài sản có gộp, số lần, biên độ, thuần nhỏ nhất.</li></ul>
<h4>Thu nhập (máy, dây chuyền)</h4>
<ul><li><b>Giá trị</b> = hiện giá dòng tiền thuần + hiện giá giá trị thu hồi <b>sau thuế</b> (thu hồi × (1 − t)).</li>
<li><b>WACC</b> = E% × r<sub>e</sub> + D% × r<sub>d</sub> × (1 − t).</li>
<li><b>NPV</b> = −Vốn đầu tư + Σ CF/(1+r)<sup>t</sup>; <b>IRR</b>: tỷ suất làm NPV = 0 (nội suy hoặc giải). Chấp nhận khi NPV &gt; 0, tức IRR &gt; r. Hai phương án loại trừ nhau: chọn NPV lớn hơn.</li>
<li>Khấu hao không là dòng tiền; theo cách giáo trình bài khấu hao: dòng tiền thuần = thu thuần (chưa khấu hao) + khấu hao (xem bài tính).</li></ul>`,
['Quy phần trả chậm về hiện tại','Giá thu hồi nhân (1 − thuế)','WACC dùng chi phí vay sau thuế','NPV > 0 ⇔ IRR > r']);

L(3,'tsvh','Thẩm định giá tài sản vô hình','Khái niệm, năm đặc điểm, các cách tiếp cận và phương pháp.',`
<h4>Tài sản vô hình</h4>
<p>Năm đặc điểm: (1) không có hình thái vật chất; (2) nhận biết được, có bằng chứng hữu hình về sự tồn tại; (3) được pháp luật công nhận, bảo vệ, có thể sở hữu tư nhân và chuyển giao; (4) có khả năng tạo thu nhập; (5) giá trị <b>có thể định lượng</b>.</p>
<p>Nhóm: tài sản trí tuệ và quyền SHTT; quyền mang lại lợi ích kinh tế (theo hợp đồng hoặc quy định); các mối quan hệ phi hợp đồng; tài sản vô hình khác thỏa điều kiện.</p>
<h4>Ba cách tiếp cận</h4>
<div class="tw"><table><tr><th>Cách tiếp cận</th><th>Phương pháp và ý chính</th></tr>
<tr><td>Thu nhập</td><td><b>Tiền sử dụng tài sản vô hình</b>: giá trị = hiện giá khoản tiền sử dụng tiết kiệm được sau thuế (như thể phải thuê/trả để dùng). Tỷ lệ tiền sử dụng từ giao dịch tương tự hoặc chia tách lợi nhuận giữa bên cho phép và bên nhận. Dòng tiền, thuế, chi phí duy trì phải nhất quán.<br><b>Lợi nhuận vượt trội</b>: chênh lệch hiện giá hai dòng tiền: có và không có tài sản vô hình.<br><b>Thu nhập tăng thêm</b>: hiện giá phần thu nhập đóng góp riêng của tài sản vô hình sau khi loại trừ đóng góp của các tài sản khác (vốn lưu động, TSCĐ hữu hình…).</td></tr>
<tr><td>Chi phí</td><td>Chi phí thay thế, chi phí tái tạo trừ hao mòn: chênh lệch chi phí nghiên cứu triển khai; chênh lệch chi phí vận hành; lỗi thời kinh tế; tuổi đời kinh tế và hiệu quả. Lợi nhuận NSX theo Chuẩn mực chi phí.</td></tr>
<tr><td>Thị trường</td><td>Phương pháp so sánh với giao dịch tài sản vô hình tương tự (quyền liên quan, điều khoản hợp đồng, ngành nghề, khu vực, tuổi đời…)</td></tr></table></div>
<h4>Thu nhập tăng thêm: 5 bước</h4>
<ol><li>Dòng doanh thu kỳ vọng liên quan đến tài sản vô hình.</li><li>Dòng thu nhập ròng sau chi phí, khấu hao, thuế.</li><li>Xác định khoản đóng góp của các tài sản đóng góp (giá trị thị trường × tỷ suất sinh lời hợp lý).</li><li>Thu nhập riêng của tài sản vô hình = thu nhập ròng − đóng góp các tài sản khác (cộng lại khấu hao TSCĐ đóng góp, trừ tiền mua TSCĐ mới).</li><li>Chiết khấu về hiện tại.</li></ol>`,
['5 đặc điểm; giá trị định lượng được','Thu nhập: tiền sử dụng, lợi nhuận vượt trội, thu nhập tăng thêm','Chi phí: thay thế/tái tạo; lỗi thời kinh tế','Dòng tiền, thuế, chi phí duy trì nhất quán']);

L(2,'vandung','Vận dụng: đòn bẩy tài chính, lãi thực, điều chỉnh thanh toán và pháp lý','Các điểm tính toán hay bị hỏi chéo giữa các phương pháp.',`
<h4>Đòn bẩy tài chính (vay vốn đầu tư)</h4>
<p>Tỷ suất sinh lợi trên vốn chủ: <b>ROE = [R<sub>0</sub> − i × (D/V)] / (E/V)</b>, với R<sub>0</sub> là tỷ suất sinh lợi của tài sản, i lãi vay, D/V tỷ lệ vay, E/V = 1 − D/V.</p>
<ul><li>Ví dụ: R<sub>0</sub> = 10%, vay 50%, lãi vay 8% → ROE = (10% − 8% × 50%) / 50% = <b>12%</b>.</li>
<li>Vay có lợi khi <b>lãi vay &lt; tỷ suất sinh lợi của tài sản</b>; khi lãi vay lớn hơn thì vay càng nhiều ROE càng thấp.</li></ul>
<h4>Lãi suất thực</h4>
<p>Lãi danh nghĩa 12%/năm ghép quý: (1 + 12%/4)<sup>4</sup> − 1 = <b>12,55%</b>. Dùng lãi thực để so sánh các nguồn vốn có kỳ ghép lãi khác nhau.</p>
<h4>Điều chỉnh khi so sánh</h4>
<ul><li>Điều chỉnh <b>điều kiện thanh toán và điều kiện tài chính trước</b>, vì phải quy giá về giá tiền mặt tương đương rồi mới điều chỉnh các yếu tố khác.</li>
<li>Pháp lý: nếu tài sản so sánh chưa có sổ nhưng đủ điều kiện cấp, cộng/trừ khoản nghĩa vụ tài chính phải nộp (ví dụ tiền sử dụng đất) để đưa về cùng mặt bằng pháp lý với tài sản thẩm định.</li>
<li>Điều chỉnh theo tỷ lệ hay theo số tiền phải <b>nhất quán</b> trong cả bảng; tổng điều chỉnh thuần/gộp lớn là dấu hiệu tài sản không đủ tương đồng.</li></ul>`,
['ROE = [R0 − i·D/V] / (E/V)','Vay có lợi khi lãi vay < sinh lợi tài sản','Lãi thực = (1 + r/m)^m − 1','Điều chỉnh thanh toán, tài chính trước']);

export { MON, LES };
