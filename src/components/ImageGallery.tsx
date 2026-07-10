import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import styles from "./ImageGallery.module.css";

interface ImageInfo {
  src: string;
  label: string;
  link?: string;
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
            <a href={image.link} className={styles.imageWrapper}>
              <img src={image.src} className={styles.image} />
            </a>
            <div className={styles.label}>{image.label}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
