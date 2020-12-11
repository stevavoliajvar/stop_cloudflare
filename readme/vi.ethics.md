# Vấn đề đạo đức

![](../image/itsreallythatbad.jpg)
![](../image/telegram/c81238387627b4bfd3dcd60f56d41626.jpg)

"Không ủng hộ công ty vô hiệu này"

"Công ty của bạn không đáng tin cậy. Bạn yêu cầu thực thi DMCA nhưng có nhiều vụ kiện vì không làm như vậy."

"Họ chỉ kiểm duyệt những người nghi vấn về đạo đức của họ."

"Tôi đoán sự thật là không thuận tiện và tốt hơn là bị che khuất khỏi tầm nhìn của công chúng."  -- [phyzonloop](https://twitter.com/phyzonloop)


---


<details>
<summary>nhấp vào đây

## CloudFlare spam mọi người
</summary>


Cloudflare đang gửi email spam đến những người dùng không phải Cloudflare.

- Chỉ gửi email cho những người đăng ký đã chọn tham gia
- Khi người dùng nói "dừng", sau đó ngừng gửi email

Nó đơn giản mà. Nhưng Cloudflare không quan tâm.
Cloudflare cho biết việc sử dụng dịch vụ của họ có thể ngăn chặn tất cả những kẻ gửi thư rác hoặc những kẻ tấn công.
Làm thế nào chúng ta có thể dừng Cloudflare mà không cần kích hoạt Cloudflare?


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfspam01.jpg) | ![](../image/cfspam03.jpg) |
| ![](../image/cfspam02.jpg) | ![](../image/cfspambrittany.jpg)<br>![](../image/cfspamtwtr.jpg) |

</details>

---

<details>
<summary>nhấp vào đây

## Xóa bài đánh giá của người dùng
</summary>


Cloudflare kiểm duyệt đánh giá tiêu cực.
Nếu bạn đăng văn bản chống Cloudflare trên Twitter, bạn có cơ hội nhận được câu trả lời từ nhân viên Cloudflare với thông báo "Không, không phải".
Nếu bạn đăng một đánh giá tiêu cực trên bất kỳ trang web đánh giá nào, họ sẽ cố gắng kiểm duyệt nó.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfcenrev_01.jpg)<br>![](../image/cfcenrev_02.jpg) | ![](../image/cfcenrev_03.jpg) |

</details>

---

<details>
<summary>nhấp vào đây

## Chia sẻ thông tin cá nhân của người dùng
</summary>


Cloudflare có một vấn đề quấy rối lớn.
Cloudflare chia sẻ thông tin cá nhân của những người phàn nàn về các trang được lưu trữ.
Đôi khi họ yêu cầu bạn cung cấp ID thật của bạn.
Nếu bạn không muốn bị quấy rối, tấn công, đánh đập hoặc bị giết, bạn nên tránh xa các trang web Cloudflared.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfdox_what.jpg) | ![](../image/cfdox_swat.jpg) |
| ![](../image/cfdox_kill.jpg) | ![](../image/cfdox_threat.jpg) |
| ![](../image/cfdox_dox.jpg) | ![](../image/cfdox_ex1.jpg)<br>![](../image/cfdox_ex2.jpg) |

</details>

---

<details>
<summary>nhấp vào đây

## Công ty kêu gọi đóng góp từ thiện
</summary>


CloudFlare đang yêu cầu đóng góp từ thiện.
Thật kinh hoàng khi một tập đoàn của Mỹ lại xin từ thiện cùng với các tổ chức phi lợi nhuận có lý do chính đáng.
Nếu bạn thích chặn người khác hoặc lãng phí thời gian của người khác, bạn có thể muốn đặt một số bánh pizza cho nhân viên Cloudflare.


![](../image/cfdonate.jpg)

</details>

---

<details>
<summary>nhấp vào đây

## Kết thúc các trang web
</summary>


Bạn sẽ làm gì nếu trang web của bạn đột ngột ngừng hoạt động?
Có báo cáo rằng Cloudflare đang âm thầm xóa cấu hình của người dùng hoặc dừng dịch vụ mà không có bất kỳ cảnh báo nào.
Chúng tôi khuyên bạn nên tìm nhà cung cấp tốt hơn.

![](../image/cftmnt.jpg)

</details>

---

<details>
<summary>nhấp vào đây

## Phân biệt nhà cung cấp trình duyệt
</summary>


