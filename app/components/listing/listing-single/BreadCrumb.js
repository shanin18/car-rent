const BreadCrumb = () => {
  return (
    <ol className="breadcrumb float-start">
      <li className="breadcrumb-item">
        <a href="#">Our Cars</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Details
      </li>
    </ol>
  );
};

export default BreadCrumb;
