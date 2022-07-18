import "./ImageUploader.css";
import ImageUploading from "react-images-uploading";

const ImageUploader = ({ images, setImages }) => {
    const maxNumber = 1;

    const onChange = (imageList) => {
        setImages(imageList);
    };

    return (
        <div className="image-uploader">
            <h3>Upload your images here:</h3>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            className="imageUploaderBtn"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drag and Drop images here
                        </button>
                        &nbsp;
                        <button className="imageUploaderBtn" onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image["data_url"]} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button className="imageUploaderBtn" onClick={() => onImageUpdate(index)}>Update</button>
                                    <button className="imageUploaderBtn" onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default ImageUploader;