CloudFlare ưu đãi những người sử dụng Firefox trong khi đối xử thù địch với những người dùng không sử dụng Tor-Browser thay vì Tor.
Người dùng Tor của những người từ chối thực thi javascript không miễn phí một cách hợp pháp cũng nhận được sự đối xử thù địch.
Sự bất bình đẳng về truy cập này là sự lạm dụng tính trung lập của mạng và lạm dụng quyền lực.

![](../image/browdifftbcx.gif)

- Trái: Trình duyệt Tor, Phải: Chrome. Địa chỉ IP giống nhau.

![](../image/browserdiff.jpg)

- Trái: Trình duyệt Tor đã tắt Javascript, Đã bật cookie
- Phải: Đã bật JavaScript của Chrome, Đã tắt cookie

![](../image/cfsiryoublocked.jpg)

- QuteBrowser (trình duyệt nhỏ) không có Tor (Clearnet IP)

![](../image/lynx_cloudflare.gif)

- Lynx


| ***Trình duyệt*** | ***Tiếp cận điều trị*** |
| --- | --- |
| Tor Browser (Javascript được kích hoạt) | được phép truy cập |
| Firefox (Javascript được kích hoạt) | truy cập xuống cấp |
| Chromium (Javascript được kích hoạt) | truy cập xuống cấp |
| Chromium or Firefox (Javascript bị vô hiệu hóa) | truy cập bị từ chối |
| Chromium or Firefox (Cookie bị vô hiệu hóa) | truy cập bị từ chối |
| QuteBrowser | truy cập bị từ chối |
| lynx | truy cập bị từ chối |
| w3m | truy cập bị từ chối |
| wget | truy cập bị từ chối |


Tại sao không sử dụng nút Âm thanh để giải quyết thử thách dễ dàng?

Có, có một nút âm thanh, nhưng nó luôn không hoạt động trên Tor.
Bạn sẽ nhận được thông báo này khi bạn nhấp vào nó:

```
Thử lại sau
Máy tính hoặc mạng của bạn có thể đang gửi các truy vấn tự động.
Để bảo vệ người dùng của mình, chúng tôi không thể xử lý yêu cầu của bạn ngay bây giờ.
Để biết thêm chi tiết, hãy truy cập trang trợ giúp của chúng tôi
```

</details>

---

<details>
<summary>nhấp vào đây

## Đàn áp cử tri
</summary>


Cử tri ở các tiểu bang Hoa Kỳ đăng ký bỏ phiếu cuối cùng thông qua trang web của thư ký tiểu bang tại tiểu bang nơi họ cư trú.
Các văn phòng thư ký tiểu bang do đảng Cộng hòa kiểm soát tham gia vào việc đàn áp cử tri bằng cách ủy quyền trang web của thư ký tiểu bang thông qua Cloudflare.
Sự đối xử thù địch của Cloudflare đối với người dùng Tor, vị trí MITM của nó như là một điểm giám sát toàn cầu tập trung và vai trò bất lợi của nó nói chung khiến các cử tri tiềm năng miễn cưỡng đăng ký.
Những người theo chủ nghĩa tự do đặc biệt có xu hướng coi trọng sự riêng tư.
Biểu mẫu đăng ký cử tri thu thập thông tin nhạy cảm về khuynh hướng chính trị của cử tri, địa chỉ thực tế cá nhân, số an sinh xã hội và ngày sinh.
Hầu hết các bang chỉ công bố công khai một tập hợp con của thông tin đó, nhưng Cloudflare sẽ thấy tất cả thông tin đó khi ai đó đăng ký bỏ phiếu.

Lưu ý rằng đăng ký giấy không phá vỡ Cloudflare vì thư ký của nhân viên nhập dữ liệu tiểu bang có thể sẽ sử dụng trang web Cloudflare để nhập dữ liệu.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfvotm_01.jpg) | ![](../image/cfvotm_02.jpg) |

- Change.org là một trang web nổi tiếng để thu thập phiếu bầu và hành động.
“mọi người ở khắp mọi nơi đang bắt đầu các chiến dịch, huy động những người ủng hộ và làm việc với những người ra quyết định để thúc đẩy các giải pháp.”
Thật không may, nhiều người không thể xem change.org do bộ lọc tích cực của Cloudflare.
Họ đang bị chặn ký vào bản kiến ​​nghị, do đó loại họ khỏi một quy trình dân chủ.
Sử dụng nền tảng không đám mây khác như OpenPetition giúp khắc phục sự cố.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/changeorgasn.jpg) | ![](../image/changeorgtor.jpg) |

- "Dự án Athen" của Cloudflare cung cấp bảo vệ miễn phí cấp doanh nghiệp cho các trang web bầu cử của tiểu bang và địa phương.
Họ nói rằng "cử tri của họ có thể truy cập thông tin bầu cử và đăng ký cử tri" nhưng đây là một lời nói dối vì nhiều người không thể duyệt qua trang web.

