import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import profileData from '../../data/profileData';
import './SocialIcons.css';

const socialIcons = [
  { id: 'github', icon: FaGithub, url: profileData.sosial.github, label: 'GitHub' },
  { id: 'linkedin', icon: FaLinkedinIn, url: profileData.sosial.linkedin, label: 'LinkedIn' },
  { id: 'instagram', icon: FaInstagram, url: profileData.sosial.instagram, label: 'Instagram' },
  { id: 'facebook', icon: FaFacebookF, url: profileData.sosial.facebook, label: 'Facebook' },
  { id: 'tiktok', icon: FaTiktok, url: profileData.sosial.tiktok, label: 'TikTok' },
  { id: 'whatsapp', icon: FaWhatsapp, url: profileData.sosial.whatsapp, label: 'WhatsApp' },
];

function SocialIcons() {
  return (
    <div className="social-icons">
      {socialIcons.map(({ id, icon: Icon, url, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={label}
        >
          <Icon />
          <span className="social-tooltip">{label}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
