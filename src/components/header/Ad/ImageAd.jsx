/* eslint-disable react/prop-types */
export default function ImageAd(props) {
  
  const {containerClass, imgClass, src, alt } = props;

  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}