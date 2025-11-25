

import React from 'react';

const CertificateImage = "https://i.ibb.co.com/xS9z2t4x/Cirtificate.png"; 
const BlackBeltImage = "https://i.ibb.co.com/Zp5MTbbx/Black-Belt-Cirtificate.png"; 

const Acchivement = () => {
  return (
    <section className="py-12 bg-gray-200 text-base-content" id="achievements">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10 text-primary">My Achievements</h2>

        <div className="border-2 border-primary rounded-xl p-6 md:p-10 shadow-lg bg-base-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-60 max-w-sm mb-6">
                <img 
                  src={CertificateImage} 
                  alt="Certificate of Completion with Excellence" 
                  className="w-full h-auto object-cover rounded-md shadow-xl"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3 text-primary">
                Complete Web Development Course
              </h3>

              <p className="text-accent max-w-md mx-auto text-sm">
                Completed the <span className='font-semibold'>Complete Web Development Course</span> from 
                Programming Hero in 2023, successfully finishing the 
                program through a professional environment and earning an 
                official certificate of completion.
                <br/>
                (Alhamdulillah)
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-60 max-w-sm mb-6">
                <img 
                  src={BlackBeltImage} 
                  alt="Black-Belt Web Developer Certified" 
                  className="w-full h-auto object-cover rounded-md shadow-xl"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3 text-primary">
                Black-Belt Web Developer Certified
              </h3>

              <p className="text-accent max-w-md mx-auto text-sm">
                Black Belt Certified Developer (Programming Hero, 2023)
                <br/>
                Selected for the <span className='font-semibold'>SCIC team</span> after completing the 
                Complete Web Development Course and achieved the 
                <span className='font-semibold'>Black Belt Certification</span> through advanced real-world 
                projects.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Acchivement;