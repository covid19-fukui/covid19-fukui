import Image from 'next/image';
import EarthIcon from 'public/static/image/earth.svg';
import SelectMenu from 'public/static/image/selectmenu.svg';

export const LauguageSelector: React.FC = () => {
  return (
    <div className="LauguageSelector">
      <div className="LauguageSelector-Background">
        <Image src={EarthIcon} className="EarthIcon" aria-hidden="true" />
        <Image src={SelectMenu} className="SelectMenuIcon" aria-hidden="true" />
      </div>
      <select id="LanguageSelector" className="LauguageSelector-Menu">
        <option>日本</option>
      </select>
    </div>
  );
};
