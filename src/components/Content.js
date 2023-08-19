import BoxedPageTemplate from "../templates/BoxedPageTemplate";
import Styles from "./Content.module.css";

const Content = () => {
  return (
    <BoxedPageTemplate>
      <article className={Styles.container}>
        <h2>What can AI Books Do For You?</h2>
        <p>
          <strong>In id fringilla sem</strong>, porttitor malesuada diam. Nunc
          cursus dapibus augue et imperdiet. Nunc ultricies tortor magna, vitae
          commodo enim tempor sed. Curabitur suscipit mollis interdum. Mauris
          fermentum sodales dictum. Morbi elit dui, pulvinar id fermentum sed,
          fringilla a ex. Aenean nisi massa, porttitor et varius aliquet,
          euismod tincidunt lorem. Morbi et consequat justo. Vivamus ut tempus
          lorem, eu tincidunt ipsum.
        </p>
        <p>
          Nam sed consequat nisl. Maecenas vitae ipsum dapibus, volutpat velit
          eu, mattis neque. Integer in tortor velit. Sed ipsum orci, porttitor
          at metus finibus, fringilla viverra libero. Morbi cursus nunc sed
          vestibulum finibus. <strong>Etiam efficitur orci nunc</strong>, non
          convallis nisi vulputate vel. Curabitur sit amet blandit nisi.
          Curabitur laoreet vulputate malesuada. Duis ac libero pulvinar,
          dapibus magna eu, porta orci. Fusce dictum nibh id dictum blandit.
          Proin sed venenatis orci, sed convallis lacus. Ut non varius nibh, in
          tempor dolor.
        </p>

        <p>
          Nulla hendrerit elit eget eleifend aliquet. Fusce vulputate ligula
          augue, vel posuere massa placerat in.{" "}
          <strong>Maecenas dictum id</strong> neque et pulvinar. Pellentesque
          auctor sit amet tortor nec tincidunt.
        </p>
      </article>
    </BoxedPageTemplate>
  );
};

export default Content;
