"use client";
import React from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker() {
  const inputRef = React.useRef();
  const [image, setImage] = React.useState(null);
  function handlePickImage() {
    inputRef.current.click();
  }
  function handleChange() {
    const file = inputRef.current.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const data = reader.result;
      setImage(data);
    };

    reader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <input
        type="file"
        accept="image/*"
        className={classes.input}
        ref={inputRef}
        onChange={handleChange}
        name="image"
      />

      <div className={classes.preview}>
        {image ? (
          <Image src={image} alt="hello" fill />
        ) : (
          <div> no image Yet</div>
        )}
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handlePickImage}
      >
        Pick Image
      </button>
    </div>
  );
}
