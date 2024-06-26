import React, { useEffect, useState } from 'react';
import client from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import './map.css';

type Unit = {
  _id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  gmaps: string;
  photo: { asset: { _ref: string } } | null;
};

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export const UnitList: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "unitList"]{_id, name, address, phone, whatsapp, gmaps, photo}`)
      .then((data) => setUnits(data))
      .catch(console.error);
  }, []);

  const getWhatsAppLink = (phone: string) => {
    const sanitizedPhone = phone.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    return `https://api.whatsapp.com/send/?phone=${sanitizedPhone}&text&type=phone_number&app_absent=0`;
  };

  return (
    <section className="section" id="units">
      <div className="container">
        <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Unidades </h2>
      </div>
      <div className="columns is-mobile is-centered is-multiline">
        {units.map((element) => (
          <div key={element._id} className="column is-12-mobile is-6-tablet is-5-desktop is-4-widescreen">
            <div className="card">
              {element.photo && element.photo.asset && (
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={urlFor(element.photo.asset._ref)} alt={element.name} />
                  </figure>
                </div>
              )}
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-size-4-mobile is-size-3 has-text-centered">{element.name}</p>
                  </div>
                </div>
                <div className="content">
                  <p className="subtitle is-size-6-mobile is-size-5">
                    <i className="fas fa-map-marker-alt"></i> {element.address}
                  </p>
                  <p className="subtitle is-size-6-mobile is-size-5">
                    <i className="fas fa-phone-square"></i> {element.phone}
                  </p>
                  <p className="subtitle is-size-6-mobile is-size-5">
                    <i className="fab fa-whatsapp"></i>
                    <a href={getWhatsAppLink(element.whatsapp)} target="_blank" rel="noopener noreferrer">
                      {element.whatsapp}
                    </a>
                  </p>
                </div>
                <footer className="card-footer">
                  <iframe className="google-map-card" title={element.name} src={element.gmaps}></iframe>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
