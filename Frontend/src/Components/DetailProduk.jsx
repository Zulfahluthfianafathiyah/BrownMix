import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../Redux/action/detailProductAction";
import { getDataProductById } from "../Redux/action/productAction";
import { useParams } from "react-router-dom";

const DetailProduk = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.detailreducer);
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (id) {
      dispatch(getDetailProduct(id));
      dispatch(getDataProductById(id));
    }
  }, [dispatch, id]);
  if (!detail || !product.product) {
    return <div>Detail produk tidak tersedia</div>;
  }

  const detailItems = [
    {
      label: "Varian Rasa",
      value: detail.varian_rasa || "Data tidak tersedia",
    },
    { label: "Bentuk", value: detail.bentuk || "Data tidak tersedia" },
  ];

  return (
    <div className="bg-greyLighter p-4 mr-2 space-y-4 flex items-start">
      <div className="mr-4">
        {product.product.gambar ? (
          <img
            src={product.product.gambar}
            alt={product.product.nama}
            width={200}
            height={600}
            className="rounded-md"
          />
        ) : (
          <div>Gambar tidak tersedia</div>
        )}
      </div>

      <div className="flex-1">
        <h1 className="text-secondary text-xl font-semibold font-Satoshi-Regularbold">
          {product.product.nama || "Nama produk tidak tersedia"}
        </h1>
        <h1 className="text-secondary text-xl font-semibold font-Satoshi-Regularbold">
          {product.product.harga || "Harga tidak tersedia"}
        </h1>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < product.product.rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-yellow-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 12.146l3.472 2.092-.933-3.43 2.613-2.135-3.453-.026L8 4.256 6.307 8.641l-3.453.026 2.613 2.135-.933 3.43L8 12.146z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-yellow-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 12.146l3.472 2.092-.933-3.43 2.613-2.135-3.453-.026L8 4.256 6.307 8.641l-3.453.026 2.613 2.135-.933 3.43L8 12.146z" />
                </svg>
              )}
            </span>
          ))}
          <span className="text-sm text-gray-600">
            ({product.product.rating || 0} / 5)
          </span>
        </div>

        <div className="mt-4 w-full text-base font-light font-Satoshi-Light">
          <div className="space-y-4">
            {detailItems.map((item, index) => (
              <p
                key={index}
                className="text-base font-light font-Satoshi-Light"
              >
                {item.label}: {item.value}
              </p>
            ))}
            <p className="mt-4 text-base font-light font-Satoshi-Light">
              {detail.deskripsi || "Deskripsi tidak tersedia"}
            </p>
            <a
              href={`https://wa.me/6282282151826?text=${encodeURIComponent(
                "Halo, saya tertarik dengan produk ini."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none">
                Pesan
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
