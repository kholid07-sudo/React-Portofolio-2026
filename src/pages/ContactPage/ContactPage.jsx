import { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import profileData from '../../data/profileData';
import './ContactPage.css';

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'kholid@example.com',
    href: 'mailto:kholid@example.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: profileData.sosial.whatsapp.replace('https://wa.link/', ''),
    href: profileData.sosial.whatsapp,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Indonesia',
  },
];

function ContactPage() {
  const [nama, setNama] = useState(localStorage.getItem('contact_nama') || '');
  const [email, setEmail] = useState(localStorage.getItem('contact_email') || '');
  const [pesan, setPesan] = useState(localStorage.getItem('contact_pesan') || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem('contact_nama', nama);
  }, [nama]);

  useEffect(() => {
    localStorage.setItem('contact_email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('contact_pesan', pesan);
  }, [pesan]);

  const handleKirim = () => {
    if (nama && email && pesan) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert(`Pesan terkirim! Terima kasih, ${nama}.`);
        setNama('');
        setEmail('');
        setPesan('');
        localStorage.removeItem('contact_nama');
        localStorage.removeItem('contact_email');
        localStorage.removeItem('contact_pesan');
        setIsSubmitting(false);
      }, 1000);
    } else {
      alert('Mohon isi semua field!');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <ScrollReveal>
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <p>Have a project in mind? Let&apos;s work together</p>
          </div>
        </ScrollReveal>

        <div className="contact-layout">
          <ScrollReveal delay={100}>
            <div className="contact-info-col">
              <p className="contact-description">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision. Feel free to reach out!
              </p>

              <div className="contact-details">
                {contactDetails.map((item, idx) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="contact-detail-icon">
                        <Icon />
                      </div>
                      <div className="contact-detail-text">
                        <span className="contact-detail-label">{item.label}</span>
                        <span className="contact-detail-value">{item.value}</span>
                      </div>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-detail-item"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={idx} className="contact-detail-item">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="contact-social">
                <span className="contact-social-label">Find me on</span>
                <SocialIcons />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="contact-form-col">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="nama">Name</label>
                  <input
                    type="text"
                    id="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pesan">Message</label>
                  <textarea
                    id="pesan"
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="form-input"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleKirim}
                  className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="submitting-text">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={18} />
                    </>
                  )}
                </button>
              </form>
              <p className="form-note">Your draft is saved automatically</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