</details>

---

<details>
<summary>nhấp vào đây

## Bỏ qua tùy chọn của người dùng
</summary>


Nếu bạn chọn không tham gia điều gì đó, bạn sẽ không nhận được email nào về điều đó.
Cloudflare bỏ qua sở thích của người dùng và chia sẻ dữ liệu với các công ty bên thứ ba mà không có sự đồng ý của khách hàng.
Nếu bạn đang sử dụng gói miễn phí của họ, đôi khi họ gửi email cho bạn yêu cầu mua đăng ký hàng tháng.

![](../image/cfviopl_tp.jpg)

</details>

---

<details>
<summary>nhấp vào đây

## Nói dối về việc xóa dữ liệu của người dùng
</summary>


Theo blog của khách hàng cũ của cloudflare này, Cloudflare đang nói dối về việc xóa tài khoản.
Ngày nay, nhiều công ty giữ dữ liệu của bạn sau khi bạn đã đóng hoặc xóa tài khoản của mình.
Hầu hết các công ty tốt đều đề cập đến nó trong chính sách bảo mật của họ.
Cloudflare? Không.

```
2019-08-05 CloudFlare đã gửi cho tôi xác nhận rằng họ đã xóa tài khoản của tôi.
2019-10-02 Tôi đã nhận được email từ CloudFlare "vì tôi là khách hàng"
```

Cloudflare không biết về từ "loại bỏ".
Nếu nó thực sự bị xóa, tại sao khách hàng cũ này lại nhận được email?
Anh ấy cũng đề cập rằng chính sách bảo mật của Cloudflare không đề cập đến nó.

```
Chính sách bảo mật mới của họ không đề cập đến việc lưu giữ dữ liệu trong một năm.
```

![](../image/cfviopl_notdel.jpg)

Làm thế nào bạn có thể tin tưởng Cloudflare nếu chính sách bảo mật của họ là LỜI NÓI DỐI?

- [Hơn một năm trôi qua kể từ khi tôi hủy tài khoản Cloudflare của mình](https://shkspr.mobi/blog/2020/09/dont-trust-cloudflare-with-your-personal-data/)

</details>

---

<details>
<summary>nhấp vào đây

## Giữ thông tin cá nhân của bạn
</summary>


Xóa tài khoản Cloudflare là mức khó.

```
Gửi phiếu hỗ trợ bằng danh mục "Tài khoản",
và yêu cầu xóa tài khoản trong nội dung thư.
Bạn phải không có miền hoặc thẻ tín dụng nào được đính kèm với tài khoản của mình trước khi yêu cầu xóa.
```

Bạn sẽ nhận được email xác nhận này.

![](../image/cf_deleteandkeep.jpg)

"Chúng tôi đã bắt đầu xử lý yêu cầu xóa của bạn" nhưng "Chúng tôi sẽ tiếp tục lưu trữ thông tin cá nhân của bạn".

Bạn có thể "tin tưởng" vào điều này?


- Cách hủy tài khoản Cloudflare của bạn

1. Đăng nhập vào bảng điều khiển Cloudflare của bạn.
2. Xóa tất cả các vùng (miền) khỏi trang tổng quan của bạn.
3. Nhấp vào liên kết hỗ trợ.
4. Gửi một vé mới. Nói với họ rằng bạn muốn đóng tài khoản của mình.
5. Chờ vài ngày.
6. Nhân viên Cloudflare sẽ yêu cầu xác nhận của bạn và lý do tại sao bạn quyết định rời khỏi Cloudflare.
7. Gửi trả lời một lần nữa.
8. Chờ vài ngày.
9. Bạn sẽ nhận được thông báo: Chúng tôi đã xóa tài khoản của bạn thành công


</details>

---

## Thông tin khác

- Joseph Sullivan (Joe Sullivan) ([Cloudflare CSO](https://twitter.com/eastdakota/status/1296522269313785862))
  - [Ex-Uber security head charged in connection with the cover-up of a 2016 hack that affected 57 million customers](https://www.businessinsider.com/uber-data-hack-security-head-joe-sullivan-charged-cover-up-2020-8)
  - [Former Chief Security Officer For Uber Charged With Obstruction Of Justice](https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-charged-obstruction-justice)


---


## Vui lòng tiếp tục sang trang tiếp theo:   [Giọng nói của Cloudflare](../PEOPLE.md)

![](../image/freemoldybread.jpg)
![](../image/cfisnotanoption.jpg)
