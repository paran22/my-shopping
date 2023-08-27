import React, { useState } from "react";
import { uploadImage } from "../api/api";
import useProducts from "../hooks/useProducts";

export default function AddProductForm() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [resultMsg, setResultMsg] = useState(null);

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const { addProduct } = useProducts();

  const onSubmit = async (e) => {
    setIsUploading(true);
    e.preventDefault();
    if (!file) return;
    const imageUrl = await uploadImage(file);
    addProduct.mutate({ product, imageUrl }, {
      onSuccess: () => setResultMsg("성공적으로 등록되었습니다."),
      onError: () => setResultMsg("에러가 발생했습니다."),
    })
    setTimeout(() => {
      setResultMsg(null);
    }, 2000);
    setIsUploading(false);
  };
  const inputStyle = "border px-2 py-1";
  return (
    <section className="flex flex-col gap-3 items-center my-4">
      <span className="font-bold">새로운 제품 등록</span>
      {resultMsg && <p className="font-semibold">{resultMsg}</p>}
      {file && (
        <img className="w-2/5" src={URL.createObjectURL(file)} alt="file" />
      )}
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <input
          className={inputStyle}
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={onChange}
        ></input>
        <input
          className={inputStyle}
          value={product.title ?? ""}
          onChange={onChange}
          type="text"
          placeholder="제품명"
          name="title"
        ></input>
        <input
          className={inputStyle}
          value={product.price ?? 0}
          onChange={onChange}
          type="number"
          placeholder="가격"
          name="price"
        ></input>
        <input
          className={inputStyle}
          value={product.category ?? ""}
          onChange={onChange}
          type="text"
          placeholder="카테고리"
          name="category"
        ></input>
        <input
          className={inputStyle}
          value={product.description ?? ""}
          onChange={onChange}
          type="text"
          placeholder="제품 설명"
          name="description"
        ></input>
        <input
          className={inputStyle}
          value={product.options ?? ""}
          onChange={onChange}
          type="text"
          placeholder="옵션들(콤마(,)로 구분"
          name="options"
        ></input>
        <button className="border bg-primary px-2 py-1" disabled={isUploading}>
          {isUploading ? "업로드 중 ..." : "제품 등록하기"}
        </button>
      </form>
    </section>
  );
}
