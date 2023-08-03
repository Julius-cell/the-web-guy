import { useEffect, useState } from 'react';

import { Button } from '../at-button/Button';
import { Image } from '../at-image/Image';
import { NavBar } from '../ml-navbar/Navbar';

import type { HeaderProps } from '../../types/components-type-props';
import type { ContentfulAsset } from '../../types/contentful-types';

export const Header = ({ hero, categories, languajes = [] }: HeaderProps) => {
  const [heroImage, setHeroImage] = useState<ContentfulAsset | undefined>(undefined);

  useEffect(() => {
    if (hero?.heroAssets?.length) {
      setHeroImage(hero?.heroAssets[0].desktopAsset);
    }
  }, [hero?.heroAssets]);

  return (
    <header className="px-20 w-full">
      <div className="relative">
        <NavBar categories={categories} languajes={languajes} />

        <div className="grid auto-rows-max bg-header-shape-bg bg-no-repeat bg-10">
          <Image className="rounded-50 m-auto h-3/4" desktopAsset={heroImage} />

          <div className="w-max grid grid-cols-2 h-fit">
            <div>
              <h2>{hero?.heroTitle}</h2>
              <p>{hero?.description}</p>
            </div>
            <div className="w-max self-center justify-self-end">
              <Button label="Download CV" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
