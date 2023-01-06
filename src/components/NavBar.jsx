function NavBar() {
  return (
    <>
      <div className="container__buttons d-flex justify-content-between p-3">
        <button
          class="button__search"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#searchMenu"
          aria-controls="searchMenu"
        >
          <span className="texto__claro">Seach for places</span>
        </button>
        <button className="button__localitation">
          <span class="material-symbols-outlined">my_location</span>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-start offcanvas__search"
        data-bs-scroll="true"
        tabindex="-1"
        id="searchMenu"
        aria-labelledby="searchMenuLabel"
      >
        <div class="offcanvas-header d-flex flex-row-reverse">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body h-100">
          
            <div className="row g-0 form__search">
              <input
                className="col-8 me-2"
                type="search"
                placeholder="search location"
                aria-label="Search"
              />
              <button className="col" type="">
                Search
              </button>
            </div>
          
          <button className="button__pais texto__claro">M&eacute;xico</button>
          <button className="button__pais texto__claro">Lima</button>
          <button className="button__pais texto__claro">Guatemala</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
