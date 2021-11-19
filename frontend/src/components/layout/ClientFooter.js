/* eslint-disable jsx-a11y/anchor-is-valid */


const ClientFooter = props => {
  return (
    <footer>
    <div className="bg-white d-flex justify-content-center py-5">
      <div className="footer-col">
        <h6 className="mb-4">HỖ TRỢ KHÁCH HÀNG</h6>
        <p className="s-small mb-1 c-red">Hotline chăm sóc khách hàng: 1900-6035</p>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Câu hỏi thường gặp</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Gửi yêu cầu hỗ trợ</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Hướng dẫn đặt hàng</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Phương thức vận chuyển</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Chính sách đổi trả</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Hướng dẫn trả góp</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Chính sách hàng nhập khẩu</p></a>
        <p className="s-small mb-1">Hỗ trợ khách hàng: hotro@woto.vn</p>
        <p className="s-small mb-1">Báo lỗi bảo mật: security@woto.vn</p>
      </div>
      <div className="footer-col">
        <h6 className="mb-4">VỀ WOTO</h6>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Giới thiệu Woto</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Tuyển dụng</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Chính sách bảo mật thanh toán</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Chính sách bảo mật thông tin cả nhân</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Chính sách giải quyết khiếu nại</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Điều khoản sử dụng</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Giới thiệu Wolo Xu</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Bán hàng doanh nghiệp</p></a>
      </div>
      <div className="footer-col">
        <h6 className="mb-4">HỢP TÁC VÀ LIÊN KẾT</h6>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Quy chế hoạt động Sàn GDTMĐT</p></a>
        <a className="s-small" href="#"><p className="mt-2 mb-2">Bán hàng cùng Woto</p></a>        
      </div>
      <div className="footer-col">
        <h6 className="mb-4">KẾT NỐI VỚI CHÚNG TÔI</h6>
        <a href="#" className="ht-2 d-inline-block me-1"><img className="s-hfull" src="assets/images/facebook.svg" alt="Not found" /></a>
        <a href="#" className="ht-2 d-inline-block mx-1"><img className="s-hfull" src="assets/images/youtube.svg" alt="Not found" /></a>
        <a href="#" className="ht-2 d-inline-block ms-1"><img className="s-hfull" src="assets/images/zalo.svg" alt="Not found" /></a>
      </div>
    </div>
  </footer>
  )
}

export default ClientFooter;