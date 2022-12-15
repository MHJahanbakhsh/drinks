import Image from "next/image";
import { ImageProp } from "../../@types/props";

const RenderImage = ({ src }: ImageProp) => {
  

  return (
    <div style={{
        minHeight: "200px",
        width: "100",
        aspectRatio: '1.1',
        position: "relative",
        display:'grid',
        alignContent:'center'
      }}>
      <Image src={src} alt={""} fill />
    </div>
  );
};

export default RenderImage;
