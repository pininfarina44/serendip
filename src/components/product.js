import React from "react";

function Product(props) {
  super(props);
  const productName = props.name;
  return (
    <div>
      <section className="product-section">
        <figure className="product-img">
          <img
            src={require("../images/product-images/" + productName + ".jpg")}
            alt={props.name}
          />
        </figure>
        <div className="product-headline">
          <h3>{productName.charAt(0).toUpperCase() + productName.slice(1)}</h3>
        </div>
        <article>
          <p>
            Moringa aka (Moringa Oleifera) is a powerful medicinal herb. It is
            an excellent source of antioxidants, vitamins and minerals. It is
            said to have medicinal benefits and properties that help alleviate:
            Anemia Arthritis Diabetes Heart Disease High Blood Pressure
            Osteoarthritis Rheumatoid Arthritis Skin Ailments Stomach Ailments
            Moringa is available in a natural state, free of pesticides, in
            fresh, crushed or powder forms.<br/> <b>PRODUCT SKU #: SH-M100</b>
          </p>
        </article>
      </section>
    </div>
  );
}

export default Product;
