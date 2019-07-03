import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div className="products-page">
        <section className="product-section">
          <figure className="product-img">
            <img
              src={require("../images/product-images/moringa.jpg")}
              alt="moringa"
            />
          </figure>
          <div className="product-headline">
            <h3>Moringa</h3>
          </div>
          <article>
            <p>
              Moringa aka (Moringa Oleifera) is a powerful medicinal herb. It is
              an excellent source of antioxidants, vitamins and minerals. It is
              said to have medicinal benefits and properties that help
              alleviate: Anemia Arthritis Diabetes Heart Disease High Blood
              Pressure Osteoarthritis Rheumatoid Arthritis Skin Ailments Stomach
              Ailments Moringa is available in a natural state, free of
              pesticides, in fresh, crushed or powder forms.
              <br /> <b>PRODUCT SKU #: SH-M100</b>
            </p>
          </article>
        </section>
        <section className="product-section">
          <figure className="product-img">
            <img
              src={require("../images/product-images/gotu_kola.jpg")}
              alt="garcinia"
            />
          </figure>
          <div className="product-headline">
            <h3>Gotu Kola</h3>
          </div>
          <article>
            <p>
              Gotu Kola aka (Centella asiatica) is a powerful medicinal herb. It
              is said to have medicinal benefits and properties that help
              alleviate: Anti-inflammatory Antimicrobial Anxiety Arthritis
              Asthma Depression Diabetes Epilepsy Fatigue Kidney Disease Memory
              Enhancing Nervous System Stomach Ailments Venous Insufficiency
              Wound Healing Gotu Kola is available in a natural state, free of
              pesticides, in fresh, crushed or powder forms.
              <br /> <b>PRODUCT SKU #: SH-GK102</b>
            </p>
          </article>
        </section>
        <section className="product-section">
          <figure className="product-img">
            <img
              src={require("../images/product-images/garcinia.jpg")}
              alt="garcinia"
            />
          </figure>
          <div className="product-headline">
            <h3>Garcinia (Goraka)</h3>
          </div>
          <article>
            <p>
              Garcinia Gummi-Gutta aka (Garcinia Cambogia) is a powerful
              medicinal herb. It is said to have medicinal benefits and
              properties that help alleviate: Anti-septic Arthritis Boost immune
              System Detox Digestion Lower Cholesterol Rejuvenate Body Stomach
              Ailments Stomach Ailments Weight Loss Garcinia is available in a
              natural state, free of pesticides, in fresh, crushed or powder
              forms.
              <br /> <b>PRODUCT SKU #: SH-GK103</b>
            </p>
          </article>
        </section>
        <section className="product-section">
          <figure className="product-img">
            <img
              src={require("../images/product-images/senna.jpg")}
              alt="senna"
            />
          </figure>
          <div className="product-headline">
            <h3>Senna</h3>
          </div>
          <article>
            <p>
              Senna aka (Cassia Senna) is a powerful medicinal herb. It is said
              to have medicinal benefits and properties that help alleviate:
              Anti-Inflammatory Anti-Parasitic Constipation Detox Laxative
              Opiate induced constipation Senna is available in a natural state,
              free of pesticides, in fresh, crushed or powder forms.
              <br /> <b>PRODUCT SKU #: SH-S104</b>
            </p>
          </article>
        </section>
        <section className="product-section">
          <figure className="product-img">
            <img
              src={require("../images/product-images/cinnamon.jpg")}
              alt="cinnamon"
            />
          </figure>
          <div className="product-headline">
            <h3>Cinnamon</h3>
          </div>
          <article>
            <p>
              Cinnamon aka (Cinnamomum Verum) is a powerful medicinal spice. It
              is said to have medicinal benefits and properties that help
              alleviate: Anti-Cancer Anti-Inflammatory Antioxidants Bacterial
              Infections Diabetes Fungal Infections Heart Disease
              Neurodegenerative Diseases Rheumatism Cinnamon is available in a
              natural state, free of pesticides, in bale, cut, quilling, or
              powder forms.
              <br /> <b>PRODUCT SKU #: SH-C105</b>
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Products;
