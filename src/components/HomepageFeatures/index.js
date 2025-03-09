import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Kami Berpengalaman",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Programer kami berpengalaman lebih dari 5 tahun dan telah tersertifikasi
        oleh BNSP (Badan Nasional Sertifikasi Profesi) sebagai IT Developer
      </>
    ),
  },
  {
    title: "Cepat",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Tim CSO dan Tim IT kami akan segera proses apapun permintaan/kendala
        anda sesuai dengan urutan antrian pada platform komunikasi
      </>
    ),
  },
  {
    title: "Hemat",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Kami akan rekomendasikan anda dengan berbagai pilihan produk yang sesuai
        dengan cost anda sehingga anda bisa menentukan pilihan
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
