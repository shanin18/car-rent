import Image from "next/image";

const SellerDetail = () => {
  return (
    <div className="d-flex align-items-center mb30">
      <div className="flex-shrink-0">
        <Image
          width={60}
          height={45}
          className="mr-3 author_img w60"
          src="https://i.ibb.co/gDjMYp3/logo-2.png"
          alt="author.png"
        />
      </div>

      <div className="flex-grow-1 ms-3">
        <h5 className="mt0 mb5 fz16 heading-color fw600">
          Niljyoti — 93, A.K. Road, Agartala, India, Tripura
        </h5>
        <p className="mb0 tdu">
          <span className="flaticon-phone-call pr5 vam" />
          094364 56088
        </p>
      </div>
    </div>
  );
};

export default SellerDetail;
