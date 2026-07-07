import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import styles from "./ImageGallery.module.css";

interface ImageInfo {
  src: string;
  label: string;
}

interface ImageGalleryProps {
  className?: string;
  images: ImageInfo[];
}

export function ImageGallery({ className, images }: ImageGalleryProps) {
  return (
    <div className={clsx(styles.ImageGallery, className)}>
      <div className={styles.inner}>
        {images.map((image) => (
          <Fragment key={image.src}>
            <img src={image.src} className={styles.image} />
            <div className={styles.label}>{image.label}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
