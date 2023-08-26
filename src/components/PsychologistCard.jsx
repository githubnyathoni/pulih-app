import React from 'react';
import PropTypes from 'prop-types';

function PsychologistCard({
  photo, alt, name, skills,
}) {
  return (
    <div className="rounded-xl shadow-lg w-64 cursor-pointer">
      <img src={photo} alt={alt} className="rounded-t-xl" />
      <div className="p-4">
        <h6 className="text-primary font-bold">
          {name}
        </h6>
        <div className="mt-2">
          {
            skills.map((skill) => (
              <div key={skill} className="inline-block m-1 rounded-full border border-rose-700 text-xs px-2 py-0.5">
                {skill}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

PsychologistCard.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf.isRequired,
};

export default PsychologistCard;
