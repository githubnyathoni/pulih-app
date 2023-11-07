import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PsychologistCard({
  photo, alt, name, slug, link, className,
}) {
  const { t } = useTranslation();
  const psycholog = t(`${link}.${slug}`, { returnObjects: true });

  return (
    <Link to={`/${link}/${slug}`} className={`${className} rounded-xl border-1-pink hover:shadow-lg transition-shadow duration-700 cursor-pointer`}>
      <div>
        <img src={photo} alt={alt} className="rounded-t-lg" />
        <div className="p-4">
          <h6 className="text-primary font-bold">
            {name}
          </h6>
          <div className="mt-2">
            {
              psycholog.skills.map((skill) => (
                <div key={skill} className="inline-block m-1 rounded-md border-1-pink text-xs px-2 py-0.5">
                  {skill}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Link>
  );
}

PsychologistCard.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PsychologistCard;
