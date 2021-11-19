/* eslint-disable jsx-a11y/anchor-is-valid */

const ClientHeader = props => {
  return (
    <header className="p-0">
    <div className="bg-blue c-white">
      <div className="container-fluid p-4">
        <div className="container d-flex align-items-start justify-content-between">
          <div className="nav-brand s-large bold d-inline-block">WShopping</div>
          <div className="c-dropdown d-inline-block d-flex align-items-center">
            <img className="s-2" src="assets/images/nav-white.svg" alt="Not found" />              
              <div className="px-2">
                <div className="s-small">Danh mục</div>
                <div>Sản phẩm</div>  
              </div>
              <i className="fas fa-caret-down"></i>
              <div className="c-dropdown-menu bg-white c-black shadow-1">
                <h1 className="c-dropdown-item">Hello world</h1>
                <p className="c-dropdown-item">Lorem ipsudddddddddddddddddddddddddddm dodddddddddddddddlor sit, </p>  
              </div>
          </div>
          <div className="search d-inline-block">
            <input type="text" style={{width: "550px", marginRight: "1rem"}} className="s-normal p-2 bd-radius-5 bd-width-0"  placeholder="Tôi muốn mua . . ."/>
            <button className="p-2 bd-width-0"><i className="fas fa-search"></i>Tìm kiếm</button>
            <div className="container">
              <ul className="d-flex s-small">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
              </ul>
            </div>        
          </div>
          <div className="c-dropdown d-inline-block d-flex align-items-center">
            <img className="s-2" src="assets/images/user-white.svg" alt="Not found" />              
            <div className="px-2">
              <div className="s-small">Tài khoản</div>
              <div>Nguyễn Thanh Nhật</div>  
            </div>
            <i className="fas fa-caret-down"></i>
            <div className="c-dropdown-menu bg-white c-black shadow-1">
              <h1 className="c-dropdown-item">Hello world</h1>
              <p className="c-dropdown-item">Lorem ipsudddddddddddddddddddddddddddm dodddddddddddddddlor sit, </p>  
            </div>
          </div>
        <a href="#" className="cart d-flex">
            <img className="s-2" src="assets/images/cart-white.svg" alt="Not found" />
            <span className="s-small ms-2 align-self-end">Giỏ hàng</span>        
          </a>
        </div>
    </div>
    </div>
  </header>
  )
}

export default ClientHeader;