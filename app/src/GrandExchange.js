import React from "react";

export default function GrandExchange({
  items,
  setPage,
  pagination,
  getSearchData,
}) {
  function handleInput(e) {
    if (e.key === "Enter") {
      getSearchData(e.target.value);
    }
  }
  return (
    <>
      <input
        type="search"
        className="form-control form-control-dark text-bg-dark mt-4 mb-2"
        placeholder="Search GE Items"
        aria-label="Search"
        onKeyDown={(e) => handleInput(e)}
      />
      <button
        className="navButton mb-2"
        onClick={() => setPage(pagination - 1)}
      >
        Previous Page
      </button>
      <button
        className="navButton mb-2"
        onClick={() => setPage(pagination + 1)}
      >
        Next Page
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjCAYAAACKPxqrAAACWUlEQVR42rXXTWsTURgF4EAEMQu1pV/BViptYrUUqiIELBQ/EGkggoVuajelxYVdlFBEEQRBxK5c9DeIS6H9A12Vdukye//HlXPhTM99cycz+QocQie573PvnXcm00Ih56taKjgk61hfLxT7/XPDh8XtsYEhB1tLPiyuxxrPKv1jCn05vJIU17+HAmn+XBSHB6G4ZmjQ8XkxyEAg7a48UE+Ytm8eiOkas22NnJwV26KfI31BWEkMsWDXK7JXfxbWNcLiX+uzPtuPRjIx2wyZGIH3K2UPMOvL46mYIhjHCaZi+kUWZ94+LvvEbkVE8DnGM4frc/HV4QCAxv1R9+n5pHsxdz0BNIoRwRhEIWIEE4Rfrt0peeTjy7J7VbnE+DlCTMchm8tjPort1KYuMQ64N3rVLY5d89ja3ZvuW30mKGQxTEjzeuFGG4bvfq5Pt0MPb5U8hOAYzplFLKCQYqiBySLB9lnIYmmAhTgW5xrhJZJAQAg9qEwlW8huTAN0Yoheg0jzabkdwrtCFrNFtXAMYJJzpAjeFcKs956MBxdkrLACraOq+9ucT4dQlJBiaHV2ki2ss/93uutav6r+8mh9qPqOC7oORdl9MYiNAQgFLYDCQL6/uZ0EUNB1CvF8xSCuSvceAIJihLAiID1D2FauAtvBIsiPxqyHuHU8HmydFlckDeJg3SbcZvBuAUwKjdQzhGK8aWI1DIEoondwdF8eqFNxJoooppC9nvQcdQKC207Wz3katL86GRSOAT09oFjI3l6Qd7UJ1/f/SiygEILiAwE6PYLlfuKR1384Z0exT2ro4QAAAABJRU5ErkJggg=="
                alt="Buy price icon"
              />{" "}
              Buy price
              <img th="" />
            </th>
            <th scope="col">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjCAYAAACKPxqrAAACSUlEQVR42rXWT0sbQRgG8IUI0hz8E/wXWiXFJmqLoC2FQAWxLaUYSKGCF/UiihRbKEHE0lOhlObUg59B+jU8iR495u73mOYZeCbvvs5ss8sm8LBhk31/M7PvThJFGV+1YmSiQb+A/P2zbQaKETnZWzbN19XBYBJpbw4NBtPI1adC/pgPYXLDkpDcsH6QXDAJMT5Efo5kgjBChjO7/lKIhTNhMkGMXMIQxO+mBn40KjZpoEzA/otxGw3dtAqxpJoRgeO1sgOQrZXJVBBXIIgA4CxQnNl9WTa+rYfREOq0t+b9s8MJAM2nJfPtzbR5Oz9iAUa3ue5EDREj2GvhLoDUHxctcvaubN5Xexg+k60uu1Ge21mZcBByUJ/pYYSWSsPm2cQDi20ujJmfjVk3AMYV777HgBCe+7A4aiGJ4XvfG4/uQ88fFi2E4BzumcYI6ACSGGpgsEhs+TSksRCgIV6Le43w8XAQEEKr1Rm3hOzGECAHhuhnsLVRvg/hKCGN6aKysA9g3D2SCI4Swqg/v5p0WKiwBDrnNXPbehKG2EWAJIZWZyfpwnL0d5eHpnNRs49H57RmOy7WdSjK7vNBbAxAKKgBFAby6+OcC6BY10mI98sHcVZy7QEgKEYIMwKSGcKychZYDhZBfjcrFuLS8Xxs6WRxiYQgXiyXCdsMjhrAoNBImSEU46aJ2TAEvIjcwdF9/UBJxRkvIjEJ6edJ3qMkILbt/O/nPAR9XZ+OFfYBmf6gaEhvL8hRfSo9EAIlhKB4LkDSfzyZfq//B+MHFCu2ts2TAAAAAElFTkSuQmCC"
                alt="Sell price icon"
              />{" "}
              Sell price
            </th>
            <th scope="col">Margin</th>
            <th scope="col">Ge Limit</th>
            <th scope="col">Examine</th>
          </tr>
        </thead>
        <tbody>
          {items.map((el) => {
            return (
              <tr>
                <th scope="row">
                  <img
                    className="itemIcons"
                    src={`https://oldschool.runescape.wiki/images/${el.icon.replaceAll(
                      " ",
                      "_"
                    )}?a4ed9`}
                  />
                  {el.name}
                </th>
                <td>{el.value}</td>
                <td>{el.value}</td>
                <td>10</td>
                <td>{el.limit}</td>
                <td>{el.examine}</td>
              </tr>
              // <div
              //   className="col-md-6 col-sm-12 d-flex align-items-stretch my-2"
              //   key={el.name}
              // >

              //   <div className="card w-100 bg-light bg-opacity-75">
              //       <img className = 'itemIcons' src = {`https://oldschool.runescape.wiki/images/${el.icon.replaceAll(' ', '_')}?a4ed9`} />
              //     <div className="card-body fst-italic">
              //       <h3 className="card-title text-center ">{el.name}</h3>
              //       <h5 className="card-text text-center">{el.value}</h5>
              //       <div className="card-text text-center align-items-center">
              //         {el.examine}
              //       </div>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
