'use client';

import React, { useEffect, useState } from 'react';
import client from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

type Professional = {
  _id: string;
  name: string;
  specialty: string;
  register: string;
  photo: { asset: { _ref: string } } | null;
  description: string;
  linkToProducts?: string;
  _idFoto?: string;
  stamp?: number;
  stamp_picture?: boolean;
};

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "professionalList"]{_id, name, specialty, register, photo, description, linkToProducts, _idFoto, stamp, stamp_picture}`)
      .then((data) => setProfessionals(data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-12" id="team">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-text">Profissionais</h2>
        <h4 className="mt-4 text-xl font-semibold text-center text-green-text">
          Somos profissionais de Psicologia, Psiquiatria, Neuropsicologia, Psicopedagogia, Neuropsicopedagogia, acupuntura, Terapia de Casal e Família, Fonoaudióloga e Psicanálise.
        </h4>
        <br />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional) => (
            <div key={professional._id} className="item">
              <div className="card border rounded-lg shadow-lg">
                <div className="card-content p-6">
                  <div className="media flex items-center">
                    {professional.photo && professional.photo.asset && (
                      <div className="media-left mr-4">
                        <figure className="image w-32 h-32">
                          <img
                            src={urlFor(professional.photo.asset._ref)}
                            alt={professional.name}
                            className="rounded-full"
                          />
                        </figure>
                      </div>
                    )}
                    <div className="media-content">
                      <p className="title text-lg font-semibold">{professional.name}</p>
                      <p className="subtitle text-sm">
                        {professional.specialty}
                        <br />
                        {professional.register}
                        <br />
                        {professional.linkToProducts && (
                          <a href={`#${professional._idFoto}`} className="text-link">
                            {professional.linkToProducts}
                          </a>
                        )}
                        {professional.stamp_picture && (
                          <figure className="mt-2">
                            <img
                              src={`https://s3-sa-east-1.amazonaws.com/espacoresiliencia.com/profissionais/${professional.stamp}.png`}
                              alt=""
                              className="w-16 h-16"
                            />
                          </figure>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="content mt-4 text-sm text-justify">{professional.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalList;
